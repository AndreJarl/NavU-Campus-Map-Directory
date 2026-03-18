import React, { useRef, useState, useCallback, useEffect, memo } from "react";
import Floor1 from "../svg/Floor1";
import Floor2 from "../svg/Floor2";
import Floor3 from "../svg/Floor3";
import Floor4 from "../svg/Floor4";
import { buildingCoordinates } from "../hooks/BuildingCoordinates";
import { useFloorQuery } from "../context/FloorContext";
import { useZoomBuilding } from "../hooks/ZoomBuildingbyName";
import { useZoomController } from "../hooks/ZoomToCoordinates";
import { Target } from "lucide-react";
import { useZoomContext } from "../context/ZoomContext";

const BASE_WIDTH = 1440;
const BASE_HEIGHT = 1024;
const DEFAULT_VIEWBOX = {
  x: 45.81961764330944,
  y: 581.7792625282988,
  width: BASE_WIDTH,
  height: BASE_HEIGHT,
};

const MIN_SCALE = 3.0;
const MAX_SCALE = 15.0;
const INITIAL_SCALE = 4.3;
const FLOOR_FADE_MS = 300;

const getInitialViewBox = (scale = INITIAL_SCALE) => ({
  x: DEFAULT_VIEWBOX.x,
  y: DEFAULT_VIEWBOX.y,
  width: BASE_WIDTH / scale,
  height: BASE_HEIGHT / scale,
});

const floorComponents = {
  1: Floor1,
  2: Floor2,
  3: Floor3,
  4: Floor4,
};

const DraggableZoomableSVG = ({ onDragStart, OpenCard }) => {
  const { currentFloor } = useFloorQuery();
  const currentFloorCoordinates = buildingCoordinates[currentFloor];
  const { registerZoom } = useZoomContext();

  const svgRef = useRef(null);
  const containerRef = useRef(null);

  const [scale, setScale] = useState(INITIAL_SCALE);
  const [viewBox, setViewBox] = useState(getInitialViewBox(INITIAL_SCALE));
  const [isDragging, setIsDragging] = useState(false);

  const [displayFloor, setDisplayFloor] = useState(currentFloor);
  const [previousFloor, setPreviousFloor] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const lastMousePos = useRef({ x: 0, y: 0 });
  const touchStartDistance = useRef(0);
  const touchStartViewBox = useRef(null);
  const touchStartPos = useRef({ x: 0, y: 0 });
  const touchStartTime = useRef(0);
  const hasMoved = useRef(false);

  const frameRef = useRef(null);
  const pendingDragRef = useRef(null);

  const screenToSVG = useCallback((clientX, clientY) => {
    if (!svgRef.current) return { x: 0, y: 0 };

    const pt = svgRef.current.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;

    const ctm = svgRef.current.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };

    const svgP = pt.matrixTransform(ctm.inverse());
    return { x: svgP.x, y: svgP.y };
  }, []);

  const { zoomToCoordinates } = useZoomController({
    setScale,
    setViewBox,
    MIN_SCALE,
    MAX_SCALE,
  });

  const zooomBuildingbyName = useZoomBuilding({
    currentFloorCoordinates,
    zoomToCoordinates,
  });

  useEffect(() => {
    registerZoom(zooomBuildingbyName);
  }, [registerZoom, zooomBuildingbyName]);

  useEffect(() => {
    if (currentFloor === displayFloor) return;

    setPreviousFloor(displayFloor);
    setDisplayFloor(currentFloor);
    setIsTransitioning(true);

    const timer = setTimeout(() => {
      setPreviousFloor(null);
      setIsTransitioning(false);
    }, FLOOR_FADE_MS);

    return () => clearTimeout(timer);
  }, [currentFloor, displayFloor]);

  const scheduleDragUpdate = useCallback(() => {
    if (frameRef.current) return;

    frameRef.current = requestAnimationFrame(() => {
      const drag = pendingDragRef.current;
      const container = containerRef.current;

      if (!drag || !container) {
        frameRef.current = null;
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const scaleX = viewBox.width / containerRect.width;
      const scaleY = viewBox.height / containerRect.height;

      const svgDeltaX = drag.deltaX * scaleX;
      const svgDeltaY = drag.deltaY * scaleY;

      setViewBox((prev) => ({
        ...prev,
        x: prev.x - svgDeltaX,
        y: prev.y - svgDeltaY,
      }));

      pendingDragRef.current = null;
      frameRef.current = null;
    });
  }, [viewBox.width, viewBox.height]);

  const handleMouseDown = useCallback(
    (e) => {
      if (e.button !== 0) return;
      onDragStart?.();
      setIsDragging(true);
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      e.preventDefault();
    },
    [onDragStart]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - lastMousePos.current.x;
      const deltaY = e.clientY - lastMousePos.current.y;

      lastMousePos.current = { x: e.clientX, y: e.clientY };
      pendingDragRef.current = { deltaX, deltaY };
      scheduleDragUpdate();

      e.preventDefault();
    },
    [isDragging, scheduleDragUpdate]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();

      const newScale = Math.max(
        MIN_SCALE,
        Math.min(MAX_SCALE, scale * (e.deltaY > 0 ? 0.9 : 1.1))
      );

      if (newScale === scale) return;

      const mouseSVG = screenToSVG(e.clientX, e.clientY);
      const zoomRatio = newScale / scale;

      const newWidth = viewBox.width / zoomRatio;
      const newHeight = viewBox.height / zoomRatio;

      const newX = mouseSVG.x - (mouseSVG.x - viewBox.x) / zoomRatio;
      const newY = mouseSVG.y - (mouseSVG.y - viewBox.y) / zoomRatio;

      setScale(newScale);
      setViewBox({
        x: newX,
        y: newY,
        width: newWidth,
        height: newHeight,
      });
    },
    [scale, viewBox, screenToSVG]
  );

  const getTouchDistance = (touch1, touch2) => {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getTouchCenter = (touch1, touch2) => ({
    x: (touch1.clientX + touch2.clientX) / 2,
    y: (touch1.clientY + touch2.clientY) / 2,
  });

  const handleTouchStart = useCallback(
    (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        touchStartPos.current = { x: touch.clientX, y: touch.clientY };
        touchStartTime.current = Date.now();
        lastMousePos.current = { x: touch.clientX, y: touch.clientY };
        hasMoved.current = false;
        setIsDragging(false);
      } else if (e.touches.length === 2) {
        setIsDragging(false);
        touchStartDistance.current = getTouchDistance(e.touches[0], e.touches[1]);
        touchStartViewBox.current = { ...viewBox, scale };
        e.preventDefault();
      }
    },
    [viewBox, scale]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - lastMousePos.current.x;
        const deltaY = touch.clientY - lastMousePos.current.y;

        const totalMoveX = touch.clientX - touchStartPos.current.x;
        const totalMoveY = touch.clientY - touchStartPos.current.y;
        const moveDistance = Math.sqrt(totalMoveX * totalMoveX + totalMoveY * totalMoveY);

        if (moveDistance > 10 && !isDragging) {
          setIsDragging(true);
          hasMoved.current = true;
          e.preventDefault();
        }

        if (isDragging && hasMoved.current) {
          lastMousePos.current = { x: touch.clientX, y: touch.clientY };
          pendingDragRef.current = { deltaX, deltaY };
          scheduleDragUpdate();
          e.preventDefault();
        }
      } else if (e.touches.length === 2 && touchStartViewBox.current) {
        const distance = getTouchDistance(e.touches[0], e.touches[1]);
        const center = getTouchCenter(e.touches[0], e.touches[1]);

        const newScale = Math.max(
          MIN_SCALE,
          Math.min(MAX_SCALE, touchStartViewBox.current.scale * (distance / touchStartDistance.current))
        );

        if (newScale !== scale) {
          const centerSVG = screenToSVG(center.x, center.y);
          const zoomRatioScale = newScale / touchStartViewBox.current.scale;

          const newWidth = touchStartViewBox.current.width / zoomRatioScale;
          const newHeight = touchStartViewBox.current.height / zoomRatioScale;

          const newX =
            centerSVG.x - (centerSVG.x - touchStartViewBox.current.x) / zoomRatioScale;
          const newY =
            centerSVG.y - (centerSVG.y - touchStartViewBox.current.y) / zoomRatioScale;

          setScale(newScale);
          setViewBox({
            x: newX,
            y: newY,
            width: newWidth,
            height: newHeight,
          });
        }

        e.preventDefault();
      }
    },
    [isDragging, scale, screenToSVG, scheduleDragUpdate]
  );

  const handleTouchEnd = useCallback(
    (e) => {
      if (e.touches.length === 0) {
        const wasTap = !hasMoved.current && !isDragging;
        const tapDuration = Date.now() - touchStartTime.current;

        if (wasTap && tapDuration < 300 && e.changedTouches?.length > 0) {
          const touch = e.changedTouches[0];
          let element = null;

          if (document.elementsFromPoint) {
            const elements = document.elementsFromPoint(touch.clientX, touch.clientY);
            element =
              elements.find(
                (el) =>
                  el.tagName === "path" ||
                  el.tagName === "text" ||
                  (el.tagName === "svg" && el.closest("svg"))
              ) || elements[0];
          } else {
            element = document.elementFromPoint(touch.clientX, touch.clientY);
          }

          if (element) {
            const clickEvent = new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
              view: window,
              clientX: touch.clientX,
              clientY: touch.clientY,
            });
            element.dispatchEvent(clickEvent);
          }
        }

        setIsDragging(false);
        touchStartDistance.current = 0;
        touchStartViewBox.current = null;
        hasMoved.current = false;
      } else if (e.touches.length === 1) {
        setIsDragging(false);
        hasMoved.current = false;

        const touch = e.touches[0];
        lastMousePos.current = { x: touch.clientX, y: touch.clientY };
        touchStartPos.current = { x: touch.clientX, y: touch.clientY };
        touchStartTime.current = Date.now();
        touchStartDistance.current = 0;
        touchStartViewBox.current = null;
      }
    },
    [isDragging]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [
    handleWheel,
    handleMouseDown,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseMove,
    handleMouseUp,
  ]);

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleZoomIn = useCallback(() => {
    const newScale = Math.min(MAX_SCALE, scale * 1.2);
    if (newScale === scale) return;

    const newWidth = BASE_WIDTH / newScale;
    const newHeight = BASE_HEIGHT / newScale;
    const centerX = viewBox.x + viewBox.width / 2;
    const centerY = viewBox.y + viewBox.height / 2;

    setScale(newScale);
    setViewBox({
      x: centerX - newWidth / 2,
      y: centerY - newHeight / 2,
      width: newWidth,
      height: newHeight,
    });
  }, [scale, viewBox]);

  const handleZoomOut = useCallback(() => {
    const newScale = Math.max(MIN_SCALE, scale / 1.2);
    if (newScale === scale) return;

    const newWidth = BASE_WIDTH / newScale;
    const newHeight = BASE_HEIGHT / newScale;
    const centerX = viewBox.x + viewBox.width / 2;
    const centerY = viewBox.y + viewBox.height / 2;

    setScale(newScale);
    setViewBox({
      x: centerX - newWidth / 2,
      y: centerY - newHeight / 2,
      width: newWidth,
      height: newHeight,
    });
  }, [scale, viewBox]);

  const handleReset = useCallback(() => {
    setScale(INITIAL_SCALE);
    setViewBox(getInitialViewBox(INITIAL_SCALE));
  }, []);

  const CurrentFloorComponent = floorComponents[displayFloor];
  const PreviousFloorComponent = previousFloor ? floorComponents[previousFloor] : null;

  return (
    <div
      ref={containerRef}
      className="w-full h-screen bg-white overflow-hidden active:cursor-grabbing"
    >
      <div className="absolute lg:bottom-20 right-6 z-10 flex flex-col gap-3">
        <div className="flex flex-col bg-[#2D2D31] rounded-2xl shadow-xl border border-white/5 overflow-hidden">
          <button
            onClick={handleZoomIn}
            className="w-12 h-12 flex items-center justify-center hover:bg-white/10 active:bg-white/5 transition-colors"
            title="Zoom In"
          >
            <span className="text-2xl font-light text-white/90">+</span>
          </button>

          <div className="h-[1px] bg-white/10 mx-3" />

          <button
            onClick={handleZoomOut}
            className="w-12 h-12 flex items-center justify-center hover:bg-white/10 active:bg-white/5 transition-colors"
            title="Zoom Out"
          >
            <span className="text-2xl font-light text-white/90">−</span>
          </button>
        </div>

        <button
          onClick={handleReset}
          className="w-12 h-12 bg-[#2D2D31] border border-white/5 rounded-2xl shadow-xl flex items-center justify-center hover:bg-black/60 transition-colors"
          title="Reset View"
        >
          <Target size={20} className="text-white/70" strokeWidth={2.5} />
        </button>
      </div>

     <div className="relative w-full h-full">
  <div
    className={`absolute inset-0 transition-opacity duration-300 ${
      currentFloor === 1
        ? "opacity-100 pointer-events-auto"
        : "opacity-20 pointer-events-none"
    }`}
  >
    <Floor1
      zooomBuildingbyName={zooomBuildingbyName}
      ref={currentFloor === 1 ? svgRef : null}
      viewBox={viewBox}
      OpenCard={OpenCard}
    />
  </div>

  <div
    className={`absolute inset-0 transition-opacity duration-300 ${
      currentFloor === 2
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
  >
    <Floor2
      zooomBuildingbyName={zooomBuildingbyName}
      ref={currentFloor === 2 ? svgRef : null}
      viewBox={viewBox}
      OpenCard={OpenCard}
    />
  </div>

  <div
    className={`absolute inset-0 transition-opacity duration-300 ${
      currentFloor === 3
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
  >
    <Floor3
      zooomBuildingbyName={zooomBuildingbyName}
      ref={currentFloor === 3 ? svgRef : null}
      viewBox={viewBox}
      OpenCard={OpenCard}
    />
  </div>

  <div
    className={`absolute inset-0 transition-opacity duration-300 ${
      currentFloor === 4
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
  >
    <Floor4
      zooomBuildingbyName={zooomBuildingbyName}
      ref={currentFloor === 4 ? svgRef : null}
      viewBox={viewBox}
      OpenCard={OpenCard}
    />
  </div>
</div>
    </div>
  );
};

export default memo(DraggableZoomableSVG);