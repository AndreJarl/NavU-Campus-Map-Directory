import React, { useRef, useState, useCallback, useEffect } from 'react';
import Floor1 from '../svg/Floor1';

const DraggableZoomableSVG = () => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [viewBox, setViewBox] = useState({ x: 496.4244991553312, y: 605.833617331491, width: 1440, height: 1024 });
  const [scale, setScale] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [touchStartDistance, setTouchStartDistance] = useState(0);
  const [touchStartViewBox, setTouchStartViewBox] = useState(null);

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
     {COE: {x: 733.452167502955, y: 808.7221821594258, zoom: 10},
      CEAS: {x:607.4988593974863 , y:805.3215473938008 , zoom:10}
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


  // Handle mouse down for dragging
  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return; // Only left mouse button
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
    e.preventDefault();
  }, []);

  // Handle mouse move for dragging
  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;

    // Convert pixel delta to SVG coordinate delta
    const startPoint = screenToSVG(lastMousePos.x, lastMousePos.y);
    const endPoint = screenToSVG(e.clientX, e.clientY);
    
    const svgDeltaX = startPoint.x - endPoint.x;
    const svgDeltaY = startPoint.y - endPoint.y;

    setViewBox(prev => ({
      ...prev,
      x: prev.x + svgDeltaX,
      y: prev.y + svgDeltaY
    }));

    setLastMousePos({ x: e.clientX, y: e.clientY });
    e.preventDefault();
  }, [isDragging, lastMousePos, screenToSVG]);

  // Handle mouse up for dragging
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    logCoordinates();
  }, [logCoordinates]);

  // Handle wheel for zooming
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Get mouse position in SVG coordinates
    const mouseSVG = screenToSVG(mouseX, mouseY);
    
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(3, Math.min(10, scale * zoomFactor));
    
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

  // Handle touch start for mobile
  const handleTouchStart = useCallback((e) => {
    if (e.touches.length === 1) {
      // Single touch - start dragging
      setIsDragging(true);
      setLastMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    } else if (e.touches.length === 2) {
      // Two touches - start pinch to zoom
      setIsDragging(false);
      const distance = getTouchDistance(e.touches[0], e.touches[1]);
      setTouchStartDistance(distance);
      setTouchStartViewBox({ ...viewBox, scale });
    }
    e.preventDefault();
  }, [viewBox, scale]);

  // Handle touch move for mobile
  const handleTouchMove = useCallback((e) => {
    if (e.touches.length === 1 && isDragging) {
      // Single touch - dragging
      const touch = e.touches[0];
      const deltaX = touch.clientX - lastMousePos.x;
      const deltaY = touch.clientY - lastMousePos.y;

      const startPoint = screenToSVG(lastMousePos.x, lastMousePos.y);
      const endPoint = screenToSVG(touch.clientX, touch.clientY);
      
      const svgDeltaX = startPoint.x - endPoint.x;
      const svgDeltaY = startPoint.y - endPoint.y;

      setViewBox(prev => ({
        ...prev,
        x: prev.x + svgDeltaX,
        y: prev.y + svgDeltaY
      }));

      setLastMousePos({ x: touch.clientX, y: touch.clientY });
    } else if (e.touches.length === 2 && touchStartViewBox) {
      // Two touches - pinch to zoom
      const distance = getTouchDistance(e.touches[0], e.touches[1]);
      const center = getTouchCenter(e.touches[0], e.touches[1]);
      
      const zoomRatio = distance / touchStartDistance;
      const newScale = Math.max(0.1, Math.min(10, touchStartViewBox.scale * zoomRatio));
      
      if (newScale !== scale) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = center.x - rect.left;
        const centerY = center.y - rect.top;
        
        const centerSVG = screenToSVG(centerX, centerY);
        const zoomRatioScale = newScale / touchStartViewBox.scale;
        
        const newWidth = touchStartViewBox.width / zoomRatioScale;
        const newHeight = touchStartViewBox.height / zoomRatioScale;
        
        const newX = centerSVG.x - (centerSVG.x - touchStartViewBox.x) / zoomRatioScale;
        const newY = centerSVG.y - (centerSVG.y - touchStartViewBox.y) / zoomRatioScale;
        
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
  }, [isDragging, lastMousePos, screenToSVG, touchStartDistance, touchStartViewBox, scale]);

  // Handle touch end for mobile
  const handleTouchEnd = useCallback((e) => {
    if (e.touches.length === 0) {
      setIsDragging(false);
      setTouchStartDistance(0);
      setTouchStartViewBox(null);
      logCoordinates();
    } else if (e.touches.length === 1) {
      // Switch from zoom to drag
      setIsDragging(true);
      setLastMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      setTouchStartDistance(0);
      setTouchStartViewBox(null);
    }
  }, [logCoordinates]);

  // Reset zoom and position
  const handleDoubleClick = useCallback(() => {
    setScale(1);
    setViewBox({ x: 0, y: 0, width: 1440, height: 1024 });
    console.log('Reset to default view');
  }, []);

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
      className="w-full h-screen bg-white overflow-hidden cursor-grab active:cursor-grabbing touch-none"
      onDoubleClick={handleDoubleClick}
    >
     <Floor1 zooomBuildingbyName={zooomBuildingbyName} ref={svgRef} viewBox={viewBox} />

          </div>
          );
          };

  export default DraggableZoomableSVG;
