import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { useFloorQuery } from '../context/FloorContext';

function Floors() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentFloor, setCurrentFloor } = useFloorQuery();
  
  const floors = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4'];

  return (
    <div className="absolute bottom-24 lg:bottom-5 left-10 z-[40] w-36">
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 w-full overflow-hidden
                        bg-zinc-900/95 backdrop-blur-xl border border-white/10 
                        rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          <div className="flex flex-col py-1">
            {floors.map((floorName, index) => {
              const floorNumber = index + 1;
              return (
                <button
                  key={floorName}
                  onClick={() => {
                    setCurrentFloor(floorNumber);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors
                    ${currentFloor === floorNumber 
                      ? 'bg-red-600 text-white font-semibold' 
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

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2.5
                   bg-red-600 border border-red-500/30
                   rounded-xl text-white font-semibold text-sm
                   shadow-lg shadow-red-900/40
                   hover:bg-red-500 transition-all duration-200 active:scale-95"
      >
        <span className="tracking-wide uppercase">
          {floors[currentFloor - 1] || `Floor ${currentFloor}`}
        </span>
        <ChevronUp 
          size={16} 
          className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
    </div>
  );
}

export default Floors;