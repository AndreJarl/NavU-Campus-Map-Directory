import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { collection, getDocs, db } from "../config/firebase";

const Dashboard = () => {
  const [responses, setResponses] = useState([]);
  const surveyCollection = collection(db, "studentResponse");

  // Fetch survey responses from Firestore
  const fetchResponses = async () => {
    try {
      const snapshot = await getDocs(surveyCollection);
      const data = snapshot.docs.map((doc) => doc.data());
      setResponses(data);
    } catch (err) {
      console.error("Error fetching responses:", err);
    }
  };

  useEffect(() => {
    fetchResponses();
  }, []);

  // Count occurrences for a given field
  const countOptions = (field) => {
    return responses.reduce((acc, r) => {
      if (!r[field]) return acc;
      acc[r[field]] = (acc[r[field]] || 0) + 1;
      return acc;
    }, {});
  };

  // Aggregate counts
  const yearCounts = countOptions("year");
  const satisfactionCounts = countOptions("satisfaction");
  const totalResponses = responses.length;

  // --- Dark mode gradients ---
  const gradients = [
    ["#42a5f5", "#1e88e5"], // blue
    ["#66bb6a", "#388e3c"], // green
    ["#ffa726", "#f57c00"], // orange
    ["#ab47bc", "#8e24aa"], // purple
    ["#ef5350", "#c62828"], // red
    ["#26c6da", "#0097a7"]  // teal
  ];

  // --- Doughnut Chart (Year Levels) ---
  const pieOption = {
    backgroundColor: "#121212",
    title: {
      text: "Student Respondents by Year Level",
      left: "center",
      textStyle: { color: "#fff" }
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)"
    },
    legend: {
      bottom: 0,
      textStyle: { color: "#ccc" }
    },
    series: [
      {
        name: "Year Level",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#121212",
          borderWidth: 2
        },
        label: {
          show: true,
          color: "#ddd"
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 25,
            shadowColor: "rgba(255,255,255,0.3)"
          }
        },
        data: Object.entries(yearCounts).map(([name, value], idx) => ({
          name,
          value,
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                { offset: 0, color: gradients[idx % gradients.length][0] },
                { offset: 1, color: gradients[idx % gradients.length][1] }
              ]
            }
          }
        }))
      }
    ],
    graphic: {
      type: "text",
      left: "center",
      top: "center",
      style: {
        text: `Total\n${totalResponses}`,
        textAlign: "center",
        fill: "#fff",
        fontSize: 18,
        fontWeight: "bold"
      }
    }
  };

  // --- Bar Chart Race (Satisfaction) ---
const barOption = {
  backgroundColor: "#121212",
  title: {
    text: "Student Satisfaction",
    left: "center",
    textStyle: { color: "#fff" }
  },
  tooltip: { 
    show: false // Disable tooltip completely
  },
  grid: { top: 60, bottom: 40, left: 120, right: 40 },
  xAxis: {
    type: "value",
    axisLabel: { color: "#ccc" },
    axisLine: { lineStyle: { color: "#555" } },
    splitLine: { lineStyle: { color: "#333" } }
  },
  yAxis: {
    type: "category",
    inverse: true,
    axisLabel: { color: "#ccc" },
    axisLine: { lineStyle: { color: "#555" } },
    data: Object.keys(satisfactionCounts)
  },
  series: [
    {
      realtimeSort: true,
      name: "Satisfaction",
      type: "bar",
      data: Object.values(satisfactionCounts).map((val, idx) => ({
        value: val,
        itemStyle: {
          borderRadius: [0, 8, 8, 0],
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              { offset: 0, color: gradients[idx % gradients.length][0] },
              { offset: 1, color: gradients[idx % gradients.length][1] }
            ]
          }
        },
        emphasis: {
          disabled: true // disable hover highlight
        }
      })),
      label: {
        show: true,
        position: "right",
        color: "#fff"
      }
    }
  ],
  animationDuration: 2000,
  animationDurationUpdate: 1000,
  animationEasing: "linear",
  animationEasingUpdate: "linear"
};



  return (
    <>
    <p className="text-center text-5xl py-7 text-white font-bold bg-[#1e1e1e]">Student Response Dashboard</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pt-4 bg-[#1e1e1e] min-h-screen">
      {/* Pie Chart */}
      <div className="bg-[#121212] rounded-2xl shadow-lg p-4 w-full h-[300px] md:h-[400px]">
        <ReactECharts option={pieOption} style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Bar Chart */}
      <div className="bg-[#121212] rounded-2xl shadow-lg p-4 w-full h-[300px] md:h-[400px]">
        <ReactECharts option={barOption} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
