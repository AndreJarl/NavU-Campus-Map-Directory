import { useState, useEffect } from "react";

export default function VirtualKeyboard() {
  const [value, setValue] = useState("");
  const [shift, setShift] = useState(false);

  // Draggable state
  const [position, setPosition] = useState({ x: 379, y: 424 });
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState({ x: 0, y: 0 }); // relative mouse position

  const keys = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter"],
    ["shift", "z", "x", "c", "v", "b", "n", "m", "backspace"],
    ["space"],
  ];

  const handleKeyPress = (key) => {
    if (key === "backspace") {
      setValue((prev) => prev.slice(0, -1));
    } else if (key === "space") {
      setValue((prev) => prev + " ");
    } else if (key === "shift") {
      setShift((prev) => !prev);
    } else {
      setValue((prev) => prev + (shift ? key.toUpperCase() : key));
      if (shift) setShift(false);
    }
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setDragging(true);
    setRel({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - rel.x,
      y: e.clientY - rel.y,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  // Log the position whenever it changes
  useEffect(() => {
    console.log("Keyboard position:", position);
  }, [position]);

  return (
    <div
      className="fixed z-[100000] p-4 pt-5"
      style={{ left: position.x, top: position.y, cursor: dragging ? "grabbing" : "grab" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="bg-black/70 rounded-2xl shadow-lg p-4 max-w-2xl"
        onMouseDown={handleMouseDown}
      >
        <div className="space-y-2">
          {keys.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-2 justify-center">
              {row.map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyPress(key)}
                  className={`
                    px-6 py-3 rounded-xl shadow
                    bg-white/80 hover:bg-white active:scale-95
                    transition text-sm font-medium cursor-pointer
                    ${key === "space" ? "flex-1" : ""}
                    ${key === "shift" || key === "backspace" ? "bg-gray-300" : ""}
                  `}
                >
                  {key === "backspace"
                    ? "⌫"
                    : key === "space"
                    ? "Space"
                    : key === "shift"
                    ? "Shift"
                    : shift
                    ? key.toUpperCase()
                    : key}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
