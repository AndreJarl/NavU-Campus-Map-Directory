import React, { useEffect, useRef } from 'react';
import 'pannellum/build/pannellum.css';
import scenes from '../data/scene.json';
import '../index.css';

function Panorama({ scene, onChangeScene, clicked }) {
  const viewerRef = useRef(null);
  const viewerInstance = useRef(null);

  const customArrow = (hotSpotDiv, args = {}) => {
    let rotation = args.rotation || 0;
    if (args.arrowType) {
      if (args.arrowType === 'backward') rotation = 180;
      if (args.arrowType === 'left') rotation = -90;
      if (args.arrowType === 'right') rotation = 90;
      if (args.arrowType === 'forward') rotation = 0;
    }

    hotSpotDiv.style.cursor = 'pointer';
    hotSpotDiv.innerHTML = `
      <div style="
        transform: scale(3.7) translateX(-9px) rotateX(60deg) rotate(${rotation}deg);
        width: 70px; height: 70px;
        transform-origin: center center;
        perspective: 800px;
      ">
        <svg width="70" height="70" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="background: transparent">
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="200%" height="200%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="gray" flood-opacity="0.6"/>
            </filter>
          </defs>
          <polygon points="100,40 160,160 100,130 40,160" fill="white" filter="url(#shadow)" />
        </svg>
      </div>
      <div style="text-align: center; color: white; margin-top: 4px;">${args.label || ''}</div>
    `;

    hotSpotDiv.onclick = () => {
      if (args.sceneId && typeof onChangeScene === 'function') {
        onChangeScene(args.sceneId);
      }
    };
  };

const customInfo = (hotSpotDiv, args = {}) => {
  hotSpotDiv.style.cursor = 'default';
  hotSpotDiv.style.zIndex = 999;

  hotSpotDiv.innerHTML = `
    <div style="
      display: inline-block;
      padding: 6px 12px;
      border-radius: 10px;
      background: rgba(0,0,0,0.6); /* Label background */
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
      text-align: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      backdrop-filter: blur(5px); /* subtle glass effect */
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    ">
      📍${args.label || 'Info'}
    </div>
  `;

  // Hover effect
  hotSpotDiv.onmouseover = () => {
    hotSpotDiv.firstChild.style.transform = 'scale(1.1)';
    hotSpotDiv.firstChild.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
  };

  hotSpotDiv.onmouseout = () => {
    hotSpotDiv.firstChild.style.transform = 'scale(1)';
    hotSpotDiv.firstChild.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
  };
};



  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
    script.async = true;

    script.onload = () => {
      if (viewerRef.current && !viewerInstance.current) {
        const scenesConfig = {};
        Object.entries(scenes).forEach(([key, val]) => {
          scenesConfig[key] = {
            type: 'equirectangular',
            panorama: val.image.startsWith('/') ? val.image : '/' + val.image.replace(/^public\//, ''),
            hfov: 120,
            hotSpots: val.hotspots.map(h => {
              if (h.type === 'arrow') {
                return {
                  pitch: h.pitch,
                  yaw: h.yaw,
                  type: 'custom',
                  createTooltipFunc: customArrow,
                              createTooltipArgs: {
                  sceneId: h.target,  // arrows only
                  rotation: h.rotation || 0,
                  arrowType: h.arrowType,
                  label: h.label
                }
                };
              } else if (h.type === 'info') {
                return {
                  pitch: h.pitch,
                  yaw: h.yaw,
                  type: 'custom',
                  createTooltipFunc: customInfo,
                  createTooltipArgs: {
                    label: h.label
                  }
                };
              }
              return null;
            }).filter(Boolean)
          };
        });

        viewerInstance.current = window.pannellum.viewer(viewerRef.current, {
          default: {
            firstScene: scene,
            sceneFadeDuration: 1000,
            autoLoad: true,
            mouseZoom: true,
            keyboardZoom: true,
            showControls: false,
          },
          scenes: scenesConfig
        });
      }
    };

    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, [scene, onChangeScene]);

  useEffect(() => {
    if (viewerInstance.current && viewerInstance.current.getScene() !== scene) {
      viewerInstance.current.loadScene(scene);
    }
  }, [scene]);

  if (!clicked) {
    return null;
  }

  return (
    <div className="relative w-full h-full">
      <div 
        ref={viewerRef} 
        className="w-full h-full"
      />
    </div>
  );
}

export default Panorama;
