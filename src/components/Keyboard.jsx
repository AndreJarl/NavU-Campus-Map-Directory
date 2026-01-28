import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Delete } from 'lucide-react';

const Keyboard = ({ query, setQuery }) => {
  const [isCaps, setIsCaps] = useState(false);

  const rows = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter"],
    ["Caps", "z", "x", "c", "v", "b", "n", "m", "Bksp"],
    ["Space"],
  ];

  const handleKeyPress = (key) => {
    const currentVal = String(query || "");

    if (key === "Bksp") {
      setQuery(currentVal.slice(0, -1));
    } else if (key === "Space") {
      setQuery(currentVal + " ");
    } else if (key === "Caps") {
      setIsCaps(!isCaps);
    } else if (key === "Enter") {
       // Optional logic here
    } else {
      const char = isCaps ? key.toUpperCase() : key.toLowerCase();
      setQuery(currentVal + char);
    }
  };

  return (
    <motion.div 
      drag
      dragMomentum={false}
      /* Added 'hidden' for mobile and 'lg:flex' for desktop */
      className="hidden lg:flex fixed bottom-10 left-1/2 -translate-x-1/2 z-50 p-4 touch-none select-none flex-col items-center"
    >
      {/* Dark Keyboard Body */}
      <div className="p-3 backdrop-blur-xl bg-black/70 rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Centered Drag Handle */}
        <div className='bg-white/40 w-16 h-1.5 rounded-full mb-4 mx-auto'></div>

        {rows.map((row, i) => (
          <div key={i} className="flex justify-center gap-2 mb-2">
            {row.map((key) => {
              const isSpecial = ["Enter", "Bksp", "Caps", "Space"].includes(key);
              
              return (
                <button
                  key={key}
                  onPointerDown={(e) => e.stopPropagation()} 
                  onClick={() => handleKeyPress(key)}
                  className={`
                    /* Height remains strictly h-12 */
                    h-12 flex items-center justify-center rounded-xl font-medium transition-all
                    active:scale-95 duration-75 border border-white/5
                    
                    /* Increased widths */
                    ${key === "Space" ? "w-[450px] bg-slate-100/10" : ""}
                    ${!isSpecial ? "w-16 bg-slate-100/5" : ""}
                    ${isSpecial && key !== "Space" ? "w-24 bg-slate-100/20 text-[10px] uppercase tracking-wider" : ""}
                    
                    /* Style States */
                    ${key === "Caps" && isCaps ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]" : "text-gray-300"}
                    hover:bg-slate-100/15 hover:text-white
                  `}
                >
                  {key === "Bksp" ? <Delete size={20} /> : (isCaps && !isSpecial ? key.toUpperCase() : key)}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Keyboard;