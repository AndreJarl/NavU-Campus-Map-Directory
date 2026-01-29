import React, { useState } from "react";
import { db, collection, addDoc } from "../config/firebase.js";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  { id: 1, field: "year", text: "What is your current year level?", options: ["1st Year", "2nd Year", "3rd Year", "4th Year"] },
  { id: 2, field: "satisfaction", text: "How satisfied are you with using the kiosk?", options: ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied", "Very Unsatisfied"] },
  { id: 3, field: "usability", text: "How would you rate the kiosk’s usability?", options: ["Very Easy", "Easy", "Neutral", "Difficult", "Very Difficult"] }
];

export default function FlashcardSurvey({ survey, setSurvey }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetSurvey = () => {
    setCurrent(0);
    setAnswers({});
    setShowThankYou(false);
    setLoading(false);
  };

  const handleAnswer = async (option) => {
    const q = questions[current];
    const newAnswers = { ...answers, [q.field]: option };
    setAnswers(newAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      try {
        setLoading(true);
        const surveyCollection = collection(db, "studentResponse");
        await addDoc(surveyCollection, newAnswers);
        
        setLoading(false);
        setShowThankYou(true);

        // Wait 2 seconds, then close the survey. 
        // Closing it will trigger the Parent's 1-minute timer to restart.
        setTimeout(() => {
          setSurvey(false);
          resetSurvey(); 
        }, 2000);
      } catch (err) {
        console.error("Error saving survey:", err);
        setLoading(false);
      }
    }
  };

  if (!survey) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-md">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white shadow-2xl rounded-3xl p-10 w-80 text-center flex flex-col items-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
            />
            <p className="mt-4 font-medium text-gray-700">Submitting...</p>
          </motion.div>
        ) : showThankYou ? (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-2xl rounded-3xl p-10 w-96 text-center"
          >
            <span className="text-5xl mb-4 block">🎉</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank you!</h2>
            <p className="text-gray-600">Your feedback helps us improve the kiosk.</p>
          </motion.div>
        ) : (
          <motion.div
            key={questions[current].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white shadow-2xl rounded-3xl p-8 w-[400px] border border-gray-100"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Survey</span>
              <span className="text-xs text-gray-400">Question {current + 1}/{questions.length}</span>
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-8 leading-tight">
              {questions[current].text}
            </h2>

            <div className="flex flex-col gap-3">
              {questions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt)}
                  className="w-full text-left px-5 py-4 rounded-2xl border-2 border-gray-50 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 font-medium text-gray-700 hover:text-blue-700"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}