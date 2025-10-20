import React from 'react';
import { useState } from 'react';
import { useCategory } from '../context/CategoryContext';


function Categories() {
    const {category, setCategory} = useCategory();
    
    const [activeCategory, setActiveCategory] = useState(""); // stores only one active category


  const categories = [
    { id: "Restroom", label: "Restroom", icon: "🚻" },
    { id: "Sports", label: "Sports", icon: "🏀" },
    { id: "Room", label: "Room", icon: "🏫" },
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
    <div className="absolute top-10 lg:top-4 lg:left-1/2 -translate-x-[30%] flex gap-3 z-50">
      {categories.map((cat) => (
         
        <button
          key={cat.id}
          onClick={() => handleClick(cat.label)}
          className={`flex items-center gap-2 px-4 py-1 rounded-full ${activeCategory === cat.label ? "bg-red-700/60" : "bg-black/70"}
         backdrop-blur-md border border-white/10
            shadow-lg transition`}
        >
          <span className="text-lg">{cat.icon}</span>
          <span className="text-sm font-medium text-white drop-shadow">
            {cat.label}
          </span>
        </button>
      ))}

      

    </div>
  );
}

export default Categories;
