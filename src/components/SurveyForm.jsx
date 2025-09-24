
import React, { useState, useEffect } from "react";
import {db,collection, addDoc} from "../config/firebase.js";
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

// function SurveyForm({survey}) {
//     const [year, setYear] = useState("");
//     const [satisfaction, setSatisfaction] = useState("");
//     const [usage, setUsage] = useState("");

//     const surveyCollection = collection(db, "studentResponse");
    
//     const handleSubmit = async (e) =>{
//          e.preventDefault();

//          if(!year || !satisfaction || !usage) return toast.error("Please answer all questions.")
        
//           try {
//             await addDoc(surveyCollection, {year, satisfaction, usage});
//             toast.success("Thank you for the feedback!");
//             console.log(surveyCollection.data);
//             setYear("");
//             setSatisfaction("");
//             setUsage("");

//           } catch (error) {
//             console.error("Error submitting answers", error);
//             toast.error("Failed to submit answers.")
//           }
//         }

//   return (
//     <form className={`absolute ${survey ? 'flex' : 'hidden'}  top-[30%] left-[40%]  w-[300px] h-[200px]  flex-col justify-center p-4 bg-white border rounded shadow-lg z-50`} onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
     
//       <label>
//         Year Level:
//         <select value={year} onChange={e => setYear(e.target.value)}>
//           <option value="">Select</option>
//           <option value="1st Year">1st Year</option>
//           <option value="2nd Year">2nd Year</option>
//           <option value="3rd Year">3rd Year</option>
//           <option value="4th Year">4th Year</option>
//         </select>
//       </label>
//       <br />
//       <label>   
//         Satisfaction:
//         <select value={satisfaction} onChange={e => setSatisfaction(e.target.value)}>
//           <option value="">Select</option>
//           <option value="Very Satisfied">Very Satisfied</option>
//           <option value="Satisfied">Satisfied</option>
//           <option value="Neutral">Neutral</option>
//           <option value="Unsatisfied">Unsatisfied</option>
//           <option value="Very Unsatisfied">Very Unsatisfied</option>
//         </select>
//       </label>
//       <br />
//       <label>
//         Usage Frequency:
//         <select value={usage} onChange={e => setUsage(e.target.value)}>
//           <option value="">Select</option>
//           <option value="Daily">Daily</option>
//           <option value="Weekly">Weekly</option>
//           <option value="Monthly">Monthly</option>
//           <option value="Rarely">Rarely</option>
//         </select>
//       </label>
//       <br />
//       <button type="submit">Submit Survey</button>
//      <Toaster  position="top-center"  reverseOrder={false}/>
//     </form>
//   )
// }




import { motion, AnimatePresence } from "framer-motion";


const questions = [
  {
    id: 1,
    field: "year",
    text: "What is your current year level?",
    options: ["1st Year", "2nd Year", "3rd Year", "4th Year"]
  },
  {
    id: 2,
    field: "satisfaction",
    text: "How satisfied are you with using the kiosk?",
    options: ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied", "Very Unsatisfied"]
  },
  {
    id: 3,
    field: "usability",
    text: "How would you rate the kiosk’s usability?",
    options: ["Very Easy", "Easy", "Neutral", "Difficult", "Very Difficult"]
  }
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
    setAnswers({ ...answers, [q.field]: option });

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const finalAnswers = { ...answers, [q.field]: option };

      try {
        setLoading(true); // show loading
        const surveyCollection = collection(db, "studentResponse");
        await addDoc(surveyCollection, finalAnswers);
        console.log("Saved to Firestore:", finalAnswers);
        setLoading(false); // stop loading

        // Show thank you
        setShowThankYou(true);

        // Hide survey after 2s & reset
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
    <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-md">
      <AnimatePresence mode="wait">
        {loading ? (
          // 🔄 Loading screen
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-xl rounded-2xl p-8 w-80 text-center flex flex-col items-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"
            />
            <p className="mt-4 text-gray-600">Submitting your response...</p>
          </motion.div>
        ) : showThankYou ? (
          // 🎉 Thank you screen
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center"
          >
            <h2 className="text-xl font-semibold mb-4">🎉 Thank you!</h2>
            <p className="text-gray-600">Your feedback has been submitted.</p>
          </motion.div>
        ) : (
          // 📝 Questions
          <motion.div
            key={questions[current].id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center"
          >
            <p className="mb-3 text-sm text-gray-500">
              Question {current + 1} of {questions.length}
            </p>
            <h2 className="text-lg font-semibold mb-6">
              {questions[current].text}
            </h2>
            <div className="flex flex-col gap-3">
              {questions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt)}
                  className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 transition"
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






// export default SurveyForm