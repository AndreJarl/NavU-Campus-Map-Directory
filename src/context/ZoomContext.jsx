import { createContext, useContext, useRef } from "react";

const ZoomContext = createContext(null);

export function ZoomProvider({ children }) {
  const zoomRef = useRef(null);
  const registerZoom = (fn) => { zoomRef.current = fn; };
  const zoomToBuilding = (name) => { zoomRef.current?.(name); };

  return (
    <ZoomContext.Provider value={{ registerZoom, zoomToBuilding }}>
      {children}
    </ZoomContext.Provider>
  );
}

export const useZoomContext = () => useContext(ZoomContext);