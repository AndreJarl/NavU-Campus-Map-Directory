import React from 'react';
import { useState } from 'react';
import { useCategory } from '../context/CategoryContext';

function Categories() {
    const {category, setCategory} = useCategory();
    
    const [activeCategory, setActiveCategory] = useState(""); // stores only one active category

  const categories = [
    { id: "Restroom", label: "Restroom", icon: "🚻" },
    { id: "Sports", label: "Sports", icon: "🏀" },
    { id: "Admin", label: "Admin", icon: "👨🏻‍💻" },
    { id: "Laboratory", label: "Laboratory", icon: "🔬" },
    { id: "Food", label: "Food", icon: "🍴" },
    { id: "Faculty", label: "Faculty", icon: "🧑‍🏫" },
  ];
    
const handleClick = (cat) => {
  setCategory((prev) => {
    const isCurrentlyActive = prev[cat];
   
    // Reset all categories to false
    const reset = Object.keys(prev).reduce(
      (acc, key) => ({ ...acc, [key]: false }),
      {}
    );

    // If the clicked category was active, set activeCategory to ""
    if (isCurrentlyActive) {
      setActiveCategory("");
    } else {
      setActiveCategory(cat);
    }
     console.log(category);

    // Toggle the clicked category
    return { ...reset, [cat]: !isCurrentlyActive };
   
  });
};

  const handleReset = () => {
    setCategory((prev) => {
      const reset = Object.keys(prev).reduce(
        (acc, key) => ({ ...acc, [key]: false }),
        {}
      );
      return reset;
    });
  };

 
  return (
  <div className="fixed bottom-1 left-1/2 -translate-x-1/2 lg:top-2 lg:left-1/2 lg:-translate-x-[22%] w-full max-w-[95vw] lg:w-auto px-2 z-[50] pointer-events-none">
    <div className="flex gap-3 lg:gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide py-2 pointer-events-auto">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleClick(cat.label)}
          className={`flex items-center gap-2 px-4 py-1 rounded-full flex-shrink-0 cursor-pointer pointer-events-auto ${
            category && activeCategory === cat.label ? "bg-red-700/60" : "bg-black/70"
          } backdrop-blur-md border border-white/10 shadow-lg transition select-none`}
        >
          <span className="text-lg pointer-events-none">{cat.icon}</span>
          <span className="text-sm font-medium text-white drop-shadow pointer-events-none">
            {cat.label}
          </span>
        </button>
      ))}
    </div>
  </div>
);

}

export default Categories;