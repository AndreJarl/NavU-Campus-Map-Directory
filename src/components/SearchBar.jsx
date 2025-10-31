import { Search } from "lucide-react"
import { Building2 } from 'lucide-react';
import buildingData from "../data/buildingData";
import { useState } from "react";

function SearchBar({ searchTerm, suggestions, handleSearch, handleSuggestionClicked }) {
  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 px-2 z-[1000] w-full max-w-[95vw] lg:max-w-none">
      {/* 🔎 Main Search Bar */}
      <div
        className={`z-50 w-full lg:w-[430px] 2xl:w-[450px] px-4 lg:px-5 flex flex-row items-center justify-between
                    border border-white/20 bg-black/70 backdrop-blur-md shadow-lg
                    ${suggestions.length > 0 || (searchTerm && !(searchTerm in buildingData))
                      ? "rounded-t-2xl rounded-b-none"
                      : "rounded-2xl"}`}
      >
        <input
          onChange={handleSearch}
          value={searchTerm}
          className="w-full lg:w-auto flex-1 px-2 py-3 lg:py-3 
                     bg-transparent text-sm text-white placeholder-white/70
                     border-none outline-none"
          type="search"
          placeholder="Search building/facilities"
        />
        <div className="flex gap-2 text-white">
          <h1 className="text-xl cursor-pointer"><Search size={20} /></h1>
        </div>
      </div>

      {/* ❌ No Result */}
      {suggestions.length === 0 && searchTerm && !(searchTerm in buildingData) ? (
        <div
          className="z-30 -mt-0.5 flex flex-col items-center justify-center gap-2
                     max-h-[300px] lg:max-h-[460px] overflow-auto rounded-b-lg border-x border-b border-white/20
                     bg-black/80 backdrop-blur-md text-white shadow-xl w-full lg:w-[400px] 2xl:w-[450px]"
        >
          <i className="py-4 text-sm text-gray-300 px-4 text-center">No building/facilities found.</i>
        </div>
      ) : (
        /* ✅ Suggestions List */
        <div
          className={`z-40 -mt-0.5 flex-col gap-1 max-h-[300px] lg:max-h-[500px] overflow-auto
                      rounded-b-2xl border-x border-b border-white/20
                      bg-black/70 backdrop-blur-md text-white shadow-md
                      w-full lg:w-[450px] 2xl:w-[450px]
                      ${suggestions.length > 0 ? "flex" : "hidden"}`}
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClicked(suggestion)}
              className="flex flex-row items-center gap-3 lg:gap-4 w-full py-2 px-3 lg:px-4
                         cursor-pointer transition hover:bg-white/10"
            >
              <h1><Building2 size={18} className="lg:size-5" /></h1>
              <div className="flex flex-col flex-1 min-w-0">
                {suggestion.room ? (
                  <>
                    <p className="text-sm truncate">{suggestion.room.name}</p>
                    <p className="text-xs italic text-gray-300 truncate">{suggestion.room.code}</p>
                    <p className="text-xs italic text-gray-300 flex truncate">
                      {suggestion.building} - Floor {suggestion.floor}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-medium truncate">{suggestion.building}</p>
                    <p className="text-xs italic text-gray-300">Building</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar