import { useCallback } from "react";

export function useZoomController({
  setScale,
  setViewBox,
  MIN_SCALE,
  MAX_SCALE,
  baseWidth = 1440,
  baseHeight = 1024,
}) {
  const zoomToCoordinates = useCallback(
    (targetX, targetY, targetScale) => {
      const newScale = Math.max(
        MIN_SCALE,
        Math.min(MAX_SCALE, targetScale)
      );

      const newWidth = baseWidth / newScale;
      const newHeight = baseHeight / newScale;

      const newX = targetX - newWidth / 2;
      const newY = targetY - newHeight / 2;

      setScale(newScale);
      setViewBox({
        x: newX,
        y: newY,
        width: newWidth,
        height: newHeight,
      });

      console.log(
        `ZoomTo → x:${targetX}, y:${targetY}, scale:${newScale}`
      );
    },
    [MIN_SCALE, MAX_SCALE, baseWidth, baseHeight, setScale, setViewBox]
  );

  return { zoomToCoordinates };
}
