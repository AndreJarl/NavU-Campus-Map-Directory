import { useCallback } from "react";

export function useZoomBuilding({
  currentFloorCoordinates,
  zoomToCoordinates,
}) {
  const zooomBuildingbyName = useCallback(
    (buildingName) => {
      if (!currentFloorCoordinates) return;

      const coords = currentFloorCoordinates[buildingName];

      if (coords) {
        zoomToCoordinates(coords.x, coords.y, coords.zoom);
      } else {
        console.error("Building not found:", buildingName);
      }
    },
    [currentFloorCoordinates, zoomToCoordinates]
  );

  return zooomBuildingbyName;
}
