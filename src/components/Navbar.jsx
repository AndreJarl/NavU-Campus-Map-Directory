import React from 'react'
import { Search, ChevronDown , ChevronUp } from 'lucide-react';
import scenee from "../data/scene.json";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, AlignJustify } from 'lucide-react';
import { FaCaretLeft } from "react-icons/fa";
import oval from "../assets/IMG_5738.jpg"
import eng from "../assets/IMG_5856.jpg"
import fountain from "../assets/IMG_5707.jpg"
import park from "../assets/IMG_5708.jpg"
import { useScene } from '../context/SceneContext';
import Keyboard from './Keyboard';
function Navbar({keyboardClicked,setKeyboardClicked}) {
    const [query, setQuery] = useState([]);
    const [suggestion, setSuggestion] = useState([]);
    const [arrowClicked, setArrowClicked] = useState(false);
    const {currentScene, setCurrentScene} = useScene();
    

// Move filtering logic here so it reacts to 'query' changes from ANY source
    useEffect(() => {
        if (typeof query === "string" && query.trim() !== "") {
            const filteredSuggestion = Object.keys(scenee).filter((item) =>
                item.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestion(filteredSuggestion);
        } else {
            setSuggestion([]);
        }
    }, [query]); // Runs whenever 'query' updates   
    
    
    // Function to format scene ID for display
const formatSceneId = (sceneId = "") => {
    if (!sceneId) return "Search...";

    return sceneId
        .toString()
        .replace(/_/g, " ")
        .replace(/\b\w/g, char => char.toUpperCase());
};

    const handleInput = (e) => {
        const value = e.target.value;
        console.log(value);
       setQuery(value); // Just update the state
        if (value) {
            const filteredSuggestion = Object.keys(scenee).filter((item) => 
                item.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestion(filteredSuggestion);
            console.log(filteredSuggestion);
        } else {
            setSuggestion([]);
            setQuery([]);
        }
    }

    const handleSuggestionClicked = (suggestion) => {
        setQuery("");
        setCurrentScene(suggestion);
        const input = document.querySelector('input[type="search"]');
        if (input) {
            input.value = formatSceneId(suggestion); // Show formatted name
        }
        console.log(suggestion);
        setSuggestion([]);
    }

    const clicked = () => {
        if (!query || (Array.isArray(query) ? query.length === 0 : query.trim().length === 0)) {
            return; // do nothing if query is null/empty
        }
        setCurrentScene(query);
    };

    return (
        <>
            <div
                className={`absolute top-5 left-1/2 transform -translate-x-1/2 
                    lg:top-5 lg:right-10 lg:left-auto lg:transform-none 
                    w-[350px] 
                    bg-black/70 flex flex-col justify-center 
                    ${suggestion.length > 0 ? "rounded-t-2xl rounded-b-0" : "rounded-full"} 
                    shadow-black h-12 p-1 items-center text-black z-50`}
            >     
                <div className='flex items-center gap-2 bg-transparent'> 
                    <Search color='white' onClick={clicked}/>
                    <input 
                        onChange={handleInput} 
                        onClick={()=>setKeyboardClicked(true)}
                        value={query}
                        className='bg-transparent text-white w-[250px] outline-none' 
                        placeholder={formatSceneId(currentScene)} // This will show formatted scene ID
                        type="search" 
                    />
                    <p onClick={() => setArrowClicked(!arrowClicked)}>
                        {arrowClicked ? <ChevronUp color='white' size={30} /> : <ChevronDown color='white' size={30} />}
                    </p>
                </div>
            </div>

            <div
                className={`absolute top-16 left-1/2 transform -translate-x-1/2 
                    lg:top-16 lg:right-10 lg:left-auto lg:transform-none 
                    h-[60vh] w-[350px] 
                    bg-black/70 rounded-b-2xl 
                    ${suggestion && suggestion.length > 0 ? 'block' : 'hidden'} 
                    z-40`}
            >
                <div className='overflow-x-auto h-[60vh] pt-8'>
                    {suggestion.map((suggestions, index) => (
                        <div className='flex flex-col gap-4' key={index}>
                            <ul 
                                onClick={() => {handleSuggestionClicked(suggestions);
                                           setKeyboardClicked(false);
                                }} 
                                className='text-base cursor-pointer text-white py-2 hover:bg-black p-2 pl-3'
                            >
                                {formatSceneId(suggestions)} {/* Show formatted name in suggestions */}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`absolute overflow-x-hidden ${arrowClicked ? 'block' : 'hidden'} flex justify-center items-center top-0 pt-16 z-30 right-10 pr- h-[99vh] w-[400px]`}>
                <div className='flex flex-row items-center'>
                    <button className='rounded-l-xl text-8xl text-white z-20'>
                        <FaCaretLeft onClick={() => setArrowClicked(!arrowClicked)} />
                    </button>
                    <div className='flex flex-col gap-6 items-center overflow-y-scroll h-[80vh]'>
                        {/* Your existing hardcoded image buttons */}
                        <div onClick={() => {
                            setCurrentScene("oval_entrance");
                            setArrowClicked(false);
                        }} className="relative inline-block cursor-pointer">
                            <img 
                                className="w-[300px] h-[140px] p-2 rounded-md bg-white" 
                                src={oval} 
                                alt="" 
                            />
                            <div className="absolute top-2 left-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] 
                                            bg-gray-800 bg-opacity-50 flex items-center justify-center 
                                            rounded-md">
                                <span className="text-white text-2xl font-bold">
                                    {formatSceneId("oval_entrance")}
                                </span>
                            </div>
                        </div>
                        
                        <div className="relative inline-block cursor-pointer">
                            <img 
                                className="w-[300px] h-[140px] p-2 rounded-md bg-white" 
                                src={eng} 
                                alt="" 
                            />
                            <div className="absolute top-2 left-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] 
                                            bg-gray-800 bg-opacity-50 flex items-center justify-center 
                                            rounded-md">
                                <span className="text-white text-2xl text-center font-bold">
                                    UNDER DEVELOPMENT
                                </span>
                            </div>
                        </div>
                        
                        <div onClick={() => {
                            setCurrentScene("ERRC Building");
                            setArrowClicked(false);
                        }} className="relative inline-block cursor-pointer">
                            <img 
                                className="w-[300px] h-[140px] p-2 rounded-md bg-white" 
                                src={fountain} 
                                alt="" 
                            />
                            <div className="absolute top-2 left-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] 
                                            bg-gray-800 bg-opacity-50 flex items-center justify-center 
                                            rounded-md">
                                <span className="text-white text-2xl text-center font-bold">
                                    {formatSceneId("ERRC Building")}
                                </span>
                            </div>
                        </div>
                        
                        <div className="relative inline-block cursor-pointer">
                            <img 
                                className="w-[300px] h-[140px] p-2 rounded-md bg-white" 
                                src={park} 
                                alt="" 
                            />
                            <div className="absolute top-2 left-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] 
                                            bg-gray-800 bg-opacity-50 flex items-center justify-center 
                                            rounded-md">
                                <span className="text-white text-2xl text-center font-bold">
                                    UNDER DEVELOPMENT
                                </span>
                            </div>
                        </div>
                        
                        <div className="relative inline-block cursor-pointer">
                            <img 
                                className="w-[300px] h-[140px] p-2 rounded-md bg-white" 
                                src={fountain} 
                                alt="" 
                            />
                            <div className="absolute top-2 left-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] 
                                            bg-gray-800 bg-opacity-50 flex items-center justify-center 
                                            rounded-md">
                                <span className="text-white text-2xl text-center font-bold">
                                    UNDER DEVELOPMENT
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            { keyboardClicked && <Keyboard query={query} setQuery={setQuery} />}
        </>
    )
}

export default Navbar;