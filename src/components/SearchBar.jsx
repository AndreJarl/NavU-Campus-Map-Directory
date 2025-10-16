import { Search } from "lucide-react"
import { Menu, MapPin , Building2  } from 'lucide-react';

import eng from "../assets/logo/eng.jpg"
import educ from "../assets/logo/educ.jpg"
import tech from "../assets/logo/tech.jpg"
import cme from "../assets/logo/cme.jpg"

import buildingData from "../data/buildingData";

import { useState } from "react";


function SearchBar({searchTerm, suggestions, handleSearch, handleSuggestionClicked}) {

  return (
  <div className="fixed top-3 right lg:left-4 2xl:left-36 2xl:top-6 px-2 z-[1000]">
  {/* 🔎 Main Search Bar */}
  <div
    className={`z-50 w-[300px] lg:w-[360px] 2xl:w-[400px] px-5 flex flex-row items-center justify-center
                border border-white/20 bg-black/70 backdrop-blur-md shadow-lg
                ${suggestions.length > 0 || (searchTerm && !(searchTerm in buildingData))
                  ? "rounded-t-2xl rounded-b-none "
                  : "rounded-2xl "}`}
  >
    <input
      onChange={handleSearch}
      className="w-[200px] rounded-2xl lg:w-[400px] 2xl:w-[600px] px-2 py-3 
                 bg-transparent text-sm text-white placeholder-white/70
                 border-none outline-none"
      type="search"
      placeholder="Search building/facilities"
    />
    <div className="flex gap-2 text-white">
      <h1 className="text-xl cursor-pointer"><Search /></h1>

    </div>
  </div>

  {/* ❌ No Result */}
  {suggestions.length === 0 && searchTerm && !(searchTerm in buildingData) ? (
    <div
      className="z-30 -mt-0.5 flex flex-col items-center justify-center gap-2
                 max-h-[460px] overflow-auto rounded-b-lg border-x border-b border-white/20
                 bg-black/80 backdrop-blur-md text-white shadow-xl"
    >
      <i className="py-4 text-sm text-gray-300">No building/facilities found.</i>
    </div>
  ) : (
    /* ✅ Suggestions List */
    <div
      className={`z-40 -mt-0.5 flex-col gap-1 max-h-[500px] overflow-auto
                  rounded-b-2xl border-x border-b border-white/20
                  bg-black/70 backdrop-blur-md text-white shadow-md
                  ${suggestions.length > 0 ? "flex" : "hidden"}`}
    >
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          onClick={() => handleSuggestionClicked(suggestion)}
          className="flex flex-row items-center gap-4 w-full py-2 px-4
                     cursor-pointer  transition hover:bg-white/10"
        >
          <h1><Building2 /></h1>
          <div className="flex flex-col">
            {suggestion.room ? (
              <>
                <p className="text-sm">{suggestion.room.name}</p>
                <p className="text-xs italic text-gray-300">{suggestion.room.code}</p>
                <p className="text-xs italic text-gray-300 flex">
                  {suggestion.building} - Floor {suggestion.floor}
                </p>
              </>
            ) : (
              <>
                <p className="text-sm font-medium">{suggestion.building}</p>
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