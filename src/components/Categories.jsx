import React from 'react'
import { Toilet, Dumbbell, DoorClosed, FlaskConical, Utensils } from "lucide-react";

function Categories({category, setCategory}) {
  
    
  const categories = [
    { id: "restroom", label: "Restroom", icon: "🚻" },
    { id: "sports", label: "Sports", icon: "🏀" },
    { id: "room", label: "Room", icon: "🏫" },
    { id: "laboratory", label: "Laboratory", icon: "🔬" },
    { id: "food", label: "Food", icon: "🍴" },
  ];

    
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-3 z-50">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setCategory(cat.label)}
          className="flex items-center gap-2 px-4 py-1 rounded-full
                     bg-black/40 backdrop-blur-md border border-white/10
                     shadow-lg hover:bg-black/60 transition"
        >
          <span className="text-lg">{cat.icon}</span>
          <span className="text-sm font-medium text-white drop-shadow">
            {cat.label}
          </span>
        </button>
      ))}
    </div>
  
  )
}

export default Categories