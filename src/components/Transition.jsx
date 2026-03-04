import { useFloorQuery } from "../context/FloorContext";

export default function Transition({ visible }) {

    const {currentFloor} = useFloorQuery();
  return (
    
    <div
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="text-white text-7xl">Floor {currentFloor}</span>
    </div>
  );
}