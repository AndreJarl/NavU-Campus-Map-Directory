import React, { useEffect, useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { collection, getDocs, db } from "../config/firebase";

const Dashboard = () => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  const surveyCollection = collection(db, "studentResponse");

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const snapshot = await getDocs(surveyCollection);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setResponses(data);
      } catch (err) {
        console.error("Error fetching responses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, []);

  const countOptions = (field) => {
    return responses.reduce((acc, r) => {
      const value = r[field];
      if (!value && value !== 0) return acc;
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
  };

  const averageField = (field) => {
    const valid = responses
      .map((r) => Number(r[field]))
      .filter((v) => !Number.isNaN(v) && v > 0);

    if (!valid.length) return 0;
    return valid.reduce((sum, v) => sum + v, 0) / valid.length;
  };

  const formatAverage = (value) => value.toFixed(2);

  const totalResponses = responses.length;

  const yearCounts = countOptions("yearLevel");
  const familiarityCounts = countOptions("campusFamiliarity");
  const usedBeforeCounts = countOptions("usedBefore");
  const tryingToFindCounts = countOptions("tryingToFind");
  const foundNeededInfoCounts = countOptions("foundNeededInfo");
  const overallSatisfactionCounts = countOptions("overallSatisfaction");

  const likertFields = [
    { key: "correctLocation", label: "Correct Location", group: "Accuracy" },
    { key: "quickResponse", label: "Quick Response", group: "Accuracy" },
    { key: "easyToUse", label: "Ease of Use", group: "Usability" },
    { key: "easyToUnderstand", label: "Easy to Understand", group: "Usability" },
    { key: "clearReadableInfo", label: "Clear & Readable Info", group: "Usability" },
    { key: "touchscreenResponsive", label: "Touchscreen Responsive", group: "Usability" },
    { key: "easyForNavigationNeeds", label: "Supports Navigation Needs", group: "Accessibility" },
    { key: "accessibleInformation", label: "Accessible Information", group: "Accessibility" },
    { key: "helpedKnowWhereToGo", label: "Helped Users Know Where to Go", group: "Effectiveness" },
    { key: "reliableDirections", label: "Reliable Directions", group: "Effectiveness" },
    { key: "enoughInformation", label: "Enough Information Provided", group: "Effectiveness" },
    { key: "overallSatisfaction", label: "Overall Satisfaction", group: "Satisfaction" },
  ];

  const likertAverages = likertFields.map((item) => ({
    ...item,
    value: Number(formatAverage(averageField(item.key))),
  }));

  const dimensionAverages = [
    {
      name: "Accuracy",
      value: Number(
        formatAverage(
          (averageField("correctLocation") + averageField("quickResponse")) / 2
        )
      ),
    },
    {
      name: "Usability",
      value: Number(
        formatAverage(
          (averageField("easyToUse") +
            averageField("easyToUnderstand") +
            averageField("clearReadableInfo") +
            averageField("touchscreenResponsive")) /
            4
        )
      ),
    },
    {
      name: "Accessibility",
      value: Number(
        formatAverage(
          (averageField("easyForNavigationNeeds") +
            averageField("accessibleInformation")) /
            2
        )
      ),
    },
    {
      name: "Effectiveness",
      value: Number(
        formatAverage(
          (averageField("helpedKnowWhereToGo") +
            averageField("reliableDirections") +
            averageField("enoughInformation")) /
            3
        )
      ),
    },
    {
      name: "Satisfaction",
      value: Number(formatAverage(averageField("overallSatisfaction"))),
    },
  ];

  const sortedIndicators = [...likertAverages].sort((a, b) => b.value - a.value);
  const strongestIndicator = sortedIndicators[0];
  const weakestIndicator = sortedIndicators[sortedIndicators.length - 1];

  const optionalFeedback = responses
    .map((r) => (r.feedback || "").trim())
    .filter(Boolean);

  const totalLikertAnswered = responses.filter(
    (r) => Number(r.overallSatisfaction) > 0
  ).length;

  const completionRate = useMemo(() => {
    if (!totalResponses) return 0;
    const yes = foundNeededInfoCounts["Yes"] || 0;
    const partly = foundNeededInfoCounts["Partly"] || 0;
    return ((yes + partly) / totalResponses) * 100;
  }, [foundNeededInfoCounts, totalResponses]);

  const colorPalette = [
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#10b981",
    "#3b82f6",
    "#8b5cf6",
    "#ec4899",
    "#14b8a6",
  ];

  const cardClass =
    "rounded-3xl border border-white/10 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,23,42,0.08)]";

  const buildDonutOption = (title, counts, centerText = "") => ({
    tooltip: {
      trigger: "item",
      formatter: "{b}<br/>{c} responses ({d}%)",
    },
    legend: {
      bottom: 0,
      icon: "circle",
      textStyle: {
        color: "#475569",
        fontSize: 12,
      },
    },
    series: [
      {
        name: title,
        type: "pie",
        radius: ["50%", "72%"],
        center: ["50%", "45%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 12,
          borderColor: "#ffffff",
          borderWidth: 4,
        },
        label: {
          show: false,
        },
        emphasis: {
          scale: true,
          scaleSize: 6,
        },
        data: Object.entries(counts).map(([name, value], idx) => ({
          name,
          value,
          itemStyle: {
            color: colorPalette[idx % colorPalette.length],
          },
        })),
      },
    ],
    graphic: centerText
      ? [
          {
            type: "text",
            left: "center",
            top: "37%",
            style: {
              text: centerText,
              textAlign: "center",
              fill: "#0f172a",
              fontSize: 16,
              fontWeight: 700,
            },
          },
        ]
      : [],
  });

  const satisfactionBarOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    grid: {
      left: 40,
      right: 20,
      top: 30,
      bottom: 35,
    },
    xAxis: {
      type: "category",
      data: ["5", "4", "3", "2", "1"],
      axisLine: { lineStyle: { color: "#cbd5e1" } },
      axisLabel: { color: "#475569" },
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      splitLine: { lineStyle: { color: "#e2e8f0" } },
      axisLabel: { color: "#64748b" },
    },
    series: [
      {
        name: "Responses",
        type: "bar",
        barWidth: 42,
        data: [
          overallSatisfactionCounts[5] || 0,
          overallSatisfactionCounts[4] || 0,
          overallSatisfactionCounts[3] || 0,
          overallSatisfactionCounts[2] || 0,
          overallSatisfactionCounts[1] || 0,
        ],
        itemStyle: {
          borderRadius: [12, 12, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#ef4444" },
            { offset: 1, color: "#f97316" },
          ]),
        },
        label: {
          show: true,
          position: "top",
          color: "#0f172a",
          fontWeight: 600,
        },
      },
    ],
  };

  const dimensionRadarOption = {
    tooltip: {
      trigger: "item",
    },
    radar: {
      radius: "62%",
      center: ["50%", "55%"],
      indicator: dimensionAverages.map((item) => ({
        name: item.name,
        max: 5,
      })),
      axisName: {
        color: "#334155",
        fontSize: 12,
      },
      splitArea: {
        areaStyle: {
          color: ["rgba(239,68,68,0.03)", "rgba(239,68,68,0.06)"],
        },
      },
      splitLine: {
        lineStyle: {
          color: "#e2e8f0",
        },
      },
      axisLine: {
        lineStyle: {
          color: "#cbd5e1",
        },
      },
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: dimensionAverages.map((d) => d.value),
            name: "Average Score",
            areaStyle: {
              color: "rgba(239,68,68,0.20)",
            },
            lineStyle: {
              color: "#ef4444",
              width: 3,
            },
            itemStyle: {
              color: "#ef4444",
            },
            symbolSize: 8,
          },
        ],
      },
    ],
  };

  const indicatorsBarOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    grid: {
      left: 170,
      right: 24,
      top: 20,
      bottom: 20,
    },
    xAxis: {
      type: "value",
      min: 0,
      max: 5,
      axisLabel: { color: "#64748b" },
      splitLine: { lineStyle: { color: "#e2e8f0" } },
    },
    yAxis: {
      type: "category",
      axisLabel: {
        color: "#334155",
        fontSize: 11,
      },
      data: likertAverages.map((item) => item.label),
    },
    series: [
      {
        type: "bar",
        data: likertAverages.map((item, idx) => ({
          value: item.value,
          itemStyle: {
            color: colorPalette[idx % colorPalette.length],
            borderRadius: [0, 12, 12, 0],
          },
        })),
        label: {
          show: true,
          position: "right",
          color: "#0f172a",
          formatter: ({ value }) => Number(value).toFixed(2),
          fontWeight: 700,
        },
      },
    ],
  };

  const kpiCards = [
    {
      title: "Total Responses",
      value: totalResponses,
      subtitle: "All submitted survey entries",
    },
    {
      title: "Avg. Overall Satisfaction",
      value: formatAverage(averageField("overallSatisfaction")),
      subtitle: "Based on 5-point Likert scale",
    },
    {
      title: "Info Found Rate",
      value: `${completionRate.toFixed(1)}%`,
      subtitle: "Users who answered Yes or Partly",
    },
    {
      title: "Likert Completion",
      value: totalLikertAnswered,
      subtitle: "Responses with satisfaction score",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
        <div className="rounded-3xl bg-white px-8 py-6 shadow-lg border border-slate-200 text-slate-700 text-lg font-semibold">
          Loading analytics dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#fff1f2,transparent_35%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="mb-8">
          <div className="inline-flex items-center rounded-full bg-red-50 border border-red-100 px-4 py-1.5 text-sm font-semibold text-red-600 mb-4">
            NavU Kiosk Research Analytics
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                Student Response Dashboard
              </h1>
              <p className="mt-3 text-slate-600 max-w-3xl text-sm md:text-base leading-relaxed">
                This dashboard summarizes student perceptions of the NavU kiosk
                in terms of respondent profile, usability, accessibility,
                effectiveness, and overall satisfaction. It is designed for
                presentation to the research panel.
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-md px-5 py-4 min-w-[220px]">
              <p className="text-sm text-slate-500">Research Snapshot</p>
              <p className="text-2xl font-bold text-slate-900">{totalResponses}</p>
              <p className="text-sm text-slate-600">total respondents collected</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          {kpiCards.map((card) => (
            <div key={card.title} className={`${cardClass} p-5`}>
              <p className="text-sm font-medium text-slate-500">{card.title}</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">{card.value}</h2>
              <p className="mt-2 text-sm text-slate-600">{card.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-4 space-y-6">
            <div className={`${cardClass} p-5`}>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Respondent Profile
                </h3>
                <p className="text-sm text-slate-500">
                  Distribution of respondents by year level
                </p>
              </div>
              <div className="h-[320px]">
                <ReactECharts
                  option={buildDonutOption(
                    "Year Level",
                    yearCounts,
                    `Total\n${totalResponses}`
                  )}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>

            <div className={`${cardClass} p-5`}>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Campus Familiarity
                </h3>
                <p className="text-sm text-slate-500">
                  How familiar respondents are with the CTU Danao campus layout
                </p>
              </div>
              <div className="h-[320px]">
                <ReactECharts
                  option={buildDonutOption("Campus Familiarity", familiarityCounts)}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          </div>

          <div className="xl:col-span-8 space-y-6">
            <div className={`${cardClass} p-5`}>
              <div className="mb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Overall Satisfaction Distribution
                  </h3>
                  <p className="text-sm text-slate-500">
                    Likert scale responses from 5 (Strongly Agree) to 1 (Strongly Disagree)
                  </p>
                </div>
                <div className="text-sm text-slate-500">
                  Mean score:{" "}
                  <span className="font-bold text-slate-900">
                    {formatAverage(averageField("overallSatisfaction"))}
                  </span>
                </div>
              </div>
              <div className="h-[320px]">
                <ReactECharts
                  option={satisfactionBarOption}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`${cardClass} p-5`}>
                <p className="text-sm font-medium text-slate-500">
                  Prior NavU Usage
                </p>
                <div className="mt-4 space-y-3">
                  {Object.entries(usedBeforeCounts).map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      <span className="text-slate-700 font-medium">{label}</span>
                      <span className="text-slate-900 font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${cardClass} p-5`}>
                <p className="text-sm font-medium text-slate-500">
                  What Users Were Trying to Find
                </p>
                <div className="mt-4 space-y-3">
                  {Object.entries(tryingToFindCounts).map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      <span className="text-slate-700 font-medium">{label}</span>
                      <span className="text-slate-900 font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${cardClass} p-5`}>
                <p className="text-sm font-medium text-slate-500">
                  Were Users Able to Find What They Needed?
                </p>
                <div className="mt-4 space-y-3">
                  {Object.entries(foundNeededInfoCounts).map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      <span className="text-slate-700 font-medium">{label}</span>
                      <span className="text-slate-900 font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${cardClass} p-5`}>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Evaluation Dimensions
                </h3>
                <p className="text-sm text-slate-500">
                  Average scores across the key dimensions of the NavU kiosk
                </p>
              </div>
              <div className="h-[380px]">
                <ReactECharts
                  option={dimensionRadarOption}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">
          <div className="xl:col-span-8">
            <div className={`${cardClass} p-5`}>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Indicator-Level Mean Scores
                </h3>
                <p className="text-sm text-slate-500">
                  Item-by-item average ratings from the survey questionnaire
                </p>
              </div>
              <div className="h-[520px]">
                <ReactECharts
                  option={indicatorsBarOption}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          </div>

          <div className="xl:col-span-4 space-y-6">
            <div className={`${cardClass} p-5`}>
              <h3 className="text-lg font-bold text-slate-900">
                Key Findings Summary
              </h3>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
                  <p className="text-xs uppercase tracking-wide font-semibold text-emerald-600">
                    Strongest Indicator
                  </p>
                  <p className="mt-1 text-base font-bold text-slate-900">
                    {strongestIndicator?.label || "N/A"}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Mean Score:{" "}
                    <span className="font-bold text-slate-900">
                      {strongestIndicator?.value?.toFixed(2) || "0.00"}
                    </span>
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-50 border border-amber-100 p-4">
                  <p className="text-xs uppercase tracking-wide font-semibold text-amber-600">
                    Weakest Indicator
                  </p>
                  <p className="mt-1 text-base font-bold text-slate-900">
                    {weakestIndicator?.label || "N/A"}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Mean Score:{" "}
                    <span className="font-bold text-slate-900">
                      {weakestIndicator?.value?.toFixed(2) || "0.00"}
                    </span>
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                  <p className="text-xs uppercase tracking-wide font-semibold text-slate-500">
                    Interpretation Guide
                  </p>
                  <div className="mt-3 space-y-2 text-sm text-slate-600">
                    <p>
                      <span className="font-semibold text-slate-900">4.50–5.00</span>{" "}
                      Very high evaluation
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">3.50–4.49</span>{" "}
                      High evaluation
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">2.50–3.49</span>{" "}
                      Moderate evaluation
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">1.50–2.49</span>{" "}
                      Low evaluation
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">1.00–1.49</span>{" "}
                      Very low evaluation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${cardClass} p-5`}>
              <h3 className="text-lg font-bold text-slate-900">
                Optional Feedback
              </h3>
              <p className="text-sm text-slate-500">
                Qualitative comments from respondents
              </p>

              <div className="mt-4 max-h-[380px] overflow-y-auto space-y-3 pr-1">
                {optionalFeedback.length ? (
                  optionalFeedback.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-slate-50 border border-slate-200 p-4"
                    >
                      <p className="text-sm leading-relaxed text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-500">
                    No optional feedback submitted yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;