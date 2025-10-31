import React, { useRef, useState, useCallback, useEffect } from 'react';
import Floor1 from '../svg/Floor1';

const DraggableZoomableSVG = ({OpenCard}) => {
  const floor =1;
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [viewBox, setViewBox] = useState(
      floor === 1 ? { x:45.81961764330944, y:581.7792625282988, width: 1440, height: 1024 } :
      floor === 2 ? {x: 3, y: 4, width: 1440, height: 1024 } : floor === 3 ? {} :{}
  );
  const [scale, setScale] = useState(4.3);
  const [isDragging, setIsDragging] = useState(false);
  
  // Use refs for values that change during drag (won't trigger re-renders)
  const lastMousePos = useRef({ x: 0, y: 0 });
  const touchStartDistance = useRef(0);
  const touchStartViewBox = useRef(null);

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

  
 const buildingCoordinates =[
     {"College of Engineering Building": {x: 223.71365113209748, y: 687.793026800932, zoom: 10},
      "Engineering Laboratory": {x: 235.31365113209748 , y:689.6823256939209 , zoom:10},
      "Education Building" : {x:98.92186333708202, y:685.2400273912788, zoom: 10},
      "KIOSK" : {x:195.55873484546186, y: 718.7435944269491, zoom: 10 },
      "College of Technology/COT Building": {x: 133.27215374026395, y:457.4405872181686, zoom: 6.795}
    }
 ]

  // Programmatic zoom to specific coordinates
  const zoomToCoordinates = useCallback((targetX, targetY, targetScale) => {
    const newScale = Math.max(0.1, Math.min(10, targetScale));
    const baseWidth = 1440;
    const baseHeight = 1024;
    
    const newWidth = baseWidth / newScale;
    const newHeight = baseHeight / newScale;
    
    // Center the view on the target coordinates
    const newX = targetX - newWidth / 2;
    const newY = targetY - newHeight / 2;
    
    setScale(newScale);
    setViewBox({
      x: newX,
      y: newY,
      width: newWidth,
      height: newHeight
    });
    
    console.log(`Zooming to: X=${targetX}, Y=${targetY}, Scale=${newScale}`);
  }, []);

  const zooomBuildingbyName = useCallback((buildingName) =>{
         const building = buildingCoordinates.find(b=>b[buildingName]);
         if(building && building[buildingName]){
             const coords = building[buildingName];
             zoomToCoordinates(coords.x, coords.y, coords.zoom);
         }else{
              console.error("building not found by name", buildingName);
         }
  }, [buildingCoordinates, zoomToCoordinates])

  // OPTIMIZED: Handle mouse down for dragging
  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY }; // Use ref instead of state
    e.preventDefault();
  }, []);

  // OPTIMIZED: Handle mouse move for dragging - much faster
  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;

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

  // Handle wheel for zooming (keep original)
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Get mouse position in SVG coordinates
    const mouseSVG = screenToSVG(mouseX, mouseY);
    
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(4, Math.min(10, scale * zoomFactor));
    
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
  }, [scale, viewBox, screenToSVG, logCoordinates]);

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
      // Single touch - start dragging
      setIsDragging(true);
      lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else if (e.touches.length === 2) {
      // Two touches - start pinch to zoom
      setIsDragging(false);
      const distance = getTouchDistance(e.touches[0], e.touches[1]);
      touchStartDistance.current = distance;
      touchStartViewBox.current = { ...viewBox, scale };
    }
    e.preventDefault();
  }, [viewBox, scale]);

  // OPTIMIZED: Handle touch move for mobile
  const handleTouchMove = useCallback((e) => {
    if (e.touches.length === 1 && isDragging) {
      // Single touch - dragging (optimized)
      const touch = e.touches[0];
      const deltaX = touch.clientX - lastMousePos.current.x;
      const deltaY = touch.clientY - lastMousePos.current.y;

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
    } else if (e.touches.length === 2 && touchStartViewBox.current) {
      // Two touches - pinch to zoom (keep original for accuracy)
      const distance = getTouchDistance(e.touches[0], e.touches[1]);
      const center = getTouchCenter(e.touches[0], e.touches[1]);
      
      const zoomRatio = distance / touchStartDistance.current;
      const newScale = Math.max(0.1, Math.min(10, touchStartViewBox.current.scale * zoomRatio));
      
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
    }
    e.preventDefault();
  }, [isDragging, viewBox.width, viewBox.height, scale, screenToSVG]);

  // Handle touch end for mobile
  const handleTouchEnd = useCallback((e) => {
    if (e.touches.length === 0) {
      setIsDragging(false);
      touchStartDistance.current = 0;
      touchStartViewBox.current = null;
      logCoordinates();
    } else if (e.touches.length === 1) {
      // Switch from zoom to drag
      setIsDragging(true);
      lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      touchStartDistance.current = 0;
      touchStartViewBox.current = null;
    }
  }, [logCoordinates]);



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
      className="w-full h-screen bg-white overflow-hidden   active:cursor-grabbing "
    >
     <Floor1 zooomBuildingbyName={zooomBuildingbyName} ref={svgRef} viewBox={viewBox} OpenCard={OpenCard}/>
    </div>
  );
};

export default DraggableZoomableSVG;