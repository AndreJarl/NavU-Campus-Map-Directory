import React, { useState } from 'react'
import {db,collection, addDoc} from "../config/firebase.js";
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

function SurveyForm() {
    const [year, setYear] = useState("");
    const [satisfaction, setSatisfaction] = useState("");
    const [usage, setUsage] = useState("");

    const surveyCollection = collection(db, "studentResponse");
    
    const handleSubmit = async (e) =>{
         e.preventDefault();

         if(!year || !satisfaction || !usage) return toast.error("Please answer all questions.")
        
          try {
            await addDoc(surveyCollection, {year, satisfaction, usage});
            toast.success("Thank you for the feedback!");
            console.log(surveyCollection.data);
            setYear("");
            setSatisfaction("");
            setUsage("");

          } catch (error) {
            console.error("Error submitting answers", error);
            toast.error("Failed to submit answers.")
          }
        }

  return (
    <form className="absolute flex  top-[30%] left-[40%]  w-[300px] h-[200px]  flex-col justify-center p-4 bg-white border rounded shadow-lg z-50" onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
     
      <label>
        Year Level:
        <select value={year} onChange={e => setYear(e.target.value)}>
          <option value="">Select</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>
      </label>
      <br />
      <label>   
        Satisfaction:
        <select value={satisfaction} onChange={e => setSatisfaction(e.target.value)}>
          <option value="">Select</option>
          <option value="Very Satisfied">Very Satisfied</option>
          <option value="Satisfied">Satisfied</option>
          <option value="Neutral">Neutral</option>
          <option value="Unsatisfied">Unsatisfied</option>
          <option value="Very Unsatisfied">Very Unsatisfied</option>
        </select>
      </label>
      <br />
      <label>
        Usage Frequency:
        <select value={usage} onChange={e => setUsage(e.target.value)}>
          <option value="">Select</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Rarely">Rarely</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit Survey</button>
     <Toaster  position="top-center"  reverseOrder={false}/>
    </form>
  )
}

export default SurveyForm