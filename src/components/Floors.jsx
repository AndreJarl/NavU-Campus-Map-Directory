import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react'; // Changed to Up icon

function Floors() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState('Floor 1');
 
  const floors = ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4'];

  return (
    /* Changed to bottom-4 right-4 */
    <div className="absolute bottom-32 lg:bottom-5 left-6 z-[40] w-40">
      
      {/* 🥂 Glass Dropdown Menu (Positioned ABOVE the button) */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 w-full overflow-hidden
                        bg-red-100/40 backdrop-blur-xl border border-white/40 
                        rounded-2xl shadow-2xl">
          <div className="flex flex-col py-1">
            {floors.map((floor) => (
              <button
                key={floor}
                onClick={() => {
                  setSelectedFloor(floor);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors
                  ${selectedFloor === floor 
                    ? 'bg-red-500/30 text-red-900 font-bold' 
                    : 'text-red-800 hover:bg-red-500/10'}
                `}
              >
                {floor}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 🍷 Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 
                   bg-red-400/50 backdrop-blur-md border border-white/30 
                   rounded-xl text-red-900 font-medium shadow-lg 
                   hover:bg-red-400/30 transition-all active:scale-95"
      >
        <span className="text-sm">{selectedFloor}</span>
        <ChevronUp 
          size={18} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
    </div>
  );
}

export default Floors;