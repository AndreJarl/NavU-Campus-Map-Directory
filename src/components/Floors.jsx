import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';

function Floors() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState('Floor 1');
  
  const floors = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4'];

  return (
    /* Increased width from w-40 to w-48 */
    <div className="absolute bottom-32 lg:bottom-5 left-6 z-[40] w-48">
      
      {/* 🥂 Glass Dropdown Menu */}
      {isOpen && (
        <div className="absolute bottom-full mb-3 w-full overflow-hidden
                        bg-zinc-900/90 backdrop-blur-xl border border-white/10 
                        rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          <div className="flex flex-col py-1">
            {floors.map((floor) => (
              <button
                key={floor}
                onClick={() => {
                  setSelectedFloor(floor);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-5 py-3 text-sm transition-colors
                  ${selectedFloor === floor 
                    ? 'bg-red-600 text-white font-bold' 
                    : 'text-zinc-300 hover:bg-white/10'}
                `}
              >
                {floor}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 🍷 Dropdown Trigger (Navigation Style) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-3.5 
                   bg-red-700 border-2 border-red-700/40 
                   rounded-2xl text-white font-bold shadow-[0_0_20px_#dc2626]
                   hover:bg-red-500 hover:shadow-[0_0_35px_#ef4444] 
                   hover:scale-105 transition-all duration-300 active:scale-95"
      >
        <span className="text-base tracking-wide">{selectedFloor}</span>
        <ChevronUp 
          size={22} 
          className={`transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
    </div>
  );
}

export default Floors;