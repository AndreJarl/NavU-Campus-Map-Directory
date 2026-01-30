import React, { useRef, useState, useCallback, useEffect } from 'react';
import Floor1 from '../svg/Floor1';
import { buildingCoordinates } from '../hooks/BuildingCoordinates';
import { useFloorQuery } from '../context/FloorContext';
import { useZoomBuilding } from '../hooks/ZoomBuildingbyName';
import {useZoomController} from "../hooks/ZoomToCoordinates"
import { Target, Accessibility } from 'lucide-react';
import Floor2 from '../svg/Floor2'
import Floor3 from '../svg/Floor3';
import Floor4 from '../svg/Floor4';

const DraggableZoomableSVG = ({onDragStart, OpenCard, setNavigating, isNavigating}) => {
 const {currentFloor} = useFloorQuery();
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [viewBox, setViewBox] = useState(
      currentFloor === 1 ? { x:45.81961764330944, y:581.7792625282988, width: 1440, height: 1024 } :
      currentFloor === 2 ? {x: 3, y: 4, width: 1440, height: 1024 } : currentFloor === 3 ? {} :{}
  );
  
 const currentFloorCoordinates = buildingCoordinates[currentFloor];

  const initialViewBox = currentFloor === 1 
  ? { x:45.81961764330944, y:581.7792625282988, width: 1440, height: 1024 }
  : currentFloor === 2 
  ? {x: 3, y: 4, width: 1440, height: 1024 } 
  : currentFloor === 3 ? {} : {};


  // Set your desired zoom limits
  const MIN_SCALE = 3.0;  // Increased minimum zoom (less zoom out)
  const MAX_SCALE = 15.0; // Increased maximum zoom (more zoom in)
  const initialScale = 4.3;

  const [scale, setScale] = useState(initialScale);
  const [isDragging, setIsDragging] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Use refs for values that change during drag (won't trigger re-renders)
  const lastMousePos = useRef({ x: 0, y: 0 });
  const touchStartDistance = useRef(0);
  const touchStartViewBox = useRef(null);
  const touchStartPos = useRef({ x: 0, y: 0 });
  const touchStartTime = useRef(0);
  const hasMoved = useRef(false);

  // Convert screen coordinates to SVG coordinates
  const screenToSVG = useCallback((screenX, screenY) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    
    const pt = svgRef.current.createSVGPoint();
    pt.x = screenX;
    pt.y = screenY;
    const svgP = pt.matrixTransform(svgRef.current.getScreenCTM().inverse());
    return { x: svgP.x, y: svgP.y };
  }, []);

  // Log current coordinates and zoom level
  const logCoordinates = useCallback(() => {
    console.log('Current View:', {
      x: viewBox.x,
      y: viewBox.y,
      width: viewBox.width,
      height: viewBox.height,
      zoom: scale,
      centerX: viewBox.x + viewBox.width / 2,
      centerY: viewBox.y + viewBox.height / 2
    });
  }, [viewBox, scale]);

  

const { zoomToCoordinates } = useZoomController({
  setScale,
  setViewBox,
  MIN_SCALE,
  MAX_SCALE,
});



  const zooomBuildingbyName  = useZoomBuilding({
      currentFloorCoordinates,
      zoomToCoordinates
  });

    const zoomToKiosk = () => {
    zoomToCoordinates(193.34364570600303, 760.1523181003366, 10);
  };
  
  // OPTIMIZED: Handle mouse down for dragging
  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    if (onDragStart) onDragStart();
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY }; // Use ref instead of state
    e.preventDefault();
  }, []);

  // OPTIMIZED: Handle mouse move for dragging - much faster
  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    if (!isNavigating) setNavigating(true);
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;

    // Fast calculation using current scale instead of expensive screenToSVG calls
    const containerRect = containerRef.current.getBoundingClientRect();
    const scaleX = viewBox.width / containerRect.width;
    const scaleY = viewBox.height / containerRect.height;
    
    const svgDeltaX = deltaX * scaleX;
    const svgDeltaY = deltaY * scaleY;

    setViewBox(prev => ({
      ...prev,
      x: prev.x - svgDeltaX,
      y: prev.y - svgDeltaY
    }));

    lastMousePos.current = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  }, [isDragging, viewBox.width, viewBox.height]);

  // Handle mouse up for dragging
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    logCoordinates();
  }, [logCoordinates]);

  // Handle wheel for zooming with new limits
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Get mouse position in SVG coordinates
    const mouseSVG = screenToSVG(mouseX, mouseY);
    
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale * zoomFactor));
    
    if (newScale !== scale) {
      // Calculate new viewBox based on zoom
      const zoomRatio = newScale / scale;
      
      const newWidth = viewBox.width / zoomRatio;
      const newHeight = viewBox.height / zoomRatio;
      
      // Calculate new x,y to zoom towards mouse position
      const newX = mouseSVG.x - (mouseSVG.x - viewBox.x) / zoomRatio;
      const newY = mouseSVG.y - (mouseSVG.y - viewBox.y) / zoomRatio;
      
      setScale(newScale);
      setViewBox({
        x: newX,
        y: newY,
        width: newWidth,
        height: newHeight
      });
      
      logCoordinates();
    }
  }, [scale, isNavigating, setNavigating, viewBox, screenToSVG, logCoordinates, MIN_SCALE, MAX_SCALE]);

  // Calculate distance between two touch points
  const getTouchDistance = (touch1, touch2) => {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Get center point between two touches
  const getTouchCenter = (touch1, touch2) => {
    return {
      x: (touch1.clientX + touch2.clientX) / 2,
      y: (touch1.clientY + touch2.clientY) / 2
    };
  };

  // OPTIMIZED: Handle touch start for mobile
  const handleTouchStart = useCallback((e) => {
    if (e.touches.length === 1) {
      // Single touch - record position but don't start dragging yet
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;
      touchStartPos.current = { x, y };
      touchStartTime.current = Date.now();
      lastMousePos.current = { x, y };
      hasMoved.current = false;
      setIsDragging(false); // Don't assume it's a drag yet
    } else if (e.touches.length === 2) {
      // Two touches - start pinch to zoom
      setIsDragging(false);
      const distance = getTouchDistance(e.touches[0], e.touches[1]);
      touchStartDistance.current = distance;
      touchStartViewBox.current = { ...viewBox, scale };
      e.preventDefault(); // Prevent default for pinch zoom
    }
    // Don't prevent default for single touch yet - let clicks work if it's a tap
  }, [viewBox, scale]);

  // OPTIMIZED: Handle touch move for mobile - UPDATED ZOOM LIMITS
  const handleTouchMove = useCallback((e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - lastMousePos.current.x;
      const deltaY = touch.clientY - lastMousePos.current.y;

      // Check if movement exceeds threshold to start dragging
      const totalMoveX = touch.clientX - touchStartPos.current.x;
      const totalMoveY = touch.clientY - touchStartPos.current.y;
      const moveDistance = Math.sqrt(totalMoveX * totalMoveX + totalMoveY * totalMoveY);
      const DRAG_THRESHOLD = 10; // pixels

      if (moveDistance > DRAG_THRESHOLD && !isDragging) {
        // Start dragging
        setIsDragging(true);
        hasMoved.current = true;
        if (!isNavigating) setNavigating(true);
        e.preventDefault(); // Prevent default once we're dragging
      }

      if (isDragging && hasMoved.current) {
        // Single touch - dragging (optimized)
        // Fast calculation for touch dragging
        const containerRect = containerRef.current.getBoundingClientRect();
        const scaleX = viewBox.width / containerRect.width;
        const scaleY = viewBox.height / containerRect.height;
        
        const svgDeltaX = deltaX * scaleX;
        const svgDeltaY = deltaY * scaleY;

        setViewBox(prev => ({
          ...prev,
          x: prev.x - svgDeltaX,
          y: prev.y - svgDeltaY
        }));

        lastMousePos.current = { x: touch.clientX, y: touch.clientY };
        e.preventDefault();
      }
    } else if (e.touches.length === 2 && touchStartViewBox.current) {
      // Two touches - pinch to zoom with updated limits
      const distance = getTouchDistance(e.touches[0], e.touches[1]);
      const center = getTouchCenter(e.touches[0], e.touches[1]);
      
      const zoomRatio = distance / touchStartDistance.current;
      
      // Apply the new zoom limits
      const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, touchStartViewBox.current.scale * zoomRatio));
      
      if (newScale !== scale) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = center.x - rect.left;
        const centerY = center.y - rect.top;
        
        const centerSVG = screenToSVG(centerX, centerY);
        const zoomRatioScale = newScale / touchStartViewBox.current.scale;
        
        const newWidth = touchStartViewBox.current.width / zoomRatioScale;
        const newHeight = touchStartViewBox.current.height / zoomRatioScale;
        
        const newX = centerSVG.x - (centerSVG.x - touchStartViewBox.current.x) / zoomRatioScale;
        const newY = centerSVG.y - (centerSVG.y - touchStartViewBox.current.y) / zoomRatioScale;
        
        setScale(newScale);
        setViewBox({
          x: newX,
          y: newY,
          width: newWidth,
          height: newHeight
        });
      }
      e.preventDefault(); // Prevent default for pinch zoom
    }
    // Only prevent default if we're actively dragging or pinching
    // Don't prevent for simple taps (handled in touchend)
  }, [isDragging, setNavigating, isNavigating, viewBox.width, viewBox.height, scale, screenToSVG, MIN_SCALE, MAX_SCALE]);

  // Handle touch end for mobile
  const handleTouchEnd = useCallback((e) => {
    if (e.touches.length === 0) {
      // Check if this was a tap (not a drag)
      const wasTap = !hasMoved.current && !isDragging;
      const tapDuration = Date.now() - touchStartTime.current;
      
      // If it was a tap (no movement, quick touch), synthesize a click
      if (wasTap && tapDuration < 300 && e.changedTouches && e.changedTouches.length > 0) {
        const touch = e.changedTouches[0];
        // Find element at touch point and trigger click
        // Use getElementsAtPoint for better element detection
        let element = null;
        if (document.elementsFromPoint) {
          // Get all elements at the point (more reliable)
          const elements = document.elementsFromPoint(touch.clientX, touch.clientY);
          // Find the first SVG path or text element (clickable building elements)
          element = elements.find(el => 
            el.tagName === 'path' || 
            el.tagName === 'text' || 
            (el.tagName === 'svg' && el.closest('svg'))
          ) || elements[0];
        } else {
          element = document.elementFromPoint(touch.clientX, touch.clientY);
        }
        
        if (element) {
          // Create and dispatch a click event
          const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: touch.clientX,
            clientY: touch.clientY
          });
          element.dispatchEvent(clickEvent);
        }
      }
      
      setIsDragging(false);
      touchStartDistance.current = 0;
      touchStartViewBox.current = null;
      hasMoved.current = false;
      logCoordinates();
    } else if (e.touches.length === 1) {
      // Switch from zoom to potential drag
      setIsDragging(false);
      hasMoved.current = false;
      const touch = e.touches[0];
      lastMousePos.current = { x: touch.clientX, y: touch.clientY };
      touchStartPos.current = { x: touch.clientX, y: touch.clientY };
      touchStartTime.current = Date.now();
      touchStartDistance.current = 0;
      touchStartViewBox.current = null;
    }
  }, [logCoordinates, isDragging]);



  // Add event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleWheel, handleMouseDown, handleMouseMove, handleMouseUp, handleTouchStart, handleTouchMove, handleTouchEnd]);



  // Zoom in function
const handleZoomIn = useCallback(() => {
  const newScale = Math.min(MAX_SCALE, scale * 1.2);
  if (newScale !== scale) {
    const baseWidth = 1440;
    const baseHeight = 1024;
    
    const newWidth = baseWidth / newScale;
    const newHeight = baseHeight / newScale;
    
    // Keep the center point the same
    const centerX = viewBox.x + viewBox.width / 2;
    const centerY = viewBox.y + viewBox.height / 2;
    
    const newX = centerX - newWidth / 2;
    const newY = centerY - newHeight / 2;
    
    setScale(newScale);
    setViewBox({
      x: newX,
      y: newY,
      width: newWidth,
      height: newHeight
    });
    
    logCoordinates();
  }
}, [scale, viewBox, MAX_SCALE, logCoordinates]);

// Zoom out function
const handleZoomOut = useCallback(() => {
  const newScale = Math.max(MIN_SCALE, scale / 1.2);
  if (newScale !== scale) {
    const baseWidth = 1440;
    const baseHeight = 1024;
    
    const newWidth = baseWidth / newScale;
    const newHeight = baseHeight / newScale;
    
    // Keep the center point the same
    const centerX = viewBox.x + viewBox.width / 2;
    const centerY = viewBox.y + viewBox.height / 2;
    
    const newX = centerX - newWidth / 2;
    const newY = centerY - newHeight / 2;
    
    setScale(newScale);
    setViewBox({
      x: newX,
      y: newY,
      width: newWidth,
      height: newHeight
    });
    
    logCoordinates();
  }
}, [scale, viewBox, MIN_SCALE, logCoordinates]);

const handleReset = useCallback(() => {
  const baseWidth = 1440;
  const baseHeight = 1024;
  
  setScale(initialScale);
  setViewBox({
    x: initialViewBox.x,
    y: initialViewBox.y,
    width: baseWidth / initialScale,
    height: baseHeight / initialScale
  });
  console.log('View reset to initial state');
}, [initialScale, initialViewBox]);


// Fullscreen function

    const handleFullscreen = () => {
      const elem = document.documentElement;
    
      if (!document.fullscreenElement &&    // Standard
          !document.webkitFullscreenElement && // Safari
          !document.msFullscreenElement) {     // IE11
        // Enter fullscreen
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    };
  // Update viewBox when scale changes to maintain consistency
  useEffect(() => {
    const baseWidth = 1440;
    const baseHeight = 1024;
    
    setViewBox(prev => ({
      x: prev.x,
      y: prev.y,
      width: baseWidth / scale,
      height: baseHeight / scale
    }));
  }, [scale]);

  return (
<div 
  ref={containerRef}
  className="w-full h-screen bg-white overflow-hidden active:cursor-grabbing"
>

<div className="absolute lg:bottom-20  right-6 z-10 flex flex-col gap-3">
  {/* Zoom Group - Combined Pill Shape */}
  <div className="flex flex-col bg-[#2D2D31] rounded-2xl shadow-xl border border-white/5 overflow-hidden">
    <button
      onClick={handleZoomIn}
      className="w-12 h-12 flex items-center justify-center hover:bg-white/10 active:bg-white/5 transition-colors"
      title="Zoom In"
    >
      <span className="text-2xl font-light text-white/90">+</span>
    </button>
    
    {/* Subtle divider line */}
    <div className="h-[1px] bg-white/10 mx-3" />

    <button
      onClick={handleZoomOut}
      className="w-12 h-12 flex items-center justify-center hover:bg-white/10 active:bg-white/5 transition-colors"
      title="Zoom Out"
    >
      <span className="text-2xl font-light text-white/90">−</span>
    </button>
  </div>

  {/* Reset / Center View Button */}
  <button
    onClick={handleReset}
    className="w-12 h-12 bg-[#2D2D31] border border-white/5 rounded-2xl shadow-xl flex items-center justify-center hover:bg-black/60 transition-colors"
    title="Reset View"
  >
    <Target size={20} className="text-white/70" strokeWidth={2.5} />
  </button>
</div>
   
{currentFloor === 1 ? (
  <Floor1 zooomBuildingbyName={zooomBuildingbyName} ref={svgRef} viewBox={viewBox} OpenCard={OpenCard}/>
) :  currentFloor === 2 ? (
  <Floor2 zooomBuildingbyName={zooomBuildingbyName} ref={svgRef} viewBox={viewBox} OpenCard={OpenCard}/>
): currentFloor === 3 ? (
  <Floor3 zooomBuildingbyName={zooomBuildingbyName} ref={svgRef} viewBox={viewBox} OpenCard={OpenCard}/>
) : currentFloor === 4 ? (
  <Floor4 zooomBuildingbyName={zooomBuildingbyName} ref={svgRef} viewBox={viewBox} OpenCard={OpenCard}/>
) : null}
</div>
  );
};

export default DraggableZoomableSVG;