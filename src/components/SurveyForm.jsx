import React, { useState } from "react";
import { db, collection, addDoc } from "../config/firebase.js";
import { motion, AnimatePresence } from "framer-motion";

const likertOptions = [
  { label: "5 - Strongly Agree", value: 5 },
  { label: "4 - Agree", value: 4 },
  { label: "3 - Neutral", value: 3 },
  { label: "2 - Disagree", value: 2 },
  { label: "1 - Strongly Disagree", value: 1 },
];

const questions = [
  {
    id: 1,
    field: "yearLevel",
    text: "1. Year Level",
    type: "choice",
    options: ["1st Year", "2nd Year", "3rd Year", "4th Year", "Other"],
    hasOther: true,
  },
  {
    id: 2,
    field: "campusFamiliarity",
    text: "2. Are you familiar with the CTU Danao campus layout?",
    type: "choice",
    options: [
      "Very familiar",
      "Familiar",
      "Slightly familiar",
      "Not familiar",
    ],
  },
  {
    id: 3,
    field: "usedBefore",
    text: "3. Have you used the NavU kiosk before answering this survey?",
    type: "choice",
    options: ["Yes", "No"],
  },
  {
    id: 4,
    field: "tryingToFind",
    text: "4. What were you trying to find?",
    type: "choice",
    options: ["Classroom", "Office", "Building", "Facility", "Other"],
    hasOther: true,
  },
  {
    id: 5,
    field: "foundNeededInfo",
    text: "5. Were you able to view the location or information you needed?",
    type: "choice",
    options: ["Yes", "Partly", "No"],
  },

  // Part II - Kiosk Evaluation
  {
    id: 6,
    field: "correctLocation",
    text: "A1. The kiosk showed the correct location of the place I selected.",
    type: "likert",
  },
  {
    id: 7,
    field: "quickResponse",
    text: "A2. The kiosk responded quickly after I tapped the screen.",
    type: "likert",
  },
  {
    id: 8,
    field: "easyToUse",
    text: "B1. The kiosk was easy to use.",
    type: "likert",
  },
  {
    id: 9,
    field: "easyToUnderstand",
    text: "B2. The buttons, labels, and options were easy to understand.",
    type: "likert",
  },
  {
    id: 10,
    field: "clearReadableInfo",
    text: "B3. The text and map information were clear and readable.",
    type: "likert",
  },
  {
    id: 11,
    field: "touchscreenResponsive",
    text: "B4. The touchscreen responded properly to my inputs.",
    type: "likert",
  },
  {
    id: 12,
    field: "easyForNavigationNeeds",
    text: "C1. The kiosk was easy to use for my navigation needs on campus.",
    type: "likert",
  },
  {
    id: 13,
    field: "accessibleInformation",
    text: "C2. The information was presented in a way that was easy to access and understand.",
    type: "likert",
  },
  {
    id: 14,
    field: "helpedKnowWhereToGo",
    text: "D1. The kiosk helped me know where to go.",
    type: "likert",
  },
  {
    id: 15,
    field: "reliableDirections",
    text: "D2. The directions or location information were reliable.",
    type: "likert",
  },
  {
    id: 16,
    field: "enoughInformation",
    text: "D3. The kiosk provided enough information about campus buildings, offices, or facilities.",
    type: "likert",
  },
  {
    id: 17,
    field: "overallSatisfaction",
    text: "E1. Overall, I am satisfied with my experience using the NavU kiosk.",
    type: "likert",
  },

  // Part III
  {
    id: 18,
    field: "feedback",
    text: "Part III. Optional Feedback — What should be improved in the NavU kiosk?",
    type: "text",
    optional: true,
  },
];

export default function FlashcardSurvey({ survey, setSurvey }) {
  const [stage, setStage] = useState("intro"); // intro | questions | loading | thankyou
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [otherInput, setOtherInput] = useState("");
  const [textInput, setTextInput] = useState("");

  const currentQuestion = questions[current];

  const resetSurvey = () => {
    setStage("intro");
    setCurrent(0);
    setAnswers({});
    setOtherInput("");
    setTextInput("");
  };

  const handleDecline = () => {
    setSurvey(false);
    resetSurvey();
  };

  const handleAccept = () => {
    setStage("questions");
  };

  const goToNext = async (value) => {
    const q = questions[current];
    const newAnswers = { ...answers, [q.field]: value };
    setAnswers(newAnswers);
    setOtherInput("");
    setTextInput("");

    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      try {
        setStage("loading");
        const surveyCollection = collection(db, "studentResponse");
        await addDoc(surveyCollection, {
          ...newAnswers,
          createdAt: new Date().toISOString(),
        });

        setStage("thankyou");

        setTimeout(() => {
          setSurvey(false);
          resetSurvey();
        }, 2200);
      } catch (err) {
        console.error("Error saving survey:", err);
        setStage("questions");
      }
    }
  };

  const handleChoiceAnswer = async (option) => {
    if (currentQuestion.hasOther && option === "Other") {
      if (!otherInput.trim()) return;
      await goToNext(`Other: ${otherInput.trim()}`);
      return;
    }

    await goToNext(option);
  };

  const handleTextSubmit = async () => {
    await goToNext(textInput.trim());
  };

  const handleSkipOptional = async () => {
    await goToNext("");
  };

  if (!survey) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/45 backdrop-blur-sm px-4">
      <AnimatePresence mode="wait">
        {/* INTRO */}
        {stage === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-white shadow-2xl text-gray-900 overflow-hidden"
          >
            <div className="px-8 py-6 md:px-10 md:py-7">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 shadow-md shrink-0">
                  <span className="text-2xl text-white">📝</span>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500 mb-1">
                    Survey Form
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    Welcome to the NavU Feedback Survey
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-gray-600 text-left">
                <p>
                  We would appreciate it if you could take a few moments to share your
                  experience using the{" "}
                  <span className="font-semibold text-gray-900">NavU Kiosk</span>.
                </p>

                <p>
                  Your responses are valuable and will help us improve the quality,
                  usability, and overall effectiveness of the system.
                </p>

                <p className="text-gray-500">
                  This survey is short, easy to complete, and all responses will be
                  treated with confidentiality.
                </p>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 rounded-2xl bg-red-600 hover:bg-red-500 active:scale-[0.98] transition-all duration-200 px-5 py-3.5 text-white font-semibold shadow-md"
                >
                  Start Survey
                </button>

                <button
                  onClick={handleDecline}
                  className="flex-1 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-gray-100 active:scale-[0.98] transition-all duration-200 px-5 py-3.5 text-gray-700 font-medium"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* QUESTIONS */}
        {stage === "questions" && (
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 30, scale: 0.99 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.99 }}
            transition={{ duration: 0.22 }}
            className="w-full max-w-3xl rounded-3xl border border-gray-200 bg-white shadow-2xl text-gray-900 overflow-hidden"
          >
            <div className="px-8 py-6 md:px-10 md:py-7">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-red-500 font-semibold">
                    Quick Survey
                  </p>
                  <p className="text-sm text-gray-500">
                    Question {current + 1} of {questions.length}
                  </p>
                </div>

                <div className="w-28 h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-red-500 transition-all duration-300"
                    style={{
                      width: `${((current + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* {currentQuestion.type === "likert" && (
                <div className="mb-3 rounded-2xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-gray-700">
                  <p className="font-semibold text-red-600 mb-1">Scale:</p>
                  <p>5 - Strongly Agree</p>
                  <p>4 - Agree</p>
                  <p>3 - Neutral</p>
                  <p>2 - Disagree</p>
                  <p>1 - Strongly Disagree</p>
                </div>
              )} */}

              <h2 className="text-xl md:text-2xl font-semibold leading-snug text-gray-900 mb-5">
                {currentQuestion.text}
              </h2>

              {/* Choice Questions */}
              {currentQuestion.type === "choice" && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentQuestion.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleChoiceAnswer(opt)}
                        className="w-full rounded-2xl border border-gray-200 bg-white hover:bg-red-50 hover:border-red-300 active:scale-[0.98] transition-all duration-200 px-5 py-3.5 text-left text-gray-800 font-medium shadow-sm"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {currentQuestion.hasOther && (
                    <div className="mt-2">
                      <input
                        type="text"
                        value={otherInput}
                        onChange={(e) => setOtherInput(e.target.value)}
                        placeholder="If Other, please specify..."
                        className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                      />
                      <p className="mt-2 text-xs text-gray-400">
                        To use “Other”, type your answer first then tap the “Other” button.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Likert Questions */}
              {currentQuestion.type === "likert" && (
                <div className="grid grid-cols-1 gap-3">
                  {likertOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToNext(opt.value)}
                      className="w-full rounded-2xl border border-gray-200 bg-white hover:bg-red-50 hover:border-red-300 active:scale-[0.98] transition-all duration-200 px-5 py-3.5 text-left text-gray-800 font-medium shadow-sm"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Text Question */}
              {currentQuestion.type === "text" && (
                <div className="space-y-3">
                  <textarea
                    rows={5}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Type your feedback here..."
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-red-400"
                  />

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleTextSubmit}
                      className="flex-1 rounded-2xl bg-red-600 hover:bg-red-500 active:scale-[0.98] transition-all duration-200 px-5 py-3.5 text-white font-semibold shadow-md"
                    >
                      Submit Feedback
                    </button>

                    {currentQuestion.optional && (
                      <button
                        onClick={handleSkipOptional}
                        className="flex-1 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-gray-100 active:scale-[0.98] transition-all duration-200 px-5 py-3.5 text-gray-700 font-medium"
                      >
                        Skip
                      </button>
                    )}
                  </div>
                </div>
              )}

              <p className="mt-4 text-xs text-gray-400">
                Please select the answer that best describes your experience.
              </p>
            </div>
          </motion.div>
        )}

        {/* LOADING */}
        {stage === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-md rounded-3xl border border-gray-200 bg-white shadow-2xl px-8 py-7 text-center text-gray-900"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
              className="mx-auto h-11 w-11 rounded-full border-4 border-red-500 border-t-transparent"
            />
            <p className="mt-4 text-gray-800 font-medium">Submitting your response...</p>
            <p className="mt-1 text-sm text-gray-500">Please wait for a moment.</p>
          </motion.div>
        )}

        {/* THANK YOU */}
        {stage === "thankyou" && (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-full max-w-xl rounded-3xl border border-gray-200 bg-white shadow-2xl px-8 py-7 text-center text-gray-900"
          >
            <span className="text-4xl mb-3 block">❤️</span>
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-gray-600 leading-relaxed">
              Your feedback has been recorded successfully. We appreciate your
              time and participation in helping us improve the NavU Kiosk.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}