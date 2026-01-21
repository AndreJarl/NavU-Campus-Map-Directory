import { useState } from "react";

export default function VirtualKeyboard() {
  const [value, setValue] = useState("");
  const [shift, setShift] = useState(false);

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

  return (
    <div className="absolute -bottom-12 absolute left-1/2 -translate-x-1/2  flex items-center justify-center z-[500]  p-4 pt-5 ">
      <div className="bg-black/70 rounded-2xl shadow-lg p-4 w-full max-w-2xl">

        <div className="space-y-2">
          {keys.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-2 justify-center">
              {row.map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyPress(key)}
                  className={`
                    px-6 py-3 rounded-xl shadow
                    bg-gray-200 hover:bg-gray-300 active:scale-95
                    transition text-sm font-medium curs
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
