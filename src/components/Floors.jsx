import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { useFloorQuery } from '../context/FloorContext';

function Floors() {
  const [isOpen, setIsOpen] = useState(false);
  // Get the global state from your context
  const { currentFloor, setCurrentFloor } = useFloorQuery();
  
  const floors = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4'];

  return (
    <div className="absolute bottom-32 lg:bottom-5 left-6 z-[40] w-48">
      
      {/* 🥂 Glass Dropdown Menu */}
      {isOpen && (
        <div className="absolute bottom-full mb-3 w-full overflow-hidden
                        bg-zinc-900/90 backdrop-blur-xl border border-white/10 
                        rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          <div className="flex flex-col py-1">
            {floors.map((floorName, index) => {
              const floorNumber = index + 1; // Maps 'Floor 1' to 1, etc.
              
              return (
                <button
                  key={floorName}
                  onClick={() => {
                    setCurrentFloor(floorNumber); // Update global floor
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 text-base transition-colors
                    ${currentFloor === floorNumber 
                      ? 'bg-red-600 text-white font-bold' 
                      : 'text-zinc-300 hover:bg-white/10'}
                  `}
                >
                  {floorName}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 🍷 Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-2.5 
                   bg-red-700 border-2 border-red-700/40 
                   rounded-2xl text-white font-bold shadow-[0_0_20px_#dc2626]
                   hover:bg-red-500 hover:shadow-[0_0_35px_#ef4444] 
                   hover:scale-105 transition-all duration-300 active:scale-95"
      >
        {/* Display the current floor name based on the global state number */}
        <span className="text-lg tracking-wide uppercase ">
          {floors[currentFloor - 1] || `Floor ${currentFloor}`}
        </span>
        <ChevronUp 
          size={22} 
          className={`transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
    </div>
  );
}

export default Floors;