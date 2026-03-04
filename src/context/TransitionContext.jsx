import { useState, useContext, createContext } from "react";
import { useFloorQuery } from '../context/FloorContext';
const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
  const [show, setShow] = useState(false);
  const {currentFloor} = useFloorQuery();

  const trigger = () => {
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  };

  return (
    <TransitionContext.Provider value={{ trigger }}>
      {children}
<div
  className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform ${
    show
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-4 pointer-events-none"
  }`}
>
  <div
    className="relative flex items-center gap-4 px-6 py-4 rounded-2xl overflow-hidden"
    style={{
      background: "linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(20,20,25,0.85) 100%)",
      backdropFilter: "blur(40px) saturate(180%) brightness(0.8)",
      WebkitBackdropFilter: "blur(40px) saturate(180%) brightness(0.8)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.4)",
    }}
  >
    {/* Inner gloss highlight */}
    <div
      className="absolute top-0 left-0 right-0 h-1/2 rounded-t-3xl pointer-events-none"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
      }}
    />

    {/* Dot */}
    <div
      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
      style={{
        background: "radial-gradient(circle at 35% 35%, #60a5fa, #1d4ed8)",
        boxShadow: "0 0 10px rgba(96,165,250,0.5), inset 0 1px 1px rgba(255,255,255,0.3)",
      }}
    />

    <div className="flex flex-col relative z-10">
      <span
        className="text-[10px] text-white/50 font-semibold  uppercase leading-none mb-1"
      >
        Current Location
      </span>
      <h1
        className="text-2xl leading-none tabular-nums"
        style={{
          color: "rgba(255,255,255,0.9)",
          fontWeight: 700,
          textShadow: "0 1px 4px rgba(0,0,0,0.5)",
        }}
      >
        Floor {currentFloor}
      </h1>
    </div>
  </div>
</div>
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}
