import React, { forwardRef, useMemo, memo, useCallback  } from 'react';
import { usePath } from '../context/PathContext';
import { useCategory } from '../context/CategoryContext';
import { useScene } from '../context/SceneContext';
import { useFloorQuery } from '../context/FloorContext';
import { useFloorTransition } from '../context/TransitionContext';


const Floor3 = memo(forwardRef(({ viewBox, zooomBuildingbyName, OpenCard }, ref) => {
  const { setPath, path } = usePath();
  const { category } = useCategory();
  const { setCurrentScene } = useScene();
 const {currentFloor, setCurrentFloor} = useFloorQuery();
  const {trigger} = useFloorTransition();

  const allFalse = useMemo(
    () => Object.values(category).every(val => !val),
    [category]
  );

  const svgViewBox = useMemo(
    () => `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`,
    [viewBox]
  );

  const bldClicked = useCallback((buildingName) => {
    OpenCard(buildingName);
    setPath("");
    setCurrentScene(buildingName);
    zooomBuildingbyName(buildingName);
  }, [OpenCard, setPath, setCurrentScene, zooomBuildingbyName]);

      const handleFloor = useCallback((num) => {
             setCurrentFloor(num);
             trigger();
      },[trigger]);
  return (
    <>
  <svg
      ref={ref}
      width="100%"
      height="100%"
      fill='none'
      viewBox={svgViewBox}
      preserveAspectRatio="xMidYM
      id meet"
    >

<g className="floating-element" onClick={() => handleFloor(currentFloor + 1)} cursor={"pointer"} xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="281,712 284,717 278,717"
    fill="#FF3030"
    strokeLinejoin="round"
  />
  <text x="281" y="719.5" fill="#FF3030" fontSize="2" fontFamily="Arial, sans-serif" textAnchor="middle" dominantBaseline="central" fontWeight="bold">{`Floor ${currentFloor + 1}`}</text>
</g>


<g className="floating-element" onClick={() => handleFloor(currentFloor - 1)} cursor={"pointer"}>
  <polygon
    points="270,733 273,728 267,728"
    fill="#FF3030"
    strokeLinejoin="round"
  />
  <text x="270" y="725.5" fill="#FF3030" fontSize="2" fontFamily="Arial, sans-serif" textAnchor="middle" dominantBaseline="central" fontWeight="bold">{`Floor ${currentFloor - 1}`}</text>
</g>

<g onClick={() => handleFloor(currentFloor - 1)} cursor={"pointer"} className="floating-element" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="116,735 119,730 113,730"
    fill="#FF3030"
    strokeLinejoin="round"
  />
  <text x="116" y="727.5" fill="#FF3030" fontSize="2" fontFamily="Arial, sans-serif" textAnchor="middle" dominantBaseline="central" fontWeight="bold">{`Floor ${currentFloor - 1}`}</text>
</g>

<g onClick={() => handleFloor(currentFloor + 1)} cursor={"pointer"} className="floating-element">
  <polygon
    points="106,712 109,717 103,717"
    fill="#FF3030"
    strokeLinejoin="round"
  />
  <text x="106" y="719.5" fill="#FF3030" fontSize="2" fontFamily="Arial, sans-serif" textAnchor="middle" dominantBaseline="central" fontWeight="bold">{`Floor ${currentFloor + 1}`}</text>
</g>


<path d="M503 0H0V815H503V0Z"/>
<path d="M96.8718 349V379.659M96.8718 379.659V634.951M96.8718 379.659H283.567M96.8718 802V634.951M96.8718 634.951L54.4644 618.59C45.4059 615.096 37.8265 608.589 33 600.164M283.567 379.659H418M283.567 379.659V513.465" stroke="#818181" stroke-width="10" stroke-linecap="round"/>
<path d="M102 517H363" stroke="#818181" stroke-width="6" stroke-linecap="round"/>
<path d="M260 720.043H126V751.043H260V720.043Z" fill="#D9D9D9"/>
<path d="M250.125 528.109H241.892V721.045H250.125V528.109Z" fill="#D9D9D9"/>
<path d="M143.063 528.258H135.051V721.303H143.063V528.258Z" fill="#D9D9D9"/>
<path d="M203 715.235H180.974V720.524H203V715.235Z" fill="#D9D9D9"/>
<path d="M220.789 712.483H214.908V720.044H220.789V712.483Z" fill="#D9D9D9"/>
<path d="M169.943 712.262H164.062V719.824H169.943V712.262Z" fill="#D9D9D9"/>
<path d="M136.062 710.043H114.062V722.043H136.062V710.043Z" fill="#D9D9D9"/>
<path d="M271.062 710.043H249.062V722.043H271.062V710.043Z" fill="#D9D9D9"/>
<path d="M146.57 636.562H143.062V645.687H146.57V636.562Z" fill="#D9D9D9"/>
<path d="M242.062 636.568H237.697V646.025H242.062V636.568Z" fill="#D9D9D9"/>
<path d="M221.062 712.043H164.062V715.743H221.062V712.043Z" fill="#D9D9D9"/>
<path d="M221.062 715.235H202V720.043H221.062V715.235Z" fill="#D9D9D9"/>
<path d="M182.011 715.235H164.062V719.743H182.011V715.235Z" fill="#D9D9D9"/>
<path d="M136.996 528.005H122.062V544.043H136.996V528.005Z" fill="#D9D9D9"/>
<path d="M263.063 528.043H248.102V544.043H263.063V528.043Z" fill="#D9D9D9"/>
<path d="M252.996 540.895H252.006V534.905H252.996V540.895Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M253.996 540.895H253.006V534.905H253.996V540.895Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M254.996 540.895H254.006V534.905H254.996V540.895Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M255.996 540.895H255.006V534.905H255.996V540.895Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M256.996 540.895H256.006V534.905H256.996V540.895Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M257.996 540.895H257.006V534.905H257.996V540.895Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M261.996 540.995H258.006V528.005H261.996V540.995Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M257.996 534.247H257.006V528.257H257.996V534.247Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M256.996 534.247H256.006V528.257H256.996V534.247Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M255.996 534.247H255.006V528.257H255.996V534.247Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M254.997 534.247L256.994 528.257H252.006V534.247H254.997Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M258.001 534.1H252.001V534.9H258.001V534.1Z" fill="#535353"/>
<path d="M262 540.2H252V541H262V540.2Z" fill="#535353"/>
<path d="M262.001 528H241.877V528.8H262.001V528Z" fill="#535353"/>
<path d="M261.2 528.8V540.2H262V528.8H261.2Z" fill="#535353"/>
<path d="M261.996 710.35H261.006V715.89H261.996V710.35Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M262.996 710.35H262.006V715.89H262.996V710.35Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M263.996 710.35H263.006V715.89H263.996V710.35Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M264.996 710.35H264.006V715.89H264.996V710.35Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M265.996 710.35H265.006V715.89H265.996V710.35Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M266.996 710.35H266.006V715.89H266.996V710.35Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M270.996 710.349H267.006V722.037H270.996V710.349Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M266.996 716.498H266.006V722.038H266.996V716.498Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M265.996 716.498H265.006V722.038H265.996V716.498Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M264.996 716.498H264.006V722.038H264.996V716.498Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M263.996 716.498H263.006V722.038H263.996V716.498Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M262.996 716.498H262.006V722.038H262.996V716.498Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M261.996 716.498H261.006V722.038H261.996V716.498Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M260.996 710.349H260.006V716.512H260.996V710.349Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M259.996 710.349H259.006V716.512H259.996V710.349Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M258.996 710.349H258.006V716.512H258.996V710.349Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M260.997 716.498L262.993 722.038H258.006V716.498H260.997Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M267.001 716.634H258.001V715.894H267.001V716.634Z" fill="#535353"/>
<path d="M271 722.043H258V721.303H271V722.043Z" fill="#535353"/>
<path d="M270.2 721.302V710.344H271V721.302H270.2Z" fill="#535353"/>
<path d="M123.004 710.35H123.994V715.89H123.004V710.35Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M122.004 710.35H122.994V715.89H122.004V710.35Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M121.004 710.35H121.994V715.89H121.004V710.35Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M120.004 710.35H120.994V715.89H120.004V710.35Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M119.004 710.35H119.994V715.89H119.004V710.35Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M118.004 710.35H118.994V715.89H118.004V710.35Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M114.004 710.349H117.994V722.037H114.004V710.349Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M118.004 716.498H118.994V722.038H118.004V716.498Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M119.004 716.498H119.994V722.038H119.004V716.498Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M120.004 716.498H120.994V722.038H120.004V716.498Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M121.004 716.498H121.994V722.038H121.004V716.498Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M122.004 716.498H122.994V722.038H122.004V716.498Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M123.004 716.498H123.994V722.038H123.004V716.498Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M124.004 710.349H124.994V716.512H124.004V710.349Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M125.004 710.349H125.994V716.512H125.004V710.349Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M126.004 710.349H126.994V716.512H126.004V710.349Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M124.003 716.498L122.007 722.038H126.994V716.498H124.003Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M117.999 716.634H126.999V715.894H117.999V716.634Z" fill="#535353"/>
<path d="M114 722.043H127V721.303H114V722.043Z" fill="#535353"/>
<path d="M114.8 721.302V710.344H114V721.302H114.8Z" fill="#535353"/>
<path d="M131.996 540.895H132.986V534.905H131.996V540.895Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M130.996 540.895H131.986V534.905H130.996V540.895Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M129.996 540.895H130.986V534.905H129.996V540.895Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M128.996 540.895H129.986V534.905H128.996V540.895Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M127.996 540.895H128.986V534.905H127.996V540.895Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M126.996 540.895H127.986V534.905H126.996V540.895Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M122.996 540.995H126.986V528.005H122.996V540.995Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M126.996 534.248H127.986V528.258H126.996V534.248Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M127.996 534.248H128.986V528.258H127.996V534.248Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M128.996 534.248H129.986V528.258H128.996V534.248Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M129.995 534.248L127.998 528.258H132.987V534.248H129.995Z" fill="#E6E6E6" stroke="black" stroke-width="0.01"/>
<path d="M126.991 534.1H132.991V534.9H126.991V534.1Z" fill="#535353"/>
<path d="M122.992 540.2H132.992V541H122.992V540.2Z" fill="#535353"/>
<path d="M122.991 528H143.503V528.8H122.991V528Z" fill="#535353"/>
<path d="M123.792 528.801V540.201H122.992V528.801H123.792Z" fill="#535353"/>

<g filter="url(#filter1_d_2041_14)">
  <path d="M112 699H136V707.938H112V699Z" fill="#FF69EB"/>
  <text
    x="124"
    y="703.47"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    FEMALE CR
  </text>
</g>

<path d="M112 707.938H136V710H112V707.938Z" fill="#CF56BF"/>

<path opacity={path === "Library" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5"  d="M204.04 726.814V725.885C204.04 725.333 204.488 724.885 205.04 724.885H245.247C245.799 724.885 246.247 724.438 246.247 723.885V719.92C246.247 719.368 246.695 718.92 247.247 718.92L256.757 718.92" />

{/* <path opacity={path === "" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M204.025 726.82V725.828C204.025 725.275 203.577 724.828 203.025 724.828H139.916C139.363 724.828 138.916 724.38 138.916 723.828V719.92C138.916 719.368 138.468 718.92 137.916 718.92L128.544 718.92"/> */}

<path opacity={path === "AVR Room" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M135 725.408H138.058C138.61 725.408 139.058 724.96 139.058 724.408V719.92C139.058 719.368 138.61 718.92 138.058 718.92H128.544"/>

<path opacity={path === "ED-303A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5"  d="M137.932 690.635L138.058 690.635C138.61 690.635 139.058 691.083 139.058 691.635V717.92C139.058 718.472 138.61 718.92 138.058 718.92H128.544" />

<path opacity={path === "ED-302A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5"   d="M137.984 673.318H138.058C138.61 673.318 139.058 673.766 139.058 674.318V717.92C139.058 718.472 138.61 718.92 138.058 718.92H128.544"/>

<path opacity={path === "EN-302A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M247.316 673.318H247.243C246.691 673.318 246.243 673.766 246.243 674.318V717.92C246.243 718.473 246.691 718.92 247.243 718.92H256.757"/>

<path opacity={path === "ED-302A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5"   d="M138.028 654.894H138.058C138.61 654.894 139.058 655.342 139.058 655.894L139.058 717.92C139.058 718.473 138.61 718.92 138.058 718.92H128.544"/>

<path  opacity={path === "Female Cr" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M133.67 711.512L133.67 717.92C133.67 718.473 133.222 718.92 132.67 718.92H128.544" />

<path opacity={path === "EN-301A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M247.272 654.894H247.243C246.691 654.894 246.243 655.342 246.243 655.894L246.243 717.92C246.243 718.473 246.691 718.92 247.243 718.92H256.757"/>

<path opacity={path === "EN-CME308A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M247.5 640H247.243C246.691 640 246.243 640.448 246.243 641V717.92C246.243 718.472 246.691 718.92 247.243 718.92H256.757"/>

<path opacity={path === "EN-CME307A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M247.5 626H247.243C246.691 626 246.243 626.448 246.243 627V717.92C246.243 718.472 246.691 718.92 247.243 718.92H256.757"/>

<path opacity={path === "EN-CME306A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M247.5 614H247.243C246.691 614 246.243 614.448 246.243 615V717.92C246.243 718.472 246.691 718.92 247.243 718.92H256.757"/>

<path opacity={path === "EN-CME305A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M247.5 601H247.243C246.691 601 246.243 601.448 246.243 602V717.92C246.243 718.472 246.691 718.92 247.243 718.92H256.757"/>

<path opacity={path === "EN-CME304A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M247.5 588H247.243C246.691 588 246.243 588.448 246.243 589V717.92C246.243 718.472 246.691 718.92 247.243 718.92H256.757" />

<path opacity={path === "EN-CME303A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M247.5 575.5H247.243C246.691 575.5 246.243 575.948 246.243 576.5V717.92C246.243 718.472 246.691 718.92 247.243 718.92H256.757"/>

<path opacity={path === "EN-CME302A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M247.5 564H247.243C246.691 564 246.243 564.448 246.243 565L246.243 717.92C246.243 718.472 246.691 718.92 247.243 718.92H256.757"/>

<path  opacity={path === "EN-CME301A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M247.411 550.977H247.243C246.691 550.977 246.243 551.424 246.243 551.977L246.243 717.92C246.243 718.472 246.691 718.92 247.243 718.92H256.757" />

<g className="floating-element" onClick={() => bldClicked("College of Engineering")}>
<path d="M229.5 674.25C231.475 674.25 233.041 675.724 233.041 677.5C233.041 678.59 232.475 679.49 231.765 680.19C231.056 680.889 230.227 681.365 229.76 681.602C229.595 681.685 229.406 681.685 229.241 681.602C228.774 681.365 227.944 680.889 227.235 680.19C226.525 679.49 225.958 678.59 225.958 677.5C225.958 675.724 227.525 674.25 229.5 674.25Z" fill="#FF0000" stroke="#560000" stroke-width="0.5"/>
<path d="M229.5 676.25C230.279 676.25 230.875 676.828 230.875 677.5C230.875 678.172 230.279 678.75 229.5 678.75C228.721 678.75 228.125 678.172 228.125 677.5C228.125 676.828 228.721 676.25 229.5 676.25Z" fill="white" stroke="#560000" stroke-width="0.5"/>
<path d="M233.722 681.75C234.15 681.978 234.375 682.237 234.375 682.5C234.375 682.764 234.15 683.022 233.722 683.25C233.294 683.478 232.679 683.668 231.938 683.799C231.196 683.931 230.356 684 229.5 684C228.644 684 227.804 683.931 227.063 683.799C226.321 683.668 225.706 683.478 225.278 683.25C224.85 683.022 224.625 682.764 224.625 682.5C224.625 682.237 224.85 681.978 225.278 681.75" stroke="#560000" stroke-width="0.5" stroke-linecap="round"/>
<path d="M228.195 671.763H227.662C227.655 671.708 227.641 671.659 227.619 671.615C227.597 671.571 227.568 671.533 227.531 671.502C227.495 671.471 227.452 671.447 227.402 671.43C227.353 671.413 227.299 671.405 227.239 671.405C227.134 671.405 227.042 671.431 226.966 671.483C226.89 671.534 226.831 671.609 226.79 671.707C226.749 671.805 226.729 671.924 226.729 672.063C226.729 672.208 226.75 672.33 226.791 672.428C226.833 672.525 226.891 672.598 226.967 672.648C227.043 672.697 227.133 672.722 227.236 672.722C227.295 672.722 227.347 672.714 227.395 672.699C227.443 672.684 227.486 672.663 227.522 672.634C227.559 672.605 227.589 672.57 227.612 672.529C227.637 672.487 227.653 672.44 227.662 672.387L228.195 672.39C228.186 672.487 228.158 672.582 228.111 672.676C228.065 672.77 228.001 672.855 227.92 672.933C227.839 673.009 227.741 673.07 227.624 673.116C227.508 673.161 227.375 673.184 227.226 673.184C227.028 673.184 226.851 673.141 226.695 673.054C226.54 672.967 226.417 672.839 226.326 672.673C226.236 672.506 226.191 672.303 226.191 672.063C226.191 671.823 226.237 671.62 226.329 671.453C226.42 671.286 226.544 671.159 226.7 671.072C226.857 670.986 227.032 670.942 227.226 670.942C227.358 670.942 227.48 670.961 227.592 670.998C227.704 671.034 227.803 671.087 227.888 671.158C227.974 671.227 228.043 671.313 228.096 671.414C228.149 671.516 228.182 671.632 228.195 671.763ZM230.556 672.063C230.556 672.303 230.51 672.507 230.418 672.674C230.325 672.841 230.2 672.967 230.043 673.054C229.886 673.141 229.71 673.184 229.514 673.184C229.318 673.184 229.142 673.14 228.985 673.053C228.828 672.966 228.703 672.839 228.611 672.673C228.519 672.506 228.473 672.303 228.473 672.063C228.473 671.823 228.519 671.62 228.611 671.453C228.703 671.286 228.828 671.159 228.985 671.072C229.142 670.986 229.318 670.942 229.514 670.942C229.71 670.942 229.886 670.986 230.043 671.072C230.2 671.159 230.325 671.286 230.418 671.453C230.51 671.62 230.556 671.823 230.556 672.063ZM230.017 672.063C230.017 671.921 229.997 671.801 229.956 671.703C229.917 671.605 229.859 671.531 229.784 671.48C229.709 671.43 229.619 671.405 229.514 671.405C229.41 671.405 229.32 671.43 229.245 671.48C229.169 671.531 229.112 671.605 229.071 671.703C229.031 671.801 229.011 671.921 229.011 672.063C229.011 672.205 229.031 672.325 229.071 672.423C229.112 672.521 229.169 672.596 229.245 672.646C229.32 672.696 229.41 672.722 229.514 672.722C229.619 672.722 229.709 672.696 229.784 672.646C229.859 672.596 229.917 672.521 229.956 672.423C229.997 672.325 230.017 672.205 230.017 672.063ZM230.864 673.154V670.972H232.385V671.401H231.391V671.848H232.308V672.277H231.391V672.726H232.385V673.154H230.864Z" fill="#560000"/>
</g>

<g className="floating-element" onClick={() => bldClicked("Education Building")}>
<path d="M155.5 674.334C157.456 674.334 159.041 675.92 159.041 677.876C159.041 679.061 158.477 680.036 157.776 680.792C157.074 681.548 156.25 682.066 155.776 682.329C155.602 682.425 155.398 682.425 155.224 682.329C154.75 682.066 153.927 681.548 153.225 680.792C152.523 680.036 151.958 679.061 151.958 677.876C151.958 675.92 153.544 674.334 155.5 674.334Z" fill="#005EFF" stroke="#003187" stroke-width="0.5"/>
<path d="M155.5 679C156.121 679 156.625 678.496 156.625 677.875C156.625 677.254 156.121 676.75 155.5 676.75C154.879 676.75 154.375 677.254 154.375 677.875C154.375 678.496 154.879 679 155.5 679Z" fill="white" stroke="#003187"/>
<path d="M159.722 682.479C160.15 682.726 160.375 683.007 160.375 683.292C160.375 683.577 160.15 683.857 159.722 684.104C159.294 684.351 158.679 684.557 157.938 684.699C157.196 684.842 156.356 684.917 155.5 684.917C154.644 684.917 153.804 684.842 153.063 684.699C152.321 684.557 151.706 684.351 151.278 684.104C150.85 683.857 150.625 683.577 150.625 683.292C150.625 683.007 150.85 682.726 151.278 682.479" stroke="#003187" stroke-width="0.5" stroke-linecap="round"/>
<path d="M153.465 671.609H152.932C152.925 671.554 152.911 671.505 152.889 671.461C152.867 671.417 152.837 671.379 152.801 671.348C152.765 671.317 152.722 671.293 152.672 671.277C152.623 671.259 152.569 671.251 152.509 671.251C152.404 671.251 152.312 671.277 152.236 671.329C152.16 671.381 152.101 671.455 152.06 671.554C152.019 671.652 151.999 671.77 151.999 671.909C151.999 672.054 152.02 672.176 152.061 672.274C152.103 672.371 152.161 672.444 152.237 672.494C152.313 672.543 152.402 672.568 152.506 672.568C152.564 672.568 152.617 672.56 152.665 672.545C152.713 672.53 152.755 672.509 152.792 672.48C152.829 672.451 152.859 672.416 152.882 672.375C152.906 672.333 152.923 672.286 152.932 672.233L153.465 672.236C153.456 672.333 153.428 672.428 153.381 672.522C153.335 672.616 153.271 672.701 153.19 672.779C153.109 672.855 153.01 672.916 152.894 672.962C152.778 673.007 152.645 673.03 152.495 673.03C152.298 673.03 152.121 672.987 151.965 672.9C151.809 672.813 151.687 672.686 151.596 672.519C151.506 672.352 151.461 672.149 151.461 671.909C151.461 671.669 151.507 671.466 151.598 671.299C151.69 671.132 151.814 671.005 151.97 670.919C152.127 670.832 152.302 670.789 152.495 670.789C152.628 670.789 152.75 670.807 152.862 670.844C152.974 670.88 153.073 670.933 153.158 671.004C153.243 671.073 153.313 671.159 153.366 671.261C153.419 671.362 153.452 671.478 153.465 671.609ZM153.767 673V670.818H155.288V671.247H154.294V671.694H155.21V672.123H154.294V672.572H155.288V673H153.767ZM156.09 673H155.523L156.26 670.818H156.962L157.698 673H157.131L156.619 671.368H156.602L156.09 673ZM156.015 672.142H157.199V672.542H156.015V672.142ZM159.045 671.473C159.038 671.394 159.006 671.334 158.95 671.29C158.894 671.246 158.815 671.224 158.712 671.224C158.644 671.224 158.587 671.233 158.542 671.251C158.496 671.269 158.462 671.293 158.44 671.324C158.417 671.355 158.405 671.39 158.404 671.43C158.403 671.463 158.409 671.491 158.424 671.516C158.438 671.541 158.46 671.563 158.487 671.582C158.516 671.601 158.55 671.617 158.59 671.631C158.63 671.645 158.674 671.658 158.724 671.669L158.911 671.711C159.019 671.735 159.115 671.766 159.197 671.805C159.28 671.844 159.35 671.891 159.406 671.944C159.463 671.998 159.506 672.061 159.535 672.131C159.564 672.201 159.579 672.28 159.579 672.367C159.579 672.505 159.544 672.623 159.475 672.722C159.406 672.821 159.307 672.897 159.178 672.949C159.049 673.002 158.894 673.028 158.712 673.028C158.53 673.028 158.371 673.001 158.235 672.946C158.099 672.891 157.994 672.808 157.919 672.697C157.843 672.585 157.805 672.444 157.802 672.274H158.307C158.312 672.344 158.331 672.403 158.364 672.449C158.397 672.496 158.443 672.532 158.501 672.556C158.56 672.58 158.628 672.592 158.706 672.592C158.777 672.592 158.837 672.583 158.887 672.563C158.937 672.544 158.976 672.518 159.003 672.484C159.03 672.449 159.044 672.41 159.045 672.366C159.044 672.325 159.031 672.29 159.006 672.261C158.981 672.231 158.943 672.205 158.891 672.184C158.84 672.162 158.775 672.142 158.695 672.123L158.467 672.07C158.278 672.027 158.13 671.957 158.021 671.86C157.912 671.763 157.858 671.632 157.859 671.466C157.858 671.331 157.894 671.213 157.968 671.111C158.041 671.01 158.142 670.931 158.271 670.874C158.4 670.817 158.548 670.789 158.713 670.789C158.882 670.789 159.029 670.817 159.153 670.875C159.278 670.932 159.375 671.012 159.444 671.115C159.513 671.218 159.548 671.337 159.55 671.473H159.045Z" fill="#003187"/>
</g>

<g className="floating-element" onClick={() => bldClicked("CME/COE Building")}>
<path d="M234.5 565.334C236.456 565.334 238.041 566.92 238.041 568.876C238.041 570.061 237.477 571.036 236.776 571.792C236.074 572.548 235.25 573.067 234.776 573.329C234.602 573.425 234.398 573.425 234.224 573.329C233.75 573.067 232.927 572.548 232.225 571.792C231.523 571.036 230.958 570.061 230.958 568.876C230.958 566.92 232.544 565.334 234.5 565.334Z" fill="#11FF00" stroke="#087C00" stroke-width="0.5"/>
<path d="M234.5 570.25C235.259 570.25 235.875 569.634 235.875 568.875C235.875 568.116 235.259 567.5 234.5 567.5C233.741 567.5 233.125 568.116 233.125 568.875C233.125 569.634 233.741 570.25 234.5 570.25Z" fill="white" stroke="#087C00" stroke-width="0.5"/>
<path d="M238.722 573.479C239.15 573.726 239.375 574.006 239.375 574.291C239.375 574.577 239.15 574.857 238.722 575.104C238.294 575.351 237.679 575.556 236.938 575.699C236.196 575.841 235.356 575.916 234.5 575.916C233.644 575.916 232.804 575.841 232.063 575.699C231.321 575.556 230.706 575.351 230.278 575.104C229.85 574.857 229.625 574.577 229.625 574.291C229.625 574.006 229.85 573.726 230.278 573.479" stroke="#087C00" stroke-width="0.5" stroke-linecap="round"/>
<path d="M232.994 562.609H232.462C232.455 562.554 232.44 562.505 232.418 562.461C232.396 562.417 232.367 562.379 232.331 562.348C232.295 562.317 232.252 562.293 232.202 562.277C232.153 562.26 232.098 562.251 232.039 562.251C231.933 562.251 231.842 562.277 231.765 562.329C231.689 562.381 231.63 562.456 231.589 562.554C231.549 562.652 231.529 562.77 231.529 562.909C231.529 563.054 231.549 563.176 231.59 563.274C231.632 563.371 231.691 563.445 231.766 563.494C231.842 563.543 231.932 563.568 232.036 563.568C232.094 563.568 232.147 563.56 232.194 563.545C232.243 563.531 232.285 563.509 232.321 563.48C232.358 563.451 232.388 563.416 232.412 563.375C232.436 563.333 232.453 563.286 232.462 563.233L232.994 563.237C232.985 563.333 232.957 563.428 232.91 563.522C232.864 563.616 232.801 563.701 232.72 563.779C232.639 563.855 232.54 563.917 232.423 563.962C232.308 564.007 232.175 564.03 232.025 564.03C231.828 564.03 231.651 563.987 231.494 563.9C231.339 563.813 231.216 563.686 231.126 563.519C231.036 563.352 230.991 563.149 230.991 562.909C230.991 562.669 231.036 562.466 231.128 562.299C231.22 562.132 231.344 562.005 231.5 561.919C231.656 561.832 231.831 561.789 232.025 561.789C232.157 561.789 232.279 561.807 232.391 561.844C232.504 561.88 232.602 561.934 232.688 562.004C232.773 562.074 232.842 562.159 232.895 562.261C232.949 562.362 232.982 562.478 232.994 562.609ZM233.296 561.819H233.949L234.503 563.169H234.529L235.083 561.819H235.736V564H235.222V562.66H235.204L234.68 563.987H234.352L233.828 562.653H233.81V564H233.296V561.819ZM236.065 564V561.819H237.586V562.247H236.592V562.694H237.508V563.124H236.592V563.572H237.586V564H236.065Z" fill="#087C00"/>
</g>

<path d="M221.211 719.356V712.983C221.211 712.431 220.763 711.983 220.211 711.983H165.25C164.698 711.983 164.25 712.431 164.25 712.983V719.946" stroke="#777777" stroke-width="0.9" stroke-linecap="round"/>
<path d="M215.091 715.213H169.776C169.495 715.213 169.268 715.44 169.268 715.721C169.268 716.001 169.495 716.228 169.776 716.228H179.215" stroke="#777777" stroke-width="0.9" stroke-linecap="round"/>
<path d="M220.713 719.955L242.649 719.946" stroke="#535353"/>
<path d="M221.211 720.213V715.213" stroke="#535353"/>
<path d="M179.591 715.213L221.688 715.213" stroke="#535353"/>
<path d="M143.735 720.022L184.268 720.002" stroke="#535353"/>
<path d="M143.293 720.524L143.293 646.024" stroke="#535353"/>
<path d="M238.028 646.046L238.031 636.046" stroke="#535353" stroke-width="0.8"/>
<path d="M242.086 645.65L238.086 645.646" stroke="#535353" stroke-width="0.8"/>
<path d="M242.084 636.446L238.027 636.445" stroke="#535353" stroke-width="0.8"/>
<path d="M242.081 630.529H237.549" stroke="#535353" stroke-width="0.8"/>
<path d="M241.524 628.419L237.524 628.422" stroke="#535353" stroke-width="0.8"/>
<path d="M240.223 636.778L240.221 630.331" stroke="#535353" stroke-width="0.8"/>
<path d="M238.778 636.75L238.785 630.331" stroke="#535353" stroke-width="0.8"/>
<path d="M237.273 630.929L237.269 628.023" stroke="#535353" stroke-width="0.8"/>
<path d="M146.854 646.024L146.85 636.024" stroke="#535353" stroke-width="0.8"/>
<path d="M142.796 645.627L146.796 645.624" stroke="#535353" stroke-width="0.8"/>
<path d="M142.798 636.424L146.855 636.423" stroke="#535353" stroke-width="0.8"/>
<path d="M142.8 630.507H147.331" stroke="#535353" stroke-width="0.8"/>
<path d="M143.356 628.396L147.356 628.4" stroke="#535353" stroke-width="0.8"/>
<path d="M144.657 636.756L144.659 630.308" stroke="#535353" stroke-width="0.8"/>
<path d="M146.104 636.728L146.097 630.308" stroke="#535353" stroke-width="0.8"/>
<path d="M147.608 630.907L147.612 628.001" stroke="#535353" stroke-width="0.8"/>
<path d="M242.157 720.253L242.157 645.253" stroke="#535353"/>
<path d="M241.877 636.843V528.043" stroke="#535353" stroke-width="0.8"/>
<path d="M143.104 636.82L143.105 528" stroke="#535353" stroke-width="0.8"/>

<g onClick={()=>bldClicked("ED-302A-B")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="136" 
    y="664" 
    width="17" 
    height="21" 
    transform="rotate(90 136 664)" 
    fill="#00C3FF"
  />
  <text
    x="125.5"
    y="672.5"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    ED-302A-B
  </text>
</g>

<g onClick={()=>bldClicked("ED-301A-B")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="136" 
    y="646" 
    width="17" 
    height="21" 
    transform="rotate(90 136 646)" 
    fill="#00C3FF"
  />
  <text
    x="125.5"
    y="654.5"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
   ED-301A-B
  </text>
</g>

<g onClick={()=>bldClicked("ED-201")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="136" 
    y="634" 
    width="11" 
    height="21" 
    transform="rotate(90 136 634)" 
    fill="#00C3FF"
  />
  {/* <text
    x="125.5"
    y="639.5"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    ED-201
     </text> */}
</g>

<rect x="136" y="614" width="19" height="21" transform="rotate(90 136 614)" fill="#00C3FF"/>
<rect x="136" y="597" width="16" height="21" transform="rotate(90 136 597)" fill="#00C3FF"/>
<rect x="136" y="579" width="17" height="21" transform="rotate(90 136 579)" fill="#00C3FF"/>
<rect x="136" y="562" width="16" height="21" transform="rotate(90 136 562)" fill="#00C3FF"/>
<rect x="136" y="544" width="17" height="21" transform="rotate(90 136 544)" fill="#00C3FF"/>

<g onClick={()=>bldClicked("ED-303A-B")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="136" 
    y="682" 
    width="16" 
    height="21" 
    transform="rotate(90 136 682)" 
    fill="#00C3FF"
  />
  <text
    x="125.5"
    y="690"
    fill="black"
    fontWeight={600}
    fontSize="2"
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
   ED-303A-B
  </text>
</g>

<rect width="15" height="9" transform="matrix(0 1 1 0 113 528)" fill="#FF69EB"/>

<g filter="url(#filter1_d_2041_14)">
  {/* Main Building Body */}
  <path d="M249 699H273V707.938H249V699Z" fill="#FF69EB" />
  {/* Building Detail */}
  <path d="M249 707.938H273V710H249V707.938Z" fill="#CF56BF" />

  {/* Centered Text */}
  <text
    x="261"
    y="704"
    fill="black"
    fontWeight={600}
    fontSize="2"
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    FEMALE CR
  </text>
</g>

<g filter="url(#filter1_d_2041_14)">
  <path 
    onClick={() => bldClicked("Library")} 
    d="M143 728H252V723H260V749.066H143V728Z" 
    fill="#FF6453" 
    style={{ cursor: 'pointer' }}
  />
  <text
    x="197"
    y="739"
    fill="black"
    fontSize="2"
     fontWeight="600"
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
   LIBRARY
  </text>
</g>


<path d="M143 749.066H260V751H143V749.066Z" fill="#CE4B46"/>

<g filter="url(#filter1_d_2041_14)">
  {/* Main Building Body */}
  <path 
    d="M126 723H134V728H142V749.085H126V723Z" 
    fill="#FF6453" 
    onClick={() => bldClicked("AVR Room")} 
    style={{ cursor: 'pointer' }} 
  />
  {/* Building Bottom Detail */}
  <path d="M126 749.085H142V751H126V749.085Z" fill="#CE4B46" />

  {/* Centered Text */}
  <text
    x="134"
    y="736"
    fill="black"
    fontSize="2"
     fontWeight="600"
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
   AVR
  </text>
    <text
    x="134"
    y="739"
    fill="black"
    fontSize="2"
     fontWeight="600"
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
   ROOM
  </text>
</g>


<rect x="272" y="528" width="15" height="9" transform="rotate(90 272 528)" fill="#FF69EB"/>

<path opacity={path === "EN-303A-B" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M247.369 690.635L247.243 690.635C246.691 690.635 246.243 691.083 246.243 691.635V717.92C246.243 718.473 246.691 718.92 247.243 718.92H256.757"/>



<g onClick={()=>bldClicked("EN-301A-B")} cursor={"pointer"} filter="url(#filter1_d_2041_14)">
  {/* The rotated rectangle */}
  <rect 
    x="270" 
    y="646" 
    width="17" 
    height="21" 
    transform="rotate(90 270 646)" 
    fill="#FF3030"
  />

  {/* Centered Text */}
  <text
    x="259.5"
    y="654.5"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
   EN-301A-B
  </text>
</g>

<g onClick={()=>bldClicked("EN-302A-B")} cursor={"pointer"} filter="url(#filter1_d_2041_14)">
  {/* The rotated rectangle */}
  <rect 
    x="270" 
    y="664" 
    width="17" 
    height="21" 
    transform="rotate(90 270 664)" 
    fill="#FF3030"
  />

  {/* Centered Text */}
  <text
    x="259.5"
    y="672.5"
    fill="black"
    fontWeight={600}
    fontSize="2"
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    EN-302A-B
  </text>
</g>

<g onClick={()=>bldClicked("EN-303A-B")} cursor={"pointer"} filter="url(#filter1_d_2041_14)">
  {/* The rotated rectangle */}
  <rect 
    x="270" 
    y="682" 
    width="16" 
    height="21" 
    transform="rotate(90 270 682)" 
    fill="#FF3030"
  />

  {/* Centered Text */}
  <text
    x="259.5"
    y="690"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    EN-303A-B
  </text>
</g>

<g onClick={()=>bldClicked("EN-CME301A-B")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="249" 
    y="544" 
    width="21" 
    height="12" 
    fill="#AAFF00" 
  />
  <text
    x="259.5"
    y="550"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    EN-CME301A-B
  </text>
</g>
<g  onClick={()=>bldClicked("EN-CME302A-B")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="270" 
    y="557" 
    width="12" 
    height="21" 
    transform="rotate(90 270 557)" 
    fill="#AAFF00"
  />
  <text
    x="259.5"
    y="563"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    EN-CME302A-B
  </text>
</g>

<g onClick={() => bldClicked("EN-CME303A-B")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="270" 
    y="570" 
    width="11" 
    height="21" 
    transform="rotate(90 270 570)" 
    fill="#AAFF00"
  />
  <text
    x="259.5"
    y="575.5"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
   EN-CME303A-B
  </text>
</g>
<g onClick={() => bldClicked("EN-CME304A-B")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="270" 
    y="582" 
    width="12" 
    height="21" 
    transform="rotate(90 270 582)" 
    fill="#AAFF00"
  />
  <text
    x="259.5"
    y="588"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    EN-CME304A-B
  </text>
</g>

<g onClick={() => bldClicked("EN-CME305A-B")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="270" 
    y="595" 
    width="12" 
    height="21" 
    transform="rotate(90 270 595)" 
    fill="#AAFF00"
  />
  <text
    x="259.5"
    y="601"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    EN-CME305A-B
  </text>
</g>

<g onClick={() => bldClicked("EN-CME306A-B")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="270" 
    y="608" 
    width="11" 
    height="21" 
    transform="rotate(90 270 608)" 
    fill="#AAFF00"
  />
  <text
    x="259.5"
    y="613.5"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    EN-CME306A-B
  </text>
</g>

<g onClick={() => bldClicked("EN-CME307A-B")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="270" 
    y="620" 
    width="12" 
    height="21" 
    transform="rotate(90 270 620)" 
    fill="#AAFF00"
  />
  <text
    x="259.5"
    y="626"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    EN-CME307A-B
  </text>
</g>
<g onClick={() => bldClicked("EN-CME308A-B")}  filter="url(#filter1_d_2041_14)">
  <rect 
    
    x="270" 
    y="633" 
    width="12" 
    height="21" 
    transform="rotate(90 270 633)" 
    fill="#AAFF00"
    style={{ cursor: 'pointer' }}
  />
  <text
    x="259.5"
    y="639"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
   EN-CME308A-B
  </text>
</g>



</svg>




    </>
  );
}));

export default Floor3

