import React, { forwardRef, useMemo, memo, useCallback  } from 'react';
import { usePath } from '../context/PathContext';
import { useCategory } from '../context/CategoryContext';
import { useScene } from '../context/SceneContext';
import { useFloorQuery } from '../context/FloorContext';
import { useFloorTransition } from '../context/TransitionContext';


const Floor4 = memo(forwardRef(({ viewBox, zooomBuildingbyName, OpenCard }, ref) => {
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


          const getColor = (allFalse, category, key, active, inactive) => allFalse || category[key] ? active : inactive;
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

<path d="M503 0H0V815H503V0Z" />
<path d="M96.8718 349V379.659M96.8718 379.659V634.951M96.8718 379.659H283.567M96.8718 802V634.951M96.8718 634.951L54.4644 618.59C45.4059 615.096 37.8265 608.589 33 600.164M283.567 379.659H418M283.567 379.659V513.465" stroke="#818181" stroke-width="10" stroke-linecap="round"/>
<path d="M102 517H363" stroke="#818181" stroke-width="6" stroke-linecap="round"/>
<path d="M250 528H242V649H250V528Z" fill="#D9D9D9"/>
<path d="M143 528H135V649H143V528Z" fill="#D9D9D9"/>
<path d="M146.57 636.562H143.062V645.687H146.57V636.562Z" fill="#D9D9D9"/>
<path d="M242.062 636.568H237.697V646.025H242.062V636.568Z" fill="#D9D9D9"/>
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

{/*PHYSICS LAB PATH  */}
<path opacity={path === "Physics Laboratory" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5"  d="M247.5 638H247.243C246.691 638 246.243 637.552 246.243 637V538.394C246.243 537.842 246.691 537.394 247.243 537.394H256.757"/>

{/* PHYSICS LEC PATH */}
<path opacity={path === "Physics Lecture" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5"  d="M247.5 617H247.243C246.691 617 246.243 616.552 246.243 616V538.394C246.243 537.842 246.691 537.394 247.243 537.394H256.757" />

{/* CHEMISTRY LAB PATH */}
<path opacity={path === "Chemistry Laboratory" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5" d="M247.5 596H247.243C246.691 596 246.243 595.552 246.243 595V538.394C246.243 537.842 246.691 537.394 247.243 537.394H256.757" />

{/* CHEMISTRY  LEC PATH */}
<path opacity={path === "Chemistry Lecture" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5"   d="M247.5 575.5H247.243C246.691 575.5 246.243 575.052 246.243 574.5V538.394C246.243 537.842 246.691 537.394 247.243 537.394H256.757"/>

{/* EN-CME-401 PATH */}
<path opacity={path === "EN-CME-401" ? "1" : 0} stroke="red" id="grow-path2" stroke-linecap="round" stroke-opacity=".5"  d="M247.5 554H247.243C246.691 554 246.243 553.552 246.243 553V538.394C246.243 537.842 246.691 537.394 247.243 537.394H256.757"/>

<path d="M234.5 565.334C236.456 565.334 238.041 566.92 238.041 568.876C238.041 570.061 237.477 571.036 236.776 571.792C236.074 572.548 235.25 573.067 234.776 573.329C234.602 573.425 234.398 573.425 234.224 573.329C233.75 573.067 232.927 572.548 232.225 571.792C231.523 571.036 230.958 570.061 230.958 568.876C230.958 566.92 232.544 565.334 234.5 565.334Z" fill="#11FF00" stroke="#087C00" stroke-width="0.5"/>
<path d="M234.5 570.25C235.259 570.25 235.875 569.634 235.875 568.875C235.875 568.116 235.259 567.5 234.5 567.5C233.741 567.5 233.125 568.116 233.125 568.875C233.125 569.634 233.741 570.25 234.5 570.25Z" fill="white" stroke="#087C00" stroke-width="0.5"/>
<path d="M238.722 573.479C239.15 573.726 239.375 574.006 239.375 574.291C239.375 574.577 239.15 574.857 238.722 575.104C238.294 575.351 237.679 575.556 236.938 575.699C236.196 575.841 235.356 575.916 234.5 575.916C233.644 575.916 232.804 575.841 232.063 575.699C231.321 575.556 230.706 575.351 230.278 575.104C229.85 574.857 229.625 574.577 229.625 574.291C229.625 574.006 229.85 573.726 230.278 573.479" stroke="#087C00" stroke-width="0.5" stroke-linecap="round"/>
<path d="M232.994 562.609H232.462C232.455 562.554 232.44 562.505 232.418 562.461C232.396 562.417 232.367 562.379 232.331 562.348C232.295 562.317 232.252 562.293 232.202 562.277C232.153 562.26 232.098 562.251 232.039 562.251C231.933 562.251 231.842 562.277 231.765 562.329C231.689 562.381 231.63 562.456 231.589 562.554C231.549 562.652 231.529 562.77 231.529 562.909C231.529 563.054 231.549 563.176 231.59 563.274C231.632 563.371 231.691 563.445 231.766 563.494C231.842 563.543 231.932 563.568 232.036 563.568C232.094 563.568 232.147 563.56 232.194 563.545C232.243 563.531 232.285 563.509 232.321 563.48C232.358 563.451 232.388 563.416 232.412 563.375C232.436 563.333 232.453 563.286 232.462 563.233L232.994 563.237C232.985 563.333 232.957 563.428 232.91 563.522C232.864 563.616 232.801 563.701 232.72 563.779C232.639 563.855 232.54 563.917 232.423 563.962C232.308 564.007 232.175 564.03 232.025 564.03C231.828 564.03 231.651 563.987 231.494 563.9C231.339 563.813 231.216 563.686 231.126 563.519C231.036 563.352 230.991 563.149 230.991 562.909C230.991 562.669 231.036 562.466 231.128 562.299C231.22 562.132 231.344 562.005 231.5 561.919C231.656 561.832 231.831 561.789 232.025 561.789C232.157 561.789 232.279 561.807 232.391 561.844C232.504 561.88 232.602 561.934 232.688 562.004C232.773 562.074 232.842 562.159 232.895 562.261C232.949 562.362 232.982 562.478 232.994 562.609ZM233.296 561.819H233.949L234.503 563.169H234.529L235.083 561.819H235.736V564H235.222V562.66H235.204L234.68 563.987H234.352L233.828 562.653H233.81V564H233.296V561.819ZM236.065 564V561.819H237.586V562.247H236.592V562.694H237.508V563.124H236.592V563.572H237.586V564H236.065Z" fill="#087C00"/>
<path d="M143 648.997V645.227" stroke="#535353"/>
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
<path d="M242 649V645.251" stroke="#535353"/>
<path d="M250.005 648.494H241.505" stroke="#535353"/>
<path d="M143.471 648.499H134.971" stroke="#535353"/>
<path d="M241.877 636.843V528.043" stroke="#535353" stroke-width="0.8"/>
<path d="M143.104 636.82L143.105 528" stroke="#535353" stroke-width="0.8"/>

<g opacity={0.5}>
<rect x="136" y="628" width="21" height="21" transform="rotate(90 136 628)" fill="#00C3FF"/>
<rect x="136" y="607" width="20" height="21" transform="rotate(90 136 607)" fill="#00C3FF"/>
<rect x="136" y="586" width="20" height="21" transform="rotate(90 136 586)" fill="#00C3FF"/>
<rect x="136" y="565" width="20" height="21" transform="rotate(90 136 565)" fill="#00C3FF"/>
<rect x="136" y="544" width="20" height="21" transform="rotate(90 136 544)" fill="#00C3FF"/>
<rect width="15" height="9" transform="matrix(0 1 1 0 113 528)" fill="#73DAFF"/>
</g>

<g onClick={() => bldClicked("TEXT-ID")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="272" 
    y="528" 
    width="15" 
    height="9" 
    transform="rotate(90 272 528)" 
    fill={getColor(allFalse, category, "", "#73DAFF", "#B0B0B0")}
  />
  <text
    x="267.5"
    y="535.5"
    fill="black"
    fontSize="2"
    fontWeight={600}
    fontFamily="Arial, sans-serif"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    MALE CR
  </text>
</g>


{/* ENCME401 */}
<g onClick={() => bldClicked("EN-CME-401")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="270" 
    y="544" 
    width="20" 
    height="21" 
    transform="rotate(90 270 544)" 
    fill={getColor(allFalse, category, "", "#AAFF00", "#B0B0B0")}
  />
  <text
    x="259.5"
    y="554"
    fill="black"
    fontSize="2"
    fontWeight="600"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    EN-CME-401
  </text>
</g>
{/* CHEM LEC */}
<g onClick={() => bldClicked("Chemistry Lecture")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="270" 
    y="565" 
    width="20" 
    height="21" 
    transform="rotate(90 270 565)" 
    fill={getColor(allFalse, category, "", "#AAFF00", "#B0B0B0")}
  />
  <text
    x="259.5"
    y="575"
    fill="black"
    fontSize="2"
    fontWeight="600"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    CHEMISTRY LEC
  </text>
</g>
{/* CHEM LAB */}
<g onClick={() => bldClicked("Chemistry Laboratory")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="270" 
    y="586" 
    width="20" 
    height="21" 
    transform="rotate(90 270 586)" 
    fill={getColor(allFalse, category, "", "#AAFF00", "#B0B0B0")}
  />
  <text
    x="259.5"
    y="596"
    fill="black"
    fontSize="2"
    fontWeight="600"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    CHEMISTRY LAB
  </text>
</g>
{/* PHYSICS LEC */}
<g onClick={() => bldClicked("Physics Lecture")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="270" 
    y="607" 
    width="20" 
    height="21" 
    transform="rotate(90 270 607)" 
    fill={getColor(allFalse, category, "", "#AAFF00", "#B0B0B0")}
  />
  <text
    x="259.5"
    y="617"
    fill="black"
    fontSize="2"
    fontWeight="600"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    PHYSICS LEC
  </text>
</g>
{/* Physics Lab */}
<g onClick={() => bldClicked("Physics Laboratory")} filter="url(#filter1_d_2041_14)">
  <rect 
    x="270" 
    y="628" 
    width="21" 
    height="21" 
    transform="rotate(90 270 628)" 
    fill={getColor(allFalse, category, "", "#AAFF00", "#B0B0B0")}
  />
  <text
    x="259.5"
    y="638.5"
    fill="black"
    fontSize="2"
    fontWeight="600"
    textAnchor="middle"
    dominantBaseline="central"
    style={{ pointerEvents: 'none' }}
  >
    PHYSICS LAB
  </text>
</g>


{/* <path d="M138.243 637.947H138.5C139.052 637.947 139.5 637.5 139.5 636.947V538.342C139.5 537.789 139.052 537.342 138.5 537.342H128.986" stroke="#FF0000" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"/>
<path d="M138.243 616.947H138.5C139.052 616.947 139.5 616.5 139.5 615.947V538.342C139.5 537.789 139.052 537.342 138.5 537.342H128.986" stroke="#FF0000" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"/>
<path d="M138.243 595.947H138.5C139.053 595.947 139.5 595.5 139.5 594.947V538.342C139.5 537.789 139.053 537.342 138.5 537.342H128.986" stroke="#FF0000" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"/>
<path d="M138.243 575.447H138.5C139.053 575.447 139.5 575 139.5 574.447V538.342C139.5 537.789 139.053 537.342 138.5 537.342H128.986" stroke="#FF0000" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"/>
<path d="M138.243 553.947H138.5C139.053 553.947 139.5 553.5 139.5 552.947V538.342C139.5 537.789 139.053 537.342 138.5 537.342H128.986" stroke="#FF0000" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"/> */}

<defs>
<clipPath id="clip0_2144_2">
<rect width="503" height="815" fill="white"/>
</clipPath>
</defs>
</svg>





    </>
  );
}));

export default Floor4

