import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { useScene } from '../context/SceneContext';
import Keyboard from './Keyboard';
import scenee from "../data/scene.json";

// Image Imports
import oval from "../assets/IMG_5738.jpg";
import eng from "../assets/IMG_5856.jpg";
import fountain from "../assets/IMG_5707.jpg";
import park from "../assets/IMG_5708.jpg";

function Navbar({ keyboardClicked, setKeyboardClicked }) {
    const [query, setQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [arrowClicked, setArrowClicked] = useState(false);
    const { currentScene, setCurrentScene } = useScene();

    useEffect(() => {
        if (typeof query === "string" && query.trim() !== "") {
            const filteredSuggestion = Object.keys(scenee).filter((item) =>
                item.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestion(filteredSuggestion);
        } else {
            setSuggestion([]);
        }
    }, [query]);

    const formatSceneId = (sceneId = "") => {
        if (!sceneId) return "Search scenes...";
        return sceneId.toString().replace(/_/g, " ").replace(/\b\w/g, char => char.toUpperCase());
    };

    const handleSuggestionClicked = (suggestion) => {
        setQuery("");
        setCurrentScene(suggestion);
        setSuggestion([]);
        setKeyboardClicked(false);
    }

    return (
        <>
            {/* --- Main Search Bar --- */}
            <div
                className={`fixed top-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:transform-none 
                w-[380px] z-50 bg-[#222222]/95 border border-white/10
                ${suggestion.length > 0 ? "rounded-t-2xl" : "rounded-full"} 
                shadow-xl h-14 px-6 flex items-center justify-between`}
            >
                <div className='flex items-center gap-3 w-full'>
                    <Search className="text-white/40" size={18} />
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        onClick={() => setKeyboardClicked(true)}
                        value={query}
                        className='bg-transparent text-white w-full outline-none placeholder:text-white/30 text-[15px]'
                        placeholder={formatSceneId(currentScene)}
                        type="text" 
                    />
                </div>
                
                <button 
                    onClick={() => setArrowClicked(!arrowClicked)}
                    className="ml-2 p-1.5 hover:bg-white/10 rounded-full"
                >
                    {arrowClicked ? <ChevronUp className="text-white/60" size={20} /> : <ChevronDown className="text-white/60" size={20} />}
                </button>
            </div>

            {/* --- Dropdown --- */}
            {suggestion.length > 0 && (
                <div
                    className="fixed top-[78px] left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:transform-none 
                    w-[380px] max-h-[45vh] overflow-y-auto z-40
                    bg-[#1c1c1c] border-x border-b border-white/10 rounded-b-2xl shadow-2xl"
                >
                    <div className='py-2'>
                        {suggestion.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleSuggestionClicked(item)}
                                className='px-6 py-3.5 text-white/70 text-sm cursor-pointer hover:bg-white/5 hover:text-white border-b border-white/5 last:border-none'
                            >
                                {formatSceneId(item)}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* --- Scene Drawer (No Delay) --- */}
            <div className={` inset-y-0 right-0 z-30 flex items-center ${arrowClicked ? 'fixed' : 'hidden'}`}>
                <div className="flex items-center h-full">
                    <div 
                        onClick={() => setArrowClicked(false)}
                        className='bg-[#222222] border-y border-l border-white/10 py-10 px-1 cursor-pointer rounded-l-xl text-white/20 hover:text-white'
                    >
                        <ChevronRight size={18} />
                    </div>
                    
                    <div className='w-[340px] h-screen bg-[#1c1c1c] border-l border-white/10 p-6 flex flex-col gap-6 overflow-y-auto pt-24 shadow-2xl'>
                        <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest px-2">Quick Navigation</p>
                        
                        <div className="space-y-4">
                            {[
                                { id: "oval_entrance", img: oval, dev: false },
                                { id: "Engineering", img: eng, dev: true },
                                { id: "ERRC Building", img: fountain, dev: false },
                                { id: "Park", img: park, dev: true }
                            ].map((scene, idx) => (
                                <div 
                                    key={idx}
                                    onClick={() => !scene.dev && (setCurrentScene(scene.id), setArrowClicked(false))}
                                    className="group relative h-28 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/30"
                                >
                                    <img 
                                        className={`w-full h-full object-cover opacity-60 ${scene.dev ? 'grayscale opacity-20' : ''}`} 
                                        src={scene.img} 
                                        alt={scene.id} 
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-transparent">
                                        <span className={`text-xs font-bold tracking-wider uppercase ${scene.dev ? 'text-white/20' : 'text-white'}`}>
                                            {scene.dev ? "Under Construction" : formatSceneId(scene.id)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {keyboardClicked && <Keyboard query={query} setQuery={setQuery} />}
        </>
    );
}

export default Navbar;