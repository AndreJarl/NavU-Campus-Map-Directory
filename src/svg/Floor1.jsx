import React, { forwardRef, useMemo, memo, useCallback  } from 'react';
import { usePath } from '../context/PathContext';
import { useCategory } from '../context/CategoryContext';
import { useScene } from '../context/SceneContext';


const Floor1 = memo(forwardRef(({ viewBox, zooomBuildingbyName, OpenCard }, ref) => {
  const { setPath, path } = usePath();
  const { category } = useCategory();
  const { setCurrentScene } = useScene();

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

  return (
    <>
    <svg
      ref={ref}
      width="100%"
      height="100%"
      fill='none'
      viewBox={svgViewBox}
      preserveAspectRatio="xMidYMid meet"
    >
        <path fill="#fff" d="M0 0h503v815H0z" />
        <path stroke="#818181" stroke-linecap="round" stroke-width="10" d="M96.8718 349v30.659m0 422.341V634.951M33 600.164c4.8265 8.425 12.4059 14.932 21.4644 18.426l42.4074 16.361m0 0V379.659m0 0H283.567m134.433 0H283.567m0 133.806V379.659" />
        <path stroke="#818181" stroke-linecap="round" stroke-width="6" d="M102 517h261" />
        <path fill="#d9d9d9" d="M78 485.603h7v120.8h-7z" />
        <path fill="#d9d9d9" d="M62.9746 485.603H87v13.3965H62.9746z" />
        <path fill="#d9d9d9" d="M85 505.999h2v8h-2z" />
        <path fill="#d9d9d9" d="M85 521.6h2v7.8h-2z" />
        <path fill="#d9d9d9" d="M85 535h2v7h-2z" />
        <path fill="#d9d9d9" d="M60 556h27v12H60z" />
        <path fill="#d9d9d9" d="M85 580h2v11h-2z" />
        <path fill="#d9d9d9" d="M126 720.043h134v31H126z" />
        <path fill="#d9d9d9" d="M241.877 525.043h8.23328v195.893H241.877z" />
        <path fill="#d9d9d9" d="M135.051 525.043h8.01163v196.26H135.051z" />
        <path fill="#d9d9d9" d="M183.062 715.235h20v44.8081h-20z" />
        <path fill="#d9d9d9" d="M214.908 712.483h5.88086v7.56152H214.908z" />
        <path fill="#d9d9d9" d="M164.062 712.262h5.88086v7.56152H164.062z" />
        <path fill="#d9d9d9" d="M114.062 710.043h22v12h-22z" />
        <path fill="#d9d9d9" d="M249.062 710.043h22v12h-22z" />
        <path fill="#d9d9d9" d="M241.062 646.043h33v18h-33z" />
        <path fill="#d9d9d9" d="M111.062 646.043h33v18h-33z" />
        <path fill="#d9d9d9" d="M143.062 672.043h6v18h-6z" />

        <path onClick={() => bldClicked("College of Engineering Building")} style={{ cursor: "pointer" }} fill="#d9d9d9" d="M236.062 672.043h6v18h-6z" />

        <path fill="#d9d9d9" d="M240.062 614.043h2v14h-2z" />
        <path fill="#d9d9d9" d="M143.062 614.043h2v14h-2z" />
        <path fill="#d9d9d9" d="M143.062 636.562h3.50781v9.12451H143.062z" />
        <path fill="#d9d9d9" d="M237.697 636.568h4.36523v9.45654H237.697z" />
        <path fill="#d9d9d9" d="M240.062 562.043h2v16h-2z" />
        <path fill="#d9d9d9" d="M157.062 755.043c0-1.104.896-2 2.001-2h23.999v4h-24c-1.104 0-2-.895-2-2" />
        <path fill="#d9d9d9" d="M164.062 712.043h57v3.7h-57z" />
        <path fill="#d9d9d9" d="M202 716.043h19.0625v4H202z" />
        <path fill="#d9d9d9" d="M164.062 716.043h12.9258v3.7H164.062z" />
        <path fill="#d9d9d9" d="M170.828 716.036h8.66l-4.33 7.5z" />
        <path fill="#d9d9d9" d="M157.062 760.043c0-1.104.896-2 2.001-2h18.999v4h-19c-1.104 0-2-.895-2-2" />
        <path fill="#d9d9d9" d="M302.073 684.086l22.9781091-1.0032459.3053357 6.99333754-22.97810909 1.00324591z" />
        <path fill="#d9d9d9" d="M143.062 562.043h2v16h-2z" />
        <path fill="#d9d9d9" d="M240.062 535.043h2v9h-2z" />
        <path fill="#d9d9d9" d="M143.062 535.043h2v9h-2z" />
        <path fill="#d9d9d9" d="M113.766 525.043h23.2312v3H113.766z" />
        <path fill="#d9d9d9" d="M114.062 521.043h22.2207v3H114.062z" />
        <path fill="#d9d9d9" d="M122.062 527.162h14.9343v16.8807H122.062z" />
        <path fill="#d9d9d9" d="M248.102 528.043h14.9609v16H248.102z" />
        <path fill="#d9d9d9" d="M248.102 525.043h23.043v3.75635h-23.043z" />
        <path fill="#d9d9d9" d="M248.547 521.061h22.4824v3H248.547z" />
        <path fill="#d9d9d9" d="M108.062 504.043h118v6h-118z" />
        <path fill="#d9d9d9" d="M209.062 510.043h11v2h-11z" />
        <path fill="#d9d9d9" d="M155.062 510.043h11v2h-11z" />
        <path fill="#d9d9d9" d="M114.062 510.043h11v2h-11z" />
        <path fill="#d9d9d9" d="M392.507 666.554c-5.914 29.933-2.818 68.653-28.322 51.008-11.269-8.6-1.182-50.774.744-57.002 3.249-10.508 17.109-49.531 31.134-52.017 11.287-1.999-3.556 27.763-3.556 58.011" />
        <path fill="#d9d9d9" d="M337.251 662.287l12.23734167-.53429388.3053357 6.99333756-12.23734166.53429387z" />
        <path fill="#d9d9d9" d="M318.854 579.082l31.53634883 9.64162942-2.85269411 9.330742-31.53634883-9.64162941z" />
        <path fill="#d9d9d9" d="M368.035 599.383l30.14146608-.35866945.08329085 6.99950445-30.14146608.35866946z" />
        <path fill="#d9d9d9" d="m362.38 588.781 11.11596824 13.06542225-5.33148865 4.53599259-11.11596824-13.06542225z" />
        <path fill="#d9d9d9" d="M345.908 662.916l14.45673513-9.61412692 3.87628449 5.8287579-14.45673513 9.61412691z" />
        <path fill="#d9d9d9" d="m360.365 653.302 6.55371097 2.3269973-2.34219816 6.5965224-6.55371097-2.3269973z" />
        <path fill="#d9d9d9" d="M183.062 397.043h15v115h-15z" />
        <path fill="#d9d9d9" d="M177 397h5v108h-5z" />
        <path fill="#d9d9d9" d="M199 397h5v108h-5z" />
        <path fill="#d9d9d9" d="M146 421h10v66h-10z" />
        <path fill="#d9d9d9" d="M131 476h15v11h-15z" />
        <path fill="#d9d9d9" d="M287.062 315.043h16v36h-16z" />
        <rect width="5" height="9" x="157.062" y="753.043" fill="#d9d9d9" rx="2.5" />

        {/* New CEAS Room 4 bldg */}
        <rect onClick={() => bldClicked("CEAS Room 4")} cursor={"pointer"}  xmlns="http://www.w3.org/2000/svg" x="136" y="562" width="16" height="21" transform="rotate(90 136 562)" fill={allFalse ? '#00c3ff' : category[""] ? "#00c3ff" : "#B0B0B0"} stroke={allFalse ? '#4391A9' : category[""] ? "#4391A9" : "#B0B0B0"} stroke-width={0.4} />
        <text onClick={() => bldClicked("CEAS Room 4")} cursor={"pointer"} x="125.5" y="570.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.2" fill="black">ROOM 4</text>

        <path fill="#d9d9d9" d="M267.666 522.974h3.64453v3H267.666z" />
        <path fill="#d9d9d9" d="M114.062 522.543h3.64453v3H114.062z" />

        {/* Accounting Office bldg */}
        <path fill={allFalse ? '#ff6453' : category["Admin"] ? "#ff6453" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} onClick={() => bldClicked("Accounting Office")} cursor={"pointer"} stroke-width={0.4} d="M126 723h8v5h8v21.085h-16z" />
        <text onClick={() => bldClicked("Accounting Office")} cursor={"pointer"} x="134" y="738.61" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ACCOUNTING</text>
        <text onClick={() => bldClicked("Accounting Office")} cursor={"pointer"} x="134" y="741.41" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">OFFICE</text>
        <path fill={allFalse ? '#ce4b46' : category["Admin"] ? "#ce4b46" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} onClick={() => bldClicked("Accounting Office")} cursor={"pointer"} stroke-width={0.4} d="M126 749.085h16V751h-16z" />

        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M252.006 540.895h.99v-5.99h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M253.006 540.895h.99v-5.99h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M254.006 540.895h.99v-5.99h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M255.006 540.895h.99v-5.99h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M256.006 540.895h.99v-5.99h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M257.006 540.895h.99v-5.99h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M258.006 540.995h3.99v-12.99h-3.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M257.006 534.247h.99v-5.99h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M256.006 534.247h.99v-5.99h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M255.006 534.247h.99v-5.99h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="m254.997 534.247 1.997-5.99h-4.988v5.99z" />
        <path fill="#535353" d="M252.001 534.1h6v.8h-6z" />
        <path fill="#535353" d="M252 540.2h10v.8h-10z" />
        <path fill="#535353" d="M252.001 528h10v.8h-10z" />
        <path fill="#535353" d="M261.2 540.2v-11.4004h.8V540.2z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M196.895 503.995v-1.08999h-5.99v1.08999z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M196.895 502.895v-1.08999h-5.99v1.08999z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M196.895 501.795v-1.08999h-5.99v1.08999z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M196.895 500.695v-1.08999h-5.99v1.08999z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M196.895 499.595v-1.08999h-5.99v1.08999z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M196.895 498.495v-1.08999h-5.99v1.08999z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M196.995 497.395v-4.38996h-12.99v4.38996z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M190.247 498.495v-1.08999h-5.99v1.08999z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M190.247 499.595v-1.08999h-5.99v1.08999z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M190.247 500.695v-1.08999h-5.99v1.08999z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="m190.247 500.704-5.99-2.196v5.487h5.99z" />
        <path fill="#535353" d="M190.1 504v-6.59994h.8V504z" />
        <path fill="#535353" d="M196.199 504.001v-10.9999h.8v10.9999z" />
        <path fill="#535353" d="M184 504v-10.9999h.8V504z" />
        <path fill="#535353" d="M196.43 493.881h-11.8597v-.879992H196.43z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M261.006 710.35h.99v5.53978h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M262.006 710.35h.99v5.53978h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M263.006 710.35h.99v5.53978h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M264.006 710.35h.99v5.53978h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M265.006 710.35h.99v5.53978h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M266.006 710.35h.99v5.53978h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M267.006 710.349h3.99v11.6883h-3.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M266.006 716.498h.99v5.53978h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M265.006 716.498h.99v5.53978h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M264.006 716.498h.99v5.53978h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M263.006 716.498h.99v5.53978h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M262.006 716.498h.99v5.53978h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M261.006 716.498h.99v5.53978h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M260.006 710.349h.99v6.16332h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M259.006 710.349h.99v6.16332h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M258.006 710.349h.99v6.16332h-.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="m260.997 716.498 1.996 5.54h-4.987v-5.54z" />
        <path fill="#535353" d="M258.001 716.634h9v-.739971h-9z" />
        <path fill="#535353" d="M258 722.043h13v-.739971h-13z" />
        <path fill="#535353" d="M270.2 710.344v10.9585h.8V710.344z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M123.994 710.35h-.99v5.53978h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M122.994 710.35h-.99v5.53978h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M121.994 710.35h-.99v5.53978h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M120.994 710.35h-.99v5.53978h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M119.994 710.35h-.99v5.53978h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M118.994 710.35h-.99v5.53978h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M117.994 710.349h-3.99v11.6883h3.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M118.994 716.498h-.99v5.53978h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M119.994 716.498h-.99v5.53978h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M120.994 716.498h-.99v5.53978h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M121.994 716.498h-.99v5.53978h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M122.994 716.498h-.99v5.53978h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M123.994 716.498h-.99v5.53978h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M124.994 710.349h-.99v6.16332h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M125.994 710.349h-.99v6.16332h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M126.994 710.349h-.99v6.16332h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="m124.003 716.498-1.996 5.54h4.987v-5.54z" />
        <path fill="#535353" d="M126.999 716.634h-9v-.739971h9z" />
        <path fill="#535353" d="M127 722.043h-13v-.739971h13z" />
        <path fill="#535353" d="M114.8 710.344v10.9585h-.8V710.344z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M71.1604 556.964h-1.10674v4.94333h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M70.0437 556.964h-1.10674v4.94333h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M68.9269 556.964h-1.10674v4.94333h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M67.8102 556.964h-1.10674v4.94333h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M66.6935 556.964h-1.10674v4.94333h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M65.5767 556.964h-1.10674v4.94333h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M64.46 556.964h-4.45695v10.431H64.46z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M65.5767 562.452h-1.10674v4.94333h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M66.6935 562.452h-1.10674v4.94333h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M67.8102 562.452h-1.10674v4.94333h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M68.9269 562.452h-1.10674v4.94333h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M70.0437 562.452h-1.10674v4.94333h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M71.1604 562.452h-1.10674v4.94333h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M72.2772 556.964h-1.10674v5.49985h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M73.3939 556.964h-1.10674v5.49985h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M74.5106 556.964h-1.10674v5.49985h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="m71.1689 562.452-2.2294 4.943h5.5712v-4.943z" />
        <path fill="#535353" d="M74.5155 562.579H64.4649v-.8h10.0506z" />
        <path fill="#535353" d="M74.5156 567.4H59.998v-.8h14.5176z" />
        <path fill="#535353" d="M74.5156 557.399H59.998v-.8h14.5176z" />
        <path fill="#535353" d="M60.798 556.958v9.78075h-.8V556.958z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M74.1387 485.902h-1.10674v4.03439h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M73.0216 485.902h-1.10674v4.03439h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M71.9044 485.902h-1.10674v4.03439h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M70.7872 485.902h-1.10674v4.03439h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M69.6719 485.902h-1.10674v4.03439h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M68.5548 485.902h-1.10674v4.03439h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M67.4376 485.902h-4.45695v8.51507h4.45695z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M68.5548 490.383h-1.10674v4.03439h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M69.6719 490.383h-1.10674v4.03439h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M70.7872 490.383h-1.10674v4.03439h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M71.9044 490.383h-1.10674v4.03439h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M73.0216 490.383h-1.10674v4.03439h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M74.1387 490.383h-1.10674v4.03439h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M75.254 485.902h-1.10674v4.48879H75.254z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M76.3712 485.902h-1.10674v4.48879h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M77.4883 485.902h-1.10674v4.48879h1.10674z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="m74.1457 490.383-2.2275 4.035h5.5703v-4.035z" />
        <path fill="#535353" d="M77.4932 490.413H67.4426v-.8h10.0506z" />
        <path fill="#535353" d="M77.4933 494.422H62.9757v-.8h14.5176z" />
        <path fill="#535353" d="M85.4766 486.403h-22.5v-.8h22.5z" />
        <path fill="#535353" d="M63.7766 485.897v7.98597h-.8V485.897z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M132.986 540.895h-.99v-5.99h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M131.986 540.895h-.99v-5.99h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M130.986 540.895h-.99v-5.99h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M129.986 540.895h-.99v-5.99h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M128.986 540.895h-.99v-5.99h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M127.986 540.895h-.99v-5.99h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M126.986 540.995h-3.99v-12.99h3.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M127.986 534.248h-.99v-5.99h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M128.986 534.248h-.99v-5.99h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="M129.986 534.248h-.99v-5.99h.99z" />
        <path fill="#e6e6e6" stroke="#000" stroke-width=".01" d="m129.995 534.248-1.997-5.99h4.989v5.99z" />
        <path fill="#535353" d="M132.991 534.1h-6v.8h6z" />
        <path fill="#535353" d="M132.992 540.2h-10v.8h10z" />
        <path fill="#535353" d="M132.991 528h-10v.8h10z" />
        <path fill="#535353" d="M123.792 540.201v-11.4004h-.8v11.4004z" />
        {/* CME Women CR bldg */}
        <path onClick={() => bldClicked("CME Women CR")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff69eb' : category["Restroom"] ? "#ff69eb" : "#B0B0B0"} stroke={allFalse ? '#D74DC9' : category["Restroom"] ? "#D74DC9" : "#B0B0B0"} stroke-width={0.4} d="M272 528v15h-9v-15z" />
        <text onClick={() => bldClicked("CME Women CR")} style={{ cursor: "pointer" }} x="267.5" y="535.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">WOMEN'S</text>
        <text onClick={() => bldClicked("CME Women CR")} style={{ cursor: "pointer" }} x="267.5" y="537.4" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">CR</text>

        {/* COE Room 2 bldg */}
        <path onClick={() => bldClicked("COE Room 2")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff3030' : category[""] ? "#ff3030" : "#B0B0B0"} stroke={allFalse ? '#C32525' : category[""] ? "#C32525" : "#B0B0B0"} stroke-width={0.4} d="M249 544h21v17h-21z" />
        <text onClick={() => bldClicked("COE Room 2")} style={{ cursor: "pointer" }} x="259.5" y="553.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ROOM 2</text>

        {/* COE Room 1 bldg */}
        <path onClick={() => bldClicked("COE Room 1")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff3030' : category[""] ? "#ff3030" : "#B0B0B0"} stroke={allFalse ? '#C32525' : category[""] ? "#C32525" : "#B0B0B0"} stroke-width={0.4} d="M270 562v16h-21v-16z" />
        <text onClick={() => bldClicked("COE Room 1")} style={{ cursor: "pointer" }} x="259.5" y="571" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ROOM 1</text>

        {/* Electrical Laboratory / EL bldg */}
        <path onClick={() => bldClicked("Electronic Laboratory")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff3030' : category["Laboratory"] ? "#ff3030" : "#B0B0B0"} stroke={allFalse ? '#C32525' : category["Laboratory"] ? "#C32525" : "#B0B0B0"} stroke-width={0.4} d="M270 579v17h-21v-17z" />
        <text onClick={() => bldClicked("Electronic Laboratory")} style={{ cursor: "pointer" }} x="259.5" y="587.1" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ELECTRONIC</text>
        <text onClick={() => bldClicked("Electronic Laboratory")} style={{ cursor: "pointer" }} x="259.5" y="589.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">LABORATORY</text>

        {/* COE Computer Laboratory 2 */}
        <path onClick={() => bldClicked("Computer Laboratory 2")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff3030' : category["Laboratory"] ? "#ff3030" : "#B0B0B0"} stroke={allFalse ? '#C32525' : category["Laboratory"] ? "#C32525" : "#B0B0B0"} stroke-width={0.4} d="M270 597v16h-21v-16z" />
        <text onClick={() => bldClicked("Computer Laboratory 2")} style={{ cursor: "pointer" }} x="259.5" y="604.6" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">COMPUTER</text>
        <text onClick={() => bldClicked("Computer Laboratory 2")} style={{ cursor: "pointer" }} x="259.5" y="607.4" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">LABORATORY 2</text>

        {/* Room 12 near BISTRO bldg */}
        <path onClick={() => bldClicked("CEAS Room 12")}  style={{ cursor: "pointer" }} fill={allFalse ? '#00c3ff' : category[""] ? "#00c3ff" : "#B0B0B0"} stroke={allFalse ? '#4391A9' : category[""] ? "#4391A9" : "#B0B0B0"} stroke-width={0.4} d="M227 562v21h-22v-21z" />
        <text onClick={() => bldClicked("CEAS Room 12")}  style={{ cursor: "pointer" }} x="216" y="573.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ROOM 12</text>

        {/* Ergonomic Lab bldg */}
        <path  onClick={() => bldClicked("Ergonomic Laboratory")}  style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category["Laboratory"] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M205 540h22v21h-22z" />
        <text  onClick={() => bldClicked("Ergonomic Laboratory")}  style={{ cursor: "pointer" }} x="216" y="550.1" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ERGONOMIC</text>
        <text  onClick={() => bldClicked("Ergonomic Laboratory")}  style={{ cursor: "pointer" }} x="216" y="552.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">LABORATORY</text>

        {/* General Chemistry Lab bldg */}
        <path onClick={() => bldClicked("General Chemistry Laboratory")}  style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category["Laboratory"] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M227 584v21h-22v-21z" />
        <text onClick={() => bldClicked("General Chemistry Laboratory")}  style={{ cursor: "pointer" }} x="216" y="592.7" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">GENERAL</text>
        <text onClick={() => bldClicked("General Chemistry Laboratory")}  style={{ cursor: "pointer" }} x="216" y="595.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">CHEMISTRY</text>
        <text onClick={() => bldClicked("General Chemistry Laboratory")}  style={{ cursor: "pointer" }} x="216" y="598.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">LABORATORY</text>

        {/* EDTECH Lab 2 bldg */}
        <path  onClick={() => bldClicked("Edtech Laboratory 2")}  style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category["Laboratory"] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M227 606v21h-22v-21z" />
        <text  onClick={() => bldClicked("Edtech Laboratory 2")}  style={{ cursor: "pointer" }} x="216" y="615.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">EDTECH</text>
        <text  onClick={() => bldClicked("Edtech Laboratory 2")}  style={{ cursor: "pointer" }} x="216" y="618.7" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">LABORATORY 2</text>

        {/* New CEAS CR bldg */}
        <path onClick={() => bldClicked("")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff69eb' : category["Restroom"] ? "#ff69eb" : "#B0B0B0"} stroke={allFalse ? '#D74DC9' : category["Restroom"] ? "#D74DC9" : "#B0B0B0"} stroke-width={0.4} d="M113 528v15h9v-15z" />
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="117.5" y="535.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">WOMEN'S</text>
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="117.5" y="537.4" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">CR</text>

        {/* New CEAS Room 5 bldg */}
        <path onClick={() => bldClicked("CEAS Room 5")} style={{ cursor: "pointer" }} fill={allFalse ? '#00c3ff' : category[""] ? "#00c3ff" : "#B0B0B0"} stroke={allFalse ? '#4391A9' : category[""] ? "#4391A9" : "#B0B0B0"} stroke-width={0.4} d="M115 544h21v17h-21z" />
        <text onClick={() => bldClicked("CEAS Room 5")} style={{ cursor: "pointer" }} x="125.5" y="553.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.2" fill="black">ROOM 5</text>

        {/* Dorm near Sewing Lab bldg */}
        <path onClick={() => bldClicked("Dorm")} style={{ cursor: "pointer" }} fill={allFalse ? '#0080ff' : category[""] ? "#0080ff" : "#B0B0B0"} stroke={allFalse ? '#0065CE' : category[""] ? "#0065CE" : "#B0B0B0"} stroke-width={0.4} d="m25.5078 522.63 17.3889326.63436844-1.55969218 42.75335977-17.3889326-.63436844z" />
        <text onClick={() => bldClicked("Dorm")} style={{ cursor: "pointer" }} x="32.85" y="546" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black" transform="rotate(2.09, 33.422, 557.324)">DORM</text>

        {/* New CEAS Room 3 bldg */}
        <path onClick={() => bldClicked("CEAS Room 3")} style={{ cursor: "pointer" }} fill={allFalse ? '#00c3ff' : category[""] ? "#00c3ff" : "#B0B0B0"} stroke={allFalse ? '#4391A9' : category[""] ? "#4391A9" : "#B0B0B0"} stroke-width={0.4} d="M136 579v17h-21v-17z" />
        <text onClick={() => bldClicked("CEAS Room 3")} style={{ cursor: "pointer" }} x="125.5" y="588.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.2" fill="black">ROOM 3</text>

        {/* Quadrangle bldg */}
        <path onClick={() => bldClicked("Quadrangle")} style={{ cursor: "pointer" }} fill={allFalse ? '#00ffae' : category["Sports"] ? "#00ffae" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M195 589v51.391h-40V589z" />
        <text onClick={() => bldClicked("Quadrangle")} style={{ cursor: "pointer" }} x="175" y="616.696" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.2" fill="black">QUADRANGLE</text>
        <path onClick={() => bldClicked("Quadrangle")} style={{ cursor: "pointer" }} fill={allFalse ? '#01db96' : category["Sports"] ? "#01db96" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M155 640.261h40V643h-40z" />

        {/* Flag pole bldg */}
        <path onClick={() => bldClicked("Flag Pole")} style={{ cursor: "pointer" }} fill={allFalse ? '#00ffae' : category[""] ? "#00ffae" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category[""] ? "#01CC8C" : "#B0B0B0"}
          stroke-width={0.4} d="M202 700v10.468h-18V700z" />
        <text onClick={() => bldClicked("Flag Pole")} style={{ cursor: "pointer" }} x="193" y="705.6" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">FLAG POLE</text>
        <path onClick={() => bldClicked("Flag Pole")} style={{ cursor: "pointer" }} fill={allFalse ? '#01CC8C' : category[""] ? "#01CC8C" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category[""] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M184 709.721h18V711h-18z" />

        {/* New CEAS Room 2 bldg */}
        <path onClick={() => bldClicked("CEAS Room 2")} style={{ cursor: "pointer" }} fill={allFalse ? '#00c3ff' : category[""] ? "#00c3ff" : "#B0B0B0"} stroke={allFalse ? '#4391A9' : category[""] ? "#4391A9" : "#B0B0B0"} stroke-width={0.4} d="M136 597v16h-21v-16z" />
        <text onClick={() => bldClicked("CEAS Room 2")} style={{ cursor: "pointer" }} x="125.5" y="605.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.2" fill="black">ROOM 2</text>

        {/* Production Area Stock Room 2 bldg */}
        <path onClick={() => bldClicked("Production Area Stock Room 2")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category["Laboratory"] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M62.457 486.005V494h-11l5.8236-7.995z" />
        <text onClick={() => bldClicked("Production Area Stock Room 2")} style={{ cursor: "pointer" }} x="58.65" y="489.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">STOCK</text>
        <text onClick={() => bldClicked("Production Area Stock Room 2")} style={{ cursor: "pointer" }} x="58.65" y="491.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">ROOM</text>


        {/* Production Area bldg */}
        <path onClick={() => bldClicked("Production Area")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category["Laboratory"] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M78 495v14H47v-7.881l2.4404-3.846L50.8946 495z" />
        <text onClick={() => bldClicked("Production Area")} style={{ cursor: "pointer" }} x="62.5" y="501.6" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.2" fill="black">PRODUCTION</text>
        <text onClick={() => bldClicked("Production Area")} style={{ cursor: "pointer" }} x="62.5" y="504.6" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.2" fill="black">AREA</text>


        {/* Production Office bldg */}
        <path onClick={() => bldClicked("Production Office")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category["Laboratory"] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M78 510v11H62v-11z" />
        <text onClick={() => bldClicked("Production Office")} style={{ cursor: "pointer" }} x="70" y="515" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">PRODUCTION</text>
        <text onClick={() => bldClicked("Production Office")} style={{ cursor: "pointer" }} x="70" y="517.6" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">OFFICE</text>


        {/* Production Area Stock Room 1 bldg */}
        <path onClick={() => bldClicked("Production Area Stock Room 1")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category["Laboratory"] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M61 510v11H47v-11z" />
        <text onClick={() => bldClicked("Production Area Stock Room 1")} style={{ cursor: "pointer" }} x="54.1" y="515" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">STOCK</text>
        <text onClick={() => bldClicked("Production Area Stock Room 1")} style={{ cursor: "pointer" }} x="54.1" y="517.6" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ROOM</text>


        {/* Extension & Production Office bldg */}
        <path onClick={() => bldClicked("Extension & Production Office")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category["Laboratory"] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M78 522v7H47v-7z" />
        <text onClick={() => bldClicked("Extension & Production Office")} style={{ cursor: "pointer" }}  x="62.5" y="525.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">EXTENSION &</text>
        <text onClick={() => bldClicked("Extension & Production Office")} style={{ cursor: "pointer" }}  x="62.5" y="527.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">PRODUCTION OFFICE</text>

        {/* Supply Office bldg */}
        <path onClick={() => bldClicked("Supply Office")} style={{ cursor: "pointer" }}  fill={allFalse ? '#ff8000' : category["Laboratory"] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M78 530v12H62v-12z" />
        <text onClick={() => bldClicked("Supply Office")} style={{ cursor: "pointer" }} x="70" y="535.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">SUPPLY</text>
        <text onClick={() => bldClicked("Supply Office")} style={{ cursor: "pointer" }} x="70" y="538" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">OFFICE</text>

        {/* Old Admin Storage Room bldg */}
        <path onClick={() => bldClicked("Old Admin Storage Room")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category["Laboratory"] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M78 543v13H47v-26h13.9843v13z" />
        <text onClick={() => bldClicked("Old Admin Storage Room")} style={{ cursor: "pointer" }} x="62.5" y="549.1" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">STORAGE</text>
        <text onClick={() => bldClicked("Old Admin Storage Room")} style={{ cursor: "pointer" }} x="62.5" y="551.55" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ROOM</text>

        {/* COT Stock Room 1 bldg */}
        <path onClick={() => bldClicked("COT Stock Room 1")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category[""] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M59 557v10H47v-10z" />
        <text onClick={() => bldClicked("COT Stock Room 1")} style={{ cursor: "pointer" }} x="53" y="561.65" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">STOCK</text>
        <text onClick={() => bldClicked("COT Stock Room 1")} style={{ cursor: "pointer" }} x="53" y="563.8" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">ROOM</text>

        {/* COT Dean's office bldg */}
        <path onClick={() => bldClicked("COT Dean's office")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category["Faculty"] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category["Faculty"] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M59 568v7H47v-7z" />
        <text onClick={() => bldClicked("COT Dean's office")} style={{ cursor: "pointer" }} x="53" y="571.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">COT DEAN'S</text>
        <text onClick={() => bldClicked("COT Dean's office")} style={{ cursor: "pointer" }} x="53" y="573" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">OFFICE</text>

        {/* COT Office 1 bldg */}
        <path onClick={() => bldClicked("")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category["Faculty"] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category["Faculty"] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M59 576v6H47v-6z" />
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="53" y="579.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">OFFICE</text>

        {/* COT Office 2 bldg */}
        <path onClick={() => bldClicked("")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category["Faculty"] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category["Faculty"] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M59 583v6H47v-6z" />
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="53" y="586.7" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">OFFICE</text>

        {/* COT Stock Room 2 bldg */}
        <path onClick={() => bldClicked("")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category[""] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M59 590v7H47v-7z" />
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="53" y="593.1" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.6" fill="black">STOCK</text>
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="53" y="595" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.6" fill="black">ROOM</text>

        {/* COT Office Main bldg */}
        <path onClick={() => bldClicked("")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category["Faculty"] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category["Faculty"] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M78 568v17H60v-17z" />
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="69" y="576.25" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">COT</text>
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="69" y="578.75" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">OFFICE</text>

        {/* COT Faculty office bldg */}
        <path onClick={() => bldClicked("")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category["Faculty"] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category["Faculty"] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M78 586v11H60v-11z" />
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="69" y="590.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">COT</text>
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="69" y="593.4" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">FACULTY</text>

        {/* COE Computer Laboratory 1 bldg */}
        <path onClick={() => bldClicked("Computer Laboratory 1")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff3030' : category["Laboratory"] ? "#ff3030" : "#B0B0B0"} stroke={allFalse ? '#C32525' : category["Laboratory"] ? "#C32525" : "#B0B0B0"} stroke-width={0.4} d="M270.002 614v30.514h-20.994V614z" />
        <text onClick={() => bldClicked("Computer Laboratory 1")} style={{ cursor: "pointer" }} x="259.505" y="628.7" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">COMPUTER</text>
        <text onClick={() => bldClicked("Computer Laboratory 1")} style={{ cursor: "pointer" }} x="259.505" y="631.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">LABORATORY 1</text>
        <path onClick={() => bldClicked("Computer Laboratory 1")} style={{ cursor: "pointer" }} fill={allFalse ? '#CD2727' : category["Laboratory"] ? "#CD2727" : "#B0B0B0"} stroke={allFalse ? '#C32525' : category["Laboratory"] ? "#C32525" : "#B0B0B0"} stroke-width={0.4} d="M249.008 643.367h20.994v2.638h-20.994z" />

        {/* Centrum bldg */}
        <path onClick={() => bldClicked("Centrum")} style={{ cursor: "pointer" }} fill={allFalse ? '#00ffae' : category["Sports"] ? "#00ffae" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="m458.775 585.587-8.812 97.326-34.236-3.099 8.812-97.326z" />
        <text onClick={() => bldClicked("Centrum")} style={{ cursor: "pointer" }} x="437.251" y="632" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black" transform="rotate(5.17, 437.251, 631.451)">CTU FACILITY</text>
        <text onClick={() => bldClicked("Centrum")} style={{ cursor: "pointer" }} x="437.251" y="634.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black" transform="rotate(5.17, 437.251, 633.951)">CENTRUM</text>
        <path onClick={() => bldClicked("Centrum")} style={{ cursor: "pointer" }} fill={allFalse ? '#01db96' : category["Sports"] ? "#01db96" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="m415.727 679.814 34.236 3.099-.431 4.756-34.235-3.1z" />

        {/* EDTECH Lab 1 bldg */}
        <path onClick={() => bldClicked("Edtech Laboratory 1")} style={{ cursor: "pointer" }}  fill={allFalse ? '#ff8000' : category["Laboratory"] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M227 628v19.975h-22V628z" />
        <text onClick={() => bldClicked("Edtech Laboratory 1")} style={{ cursor: "pointer" }}   x="216" y="637.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">EDTECH</text>
        <text onClick={() => bldClicked("Edtech Laboratory 1")} style={{ cursor: "pointer" }}   x="216" y="640.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">LABORATORY 1</text>
        <path onClick={() => bldClicked("Edtech Laboratory 1")} style={{ cursor: "pointer" }}   fill={allFalse ? '#ce6700' : category["Laboratory"] ? "#ce6700" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M205 647.84h22V650h-22z" />

        {/* COT Record bldg */}
        <path onClick={() => bldClicked("")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category[""] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M78 598v6.452H47V598z" />
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="62.5" y="601.85" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">RECORDS</text>
        <path onClick={() => bldClicked("")} style={{ cursor: "pointer" }} fill={allFalse ? '#d6b018' : category[""] ? "#d6b018" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M47 604.452h31V606H47z" />

        {/* Sewing Laboratory bldg */}
        <path onClick={() => bldClicked("Sewing Laboratory")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category["Laboratory"] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="m41.3387 567.29-.7631 20.919-17.389-.635.7631-20.919z" />
        <text onClick={() => bldClicked("Sewing Laboratory")} style={{ cursor: "pointer" }} x="32.263" y="576.7" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black" transform="rotate(2.09, 32.263, 576.132)">SEWING</text>
        <text onClick={() => bldClicked("Sewing Laboratory")} style={{ cursor: "pointer" }} x="32.263" y="579.4" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black" transform="rotate(2.09, 32.263, 578.732)">LABORATORY</text>
        <path onClick={() => bldClicked("Sewing Laboratory")} style={{ cursor: "pointer" }} fill={allFalse ? '#ce6700' : category["Laboratory"] ? "#ce6700" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="m23.22 586.659 17.3889.634-.0715 1.962-17.389-.635z" />

        {/* New CEAS Room 1 bldg */}
        <path onClick={() => bldClicked("CEAS Room 1")} style={{ cursor: "pointer" }} fill={allFalse ? '#00c3ff' : category[""] ? "#00c3ff" : "#B0B0B0"} stroke={allFalse ? '#4391A9' : category[""] ? "#4391A9" : "#B0B0B0"} stroke-width={0.4} d="M136 614v30.564h-21V614z" />
        <text onClick={() => bldClicked("CEAS Room 1")} style={{ cursor: "pointer" }} x="125.5" y="629.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.2" fill="black">ROOM 1</text>
        <path onClick={() => bldClicked("CEAS Room 1")} style={{ cursor: "pointer" }} fill={allFalse ? '#0094cf' : category[""] ? "#0094cf" : "#B0B0B0"} stroke={allFalse ? '#4391A9' : category[""] ? "#4391A9" : "#B0B0B0"} stroke-width={0.4} d="M115 643.357h21V646h-21z" />

        {/* CIVIL ENGINEERING LABBBBBBBBB */}
        <path onClick={() => bldClicked("Engineering Laboratory")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff3030' : category["Laboratory"] ? "#ff3030" : "#B0B0B0"} stroke={allFalse ? '#C32525' : category["Laboratory"] ? "#C32525" : "#B0B0B0"} stroke-width={0.4} d="M270 664v17h-21v-17z" />
        <text onClick={() => bldClicked("Engineering Laboratory")} style={{ cursor: "pointer" }} x="259.5" y="672.1" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ENGINEERING</text>
        <text onClick={() => bldClicked("Engineering Laboratory")} style={{ cursor: "pointer" }} x="259.5" y="674.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">LABORATORY</text>

        {/* electrical eng lab */}
        <path onClick={() => bldClicked("Electrical Engineering Laboratory")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff3030' : category["Laboratory"] ? "#ff3030" : "#B0B0B0"} stroke={allFalse ? '#C32525' : category["Laboratory"] ? "#C32525" : "#B0B0B0"} stroke-width={0.4} d="M270 682v16h-21v-16z" />
        <text onClick={() => bldClicked("Electrical Engineering Laboratory")} style={{ cursor: "pointer" }} x="259.5" y="688.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ELECTRICAL</text>
        <text onClick={() => bldClicked("Electrical Engineering Laboratory")} style={{ cursor: "pointer" }} x="259.5" y="690.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ENGINEERING</text>
        <text onClick={() => bldClicked("Electrical Engineering Laboratory")} style={{ cursor: "pointer" }} x="259.5" y="693.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">LABORATORY</text>

        {/* CEAS Lab 2 bldg */}
        <path onClick={() => bldClicked("Education Laboratory 2")} style={{ cursor: "pointer" }}  fill={allFalse ? '#00c3ff' : category["Laboratory"] ? "#00c3ff" : "#B0B0B0"} stroke={allFalse ? '#4391A9' : category["Laboratory"] ? "#4391A9" : "#B0B0B0"} stroke-width={0.4} d="M136 664v17h-21v-17z" />
        <text onClick={() => bldClicked("Education Laboratory 2")} style={{ cursor: "pointer" }}  x="125.5" y="672.1" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">EDUCATION</text>
        <text onClick={() => bldClicked("Education Laboratory 2")} style={{ cursor: "pointer" }}  x="125.5" y="674.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">LABORATORY 2</text>

        {/* CEAS Lab 1 bldg */}
        <path onClick={() => bldClicked("Education Laboratory 1")} style={{ cursor: "pointer" }} fill={allFalse ? '#00c3ff' : category["Laboratory"] ? "#00c3ff" : "#B0B0B0"} stroke={allFalse ? '#4391A9' : category["Laboratory"] ? "#4391A9" : "#B0B0B0"} stroke-width={0.4} d="M136 682v16h-21v-16z" />
        <text onClick={() => bldClicked("Education Laboratory 1")} style={{ cursor: "pointer" }}  x="125.5" y="689" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">EDUCATION</text>
        <text onClick={() => bldClicked("Education Laboratory 1")} style={{ cursor: "pointer" }}  x="125.5" y="692" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">LABORATORY 1</text>

        {/* woman cr near clinic */}
        <path onClick={() => bldClicked("")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff69eb' : category["Restroom"] ? "#ff69eb" : "#B0B0B0"} stroke={allFalse ? '#D74DC9' : category["Restroom"] ? "#D74DC9" : "#B0B0B0"} stroke-width={0.4} d="M249 699h24v8.938h-24z" />
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="261" y="704.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">WOMEN'S CR</text>
        <path onClick={() => bldClicked("")} style={{ cursor: "pointer" }} fill={allFalse ? '#cf56bf' : category["Restroom"] ? "#cf56bf" : "#B0B0B0"} stroke={allFalse ? '#D74DC9' : category["Restroom"] ? "#D74DC9" : "#B0B0B0"} stroke-width={0.4} d="M249 707.938h24V710h-24z" />

        {/* woman cr near accounting */}
        <path onClick={() => bldClicked("")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff69eb' : category["Restroom"] ? "#ff69eb" : "#B0B0B0"} stroke={allFalse ? '#D74DC9' : category["Restroom"] ? "#D74DC9" : "#B0B0B0"} stroke-width={0.4} d="M112 699h24v8.937h-24z" />
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="124" y="704.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">WOMEN'S CR</text>
        <path onClick={() => bldClicked("")} style={{ cursor: "pointer" }} fill={allFalse ? '#cf56bf' : category["Restroom"] ? "#cf56bf" : "#B0B0B0"} stroke={allFalse ? '#D74DC9' : category["Restroom"] ? "#D74DC9" : "#B0B0B0"} stroke-width={0.4} d="M112 707.937h24V710h-24z" />

        {/* MIS Office bldg */}
        <path fill={allFalse ? '#ff6453' : category["Admin"] ? "#ff6453" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} onClick={() => bldClicked("MIS Office")} style={{ cursor: "pointer", pointerEvents: 'all' }} stroke-width={0.4} d="M143 728h15v21.021h-15z" />
        <text onClick={() => bldClicked("MIS Office")} style={{ cursor: "pointer", pointerEvents: 'all' }} x="150.5" y="738.61" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">MIS</text>
        <text onClick={() => bldClicked("MIS Office")} style={{ cursor: "pointer", pointerEvents: 'all' }} x="150.5" y="741.41" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">OFFICE</text>
        <path fill={allFalse ? '#ce4b46' : category["Admin"] ? "#ce4b46" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} stroke-width={0.4} d="M143 749.021h15V751h-15z" />

        {/* Registrar bldg */}
        <path onClick={() => bldClicked("Registrar")} style={{ cursor: "pointer", pointerEvents: 'all' }} fill={allFalse ? '#ff6453' : category["Admin"] ? "#ff6453" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} stroke-width={0.4} d="M159 728h15v21.021h-15z" />
        <text onClick={() => bldClicked("Registrar")} style={{ cursor: "pointer", pointerEvents: 'all' }} x="166.5" y="739.7" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">REGISTRAR</text>
        <path fill={allFalse ? '#ce4b46' : category["Admin"] ? "#ce4b46" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} stroke-width={0.4} d="M159 749.021h15V751h-15z" />

        {/* Power House bldg */}
        <path onClick={() => bldClicked("Power House")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff6453' : category["Admin"] ? "#ff6453" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} stroke-width={0.4} d="M261 730h15v18.279h-15z" />
        <text onClick={() => bldClicked("Power House")} style={{ cursor: "pointer" }} x="268.5" y="739.24" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">POWER</text>
        <text onClick={() => bldClicked("Power House")} style={{ cursor: "pointer" }} x="268.5" y="742.04" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">HOUSE</text>
        <path fill={allFalse ? '#ce4b46' : category["Admin"] ? "#ce4b46" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} stroke-width={0.4} d="M261 748.279h15V750h-15z" />

        {/* Cashier bldg */}
        <path onClick={() => bldClicked("Cashier")} style={{ cursor: "pointer", pointerEvents: 'all' }} fill={allFalse ? '#ff6453' : category["Admin"] ? "#ff6453" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} stroke-width={0.4} d="M211 728h16v21.021h-16z" />
        <text onClick={() => bldClicked("Cashier")} style={{ cursor: "pointer", pointerEvents: 'all' }} x="219" y="739.7" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">CASHIER</text>
        <path fill={allFalse ? '#ce4b46' : category["Admin"] ? "#ce4b46" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} stroke-width={0.4} d="M211 749.021h16V751h-16z" />

        {/* BAC bldg */}
        <path onClick={() => bldClicked("BAC Office")} style={{ cursor: "pointer", pointerEvents: 'all' }} fill={allFalse ? '#ff6453' : category["Admin"] ? "#ff6453" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} stroke-width={0.4} d="M228 728h15v21.021h-15z" />
        <text onClick={() => bldClicked("BAC Office")} style={{ cursor: "pointer", pointerEvents: 'all' }} x="235.5" y="738.61" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">BAC</text>
        <text onClick={() => bldClicked("BAC Office")} style={{ cursor: "pointer", pointerEvents: 'all' }} x="235.5" y="741.41" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">OFFICE</text>
        <path fill={allFalse ? '#ce4b46' : category["Admin"] ? "#ce4b46" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} stroke-width={0.4} d="M228 749.021h15V751h-15z" />

        {/* BISTRO bldg */}
        <path  onClick={() => bldClicked("Bistro")}  style={{ cursor: "pointer" }} fill={allFalse ? '#ff4c85' : category["Food"] ? "#ff4c85" : "#B0B0B0"} stroke={allFalse ? '#DD4B83' : category["Food"] ? "#DD4B83" : "#B0B0B0"} stroke-width={0.4} d="M152 542h9v-5h13.596v5.372h22.198v14.709H152z" />
        <text onClick={() => bldClicked("Bistro")}  style={{ cursor: "pointer" }} x="173.9" y="550.4" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.2" fill="black">BISTRO</text>
        <path onClick={() => bldClicked("Bistro")}  style={{ cursor: "pointer" }} fill={allFalse ? '#d94272' : category["Food"] ? "#d94272" : "#B0B0B0"} stroke={allFalse ? '#DD4B83' : category["Food"] ? "#DD4B83" : "#B0B0B0"} stroke-width={0.4} d="M152 556.953h44.794V559H152z" />

        {/* Clinic bldg */}
        <path onClick={() => bldClicked("University Clinic")} style={{ cursor: "pointer", pointerEvents: 'all' }} fill={allFalse ? '#ff6453' : category["Admin"] ? "#ff6453" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} stroke-width={0.4} d="M244 728h8v-5h8v26.066h-16z" />
        <text onClick={() => bldClicked("University Clinic")} style={{ cursor: "pointer", pointerEvents: 'all' }} x="252" y="739.7" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">CLINIC</text>
        <path fill={allFalse ? '#ce4b46' : category["Admin"] ? "#ce4b46" : "#B0B0B0"} stroke={allFalse ? '#B84336' : category["Admin"] ? "#B84336" : "#B0B0B0"} stroke-width={0.4} d="M244 749.066h16V751h-16z" />

        {/* University Canteen bldg */}
        <path onClick={() => bldClicked("University Canteen")}  style={{ cursor: "pointer" }} fill={allFalse ? '#ff4c85' : category["Food"] ? "#ff4c85" : "#B0B0B0"} stroke={allFalse ? '#DD4B83' : category["Food"] ? "#DD4B83" : "#B0B0B0"} stroke-width={0.4} d="M108 421h39v46h-39z" />
        <text onClick={() => bldClicked("University Canteen")}  style={{ cursor: "pointer" }} x="127.5" y="444.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black">UNIVERSITY</text>
        <text onClick={() => bldClicked("University Canteen")}  style={{ cursor: "pointer" }} x="127.5" y="447.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black">CANTEEN</text>

        {/* Canteen Stock Room bldg */}
        <path onClick={() => bldClicked("Canteen Stock Room")}  style={{ cursor: "pointer" }} fill={allFalse ? '#ff4c85' : category[""] ? "#ff4c85" : "#B0B0B0"} stroke={allFalse ? '#DD4B83' : category[""] ? "#DD4B83" : "#B0B0B0"} stroke-width={0.4} d="M132 468h14.956v7.283H132z" />
        <text onClick={() => bldClicked("Canteen Stock Room")}  style={{ cursor: "pointer" }} x="139.478" y="471.4" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">STOCK</text>
        <text onClick={() => bldClicked("Canteen Stock Room")}  style={{ cursor: "pointer" }} x="139.478" y="473.4" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">ROOM</text>
        <path fill={allFalse ? '#d94272' : category[""] ? "#d94272" : "#B0B0B0"} stroke={allFalse ? '#DD4B83' : category[""] ? "#DD4B83" : "#B0B0B0"} stroke-width={0.4} d="M132 475.283h14.956v1.69H132z" />

        {/* COT Room 46 bldg */}
        <path onClick={() => bldClicked("Room 46")} style={{ cursor: "pointer" }}  fill={allFalse ? '#fc0' : category[""] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M131 468v17h-23v-17z" />
        <text onClick={() => bldClicked("Room 46")} style={{ cursor: "pointer" }} x="119.5" y="477.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ROOM 46</text>

        {/* COT Computer Laboratory bldg */}
        <path onClick={() => bldClicked("")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category["Laboratory"] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category["Laboratory"] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M108 486h24v16h-24z" />
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="120" y="493.8" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">COMPUTER</text>
        <text onClick={() => bldClicked("")} style={{ cursor: "pointer" }} x="120" y="496.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">LABORATORY</text>
        <path fill={allFalse ? '#d6b018' : category["Laboratory"] ? "#d6b018" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category["Laboratory"] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M108 502h24v2h-24z" />

        {/* Men's Dorm bldg */}
        <path onClick={() => bldClicked("Men's Dorm")} style={{ cursor: "pointer" }} fill={allFalse ? '#0080ff' : category[""] ? "#0080ff" : "#B0B0B0"} stroke={allFalse ? '#0065CE' : category[""] ? "#0065CE" : "#B0B0B0"} stroke-width={0.4} d="M359 462.486h19v33.189h-19z" />
        <text onClick={() => bldClicked("Men's Dorm")} style={{ cursor: "pointer" }} x="368.5" y="478.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">MEN'S</text>
        <text onClick={() => bldClicked("Men's Dorm")} style={{ cursor: "pointer" }} x="368.5" y="481.25" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">DORM</text>
        <path fill={allFalse ? '#006cd7' : category[""] ? "#006cd7" : "#B0B0B0"} stroke={allFalse ? '#0065CE' : category[""] ? "#0065CE" : "#B0B0B0"} stroke-width={0.4} d="M359 495.409h19v2.655h-19z" />

        {/* Floating Classroom bldg */}
        <path onClick={() => bldClicked("Floating Classroom")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category[""] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M167 353h68v16h-68z" />
        <text onClick={() => bldClicked("Floating Classroom")} style={{ cursor: "pointer" }} x="201" y="360.75" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.2" fill="black">FLOATING</text>
        <text onClick={() => bldClicked("Floating Classroom")} style={{ cursor: "pointer" }} x="201" y="363.25" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.2" fill="black">CLASSROOM</text>
        <path fill={allFalse ? '#d6b018' : category[""] ? "#d6b018" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M167 369h68v2h-68z" />

        {/* Grandstand bldg */}
        <path onClick={() => bldClicked("Grandstand")} style={{ cursor: "pointer" }} fill={allFalse ? '#00c3ff' : category[""] ? "#00c3ff" : "#B0B0B0"} stroke={allFalse ? '#4391A9' : category[""] ? "#4391A9" : "#B0B0B0"} stroke-width={0.4} d="m91.6124 179.949 2.7928-2.568 5.3134 5.778 5.3934-4.959-5.3137-5.779 2.8887-2.656 5.314 5.778 5.393-4.959-5.314-5.778 2.89-2.657 5.313 5.778 5.393-4.959-5.313-5.778 2.889-2.657 5.313 5.778 5.393-4.959-5.313-5.778 2.889-2.657 5.313 5.778 5.393-4.959-5.313-5.778 2.889-2.657 5.313 5.779 5.394-4.96-5.314-5.778 2.889-2.657 5.314 5.779 5.393-4.959-5.314-5.779 2.889-2.656 5.314 5.778 5.393-4.959-5.313-5.779 2.889-2.656 5.313 5.778 5.393-4.959-5.313-5.778 2.889-2.657 5.313 5.778 5.393-4.959-5.313-5.778 2.889-2.657L182.54 107l5.393-4.959-5.313-5.7781 2.889-2.6567 5.314 5.7782 5.393-4.9591-5.314-5.7783 2.889-2.6567 22.41 24.3707-102.179 93.958z" />
        <text onClick={() => bldClicked("Grandstand")} style={{ cursor: "pointer" }} x="148.281" y="153.475" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="5" fill="black" transform="rotate(-43, 148.281, 143.475)">GRANDSTAND</text>
        <path fill={allFalse ? '#0094cf' : category[""] ? "#0094cf" : "#B0B0B0"} stroke={allFalse ? '#4391A9' : category[""] ? "#4391A9" : "#B0B0B0"} stroke-width={0.4} d="m114.017 204.314 102.179-93.959 2.125 2.312-102.178 93.958z" />

        {/* COT Room 38 / Industrial Motor Control /Electrical Laboratory bldg */}
        <path onClick={() => bldClicked("Room 38")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category["Laboratory"] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category["Laboratory"] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M155 397h23v25h-23z" />
        <text onClick={() => bldClicked("Room 38")} style={{ cursor: "pointer" }} x="166.5" y="406.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">ROOM 38</text>
        <text onClick={() => bldClicked("Room 38")} style={{ cursor: "pointer" }} x="166.5" y="408.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">INDUSTRIAL MOTOR</text>
        <text onClick={() => bldClicked("Room 38")} style={{ cursor: "pointer" }} x="166.5" y="410.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">CONTROL /</text>
        <text onClick={() => bldClicked("Room 38")} style={{ cursor: "pointer" }} x="166.5" y="412.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">ELECTRICAL</text>
        <text onClick={() => bldClicked("Room 38")} style={{ cursor: "pointer" }} x="166.5" y="414.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">LABORATORY</text>

        {/* COT Room 39 / Automation Laboratory 3 / Electronic Laboratory bldg */}
        <path onClick={() => bldClicked("Room 39")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category["Laboratory"] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category["Laboratory"] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M178 423v17h-23v-17z" />
        <text onClick={() => bldClicked("Room 39")} style={{ cursor: "pointer" }} x="166.5" y="428.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">ROOM 39</text>
        <text onClick={() => bldClicked("Room 39")} style={{ cursor: "pointer" }} x="166.5" y="430.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">AUTOMATION</text>
        <text onClick={() => bldClicked("Room 39")} style={{ cursor: "pointer" }} x="166.5" y="432.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">LABORATORY 3 /</text>
        <text onClick={() => bldClicked("Room 39")} style={{ cursor: "pointer" }} x="166.5" y="434.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">ELECTRONIC</text>
        <text onClick={() => bldClicked("Room 39")} style={{ cursor: "pointer" }} x="166.5" y="436.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">LABORATORY</text>

        {/* COT Room 40 / Drafting Laboratory bldg */}
        <path onClick={() => bldClicked("Room 40")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category["Laboratory"] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category["Laboratory"] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M178 441v17h-23v-17z" />
        <text onClick={() => bldClicked("Room 40")} style={{ cursor: "pointer" }} x="166.5" y="448.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">ROOM 40</text>
        <text onClick={() => bldClicked("Room 40")} style={{ cursor: "pointer" }} x="166.5" y="450.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">DRAFTING</text>
        <text onClick={() => bldClicked("Room 40")} style={{ cursor: "pointer" }} x="166.5" y="452.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">LABORATORY</text>

        {/* COT Room 41 / Motor Control /Electrical & Instrumentation Laboratory bldg */}
        <path onClick={() => bldClicked("Room 41")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category["Laboratory"] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category["Laboratory"] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M178 459v17h-23v-17z" />
        <text onClick={() => bldClicked("Room 41")} style={{ cursor: "pointer" }} x="166.5" y="464.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">ROOM 41</text>
        <text onClick={() => bldClicked("Room 41")} style={{ cursor: "pointer" }} x="166.5" y="466.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">MOTOR CONTROL /</text>
        <text onClick={() => bldClicked("Room 41")} style={{ cursor: "pointer" }} x="166.5" y="468.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">ELECTRICAL &</text>
        <text onClick={() => bldClicked("Room 41")} style={{ cursor: "pointer" }} x="166.5" y="470.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">INSTRUMENTATION</text>
        <text onClick={() => bldClicked("Room 41")} style={{ cursor: "pointer" }} x="166.5" y="472.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">LABORATORY</text>

        {/* COT Room 27 / Automation Laboratory bldg */}
        <path onClick={() => bldClicked("Room 27")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category["Laboratory"] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category["Laboratory"] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M155 477h23v25.034h-23z" />
        <text onClick={() => bldClicked("Room 27")} style={{ cursor: "pointer" }} x="166.5" y="488.517" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">ROOM 27</text>
        <text onClick={() => bldClicked("Room 27")} style={{ cursor: "pointer" }} x="166.5" y="490.517" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">AUTOMATION</text>
        <text onClick={() => bldClicked("Room 27")} style={{ cursor: "pointer" }} x="166.5" y="492.517" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">LABORATORY</text>
        <path onClick={() => bldClicked("Room 27")} style={{ cursor: "pointer" }} fill={allFalse ? '#d6b018' : category["Laboratory"] ? "#d6b018" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category["Laboratory"] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M155 502.034h23V504h-23z" />

        {/* Study Area bldg */}
        <path onClick={() => bldClicked("Study Area")}  style={{ cursor: "pointer" }} fill={allFalse ? '#7bff00' : category[""] ? "#7bff00" : "#B0B0B0"} stroke={allFalse ? '#60C700' : category[""] ? "#60C700" : "#B0B0B0"} stroke-width={0.4} d="M213 525h19v9.875h-19z" />
        <text  onClick={() => bldClicked("Study Area")}  style={{ cursor: "pointer" }} x="222.5" y="529.4" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">STUDY</text>
        <text  onClick={() => bldClicked("Study Area")}  style={{ cursor: "pointer" }} x="222.5" y="531.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">AREA</text>
        <path  onClick={() => bldClicked("Study Area")}  style={{ cursor: "pointer" }} fill={allFalse ? '#64cf00' : category[""] ? "#64cf00" : "#B0B0B0"} stroke={allFalse ? '#60C700' : category[""] ? "#60C700" : "#B0B0B0"} stroke-width={0.4} d="M213 534.75h19V536h-19z" />

        {/* Stage bldg */}
        <path onClick={() => bldClicked("Stage")}  style={{ cursor: "pointer" }} fill={allFalse ? '#00ffae' : category["Sports"] ? "#00ffae" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M156 562h19v20.648h-19z" />
        <text onClick={() => bldClicked("Stage")}  style={{ cursor: "pointer" }} x="165.5" y="573.324" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.2" fill="black">STAGE</text>
        <path onClick={() => bldClicked("Stage")}  style={{ cursor: "pointer" }} fill={allFalse ? '#01db96' : category["Sports"] ? "#01db96" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M156 582.386h19V585h-19z" />

        {/* NSTP Office bldg */}
        <path onClick={() => bldClicked("NSTP Office")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category[""] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M133 486h10v16h-10z" />
        <text onClick={() => bldClicked("NSTP Office")} style={{ cursor: "pointer" }} x="138" y="494" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">NSTP</text>
        <text onClick={() => bldClicked("NSTP Office")} style={{ cursor: "pointer" }} x="138" y="496" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">OFFICE</text>
        <path fill={allFalse ? '#d6b018' : category[""] ? "#d6b018" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M133 502h10v2h-10z" />

        {/* GAD Office bldg */}
        <path onClick={() => bldClicked("GAD Office")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category[""] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M144 486h9.955v16H144z" />
        <text onClick={() => bldClicked("GAD Office")} style={{ cursor: "pointer" }} x="148.978" y="494" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">GAD</text>
        <text onClick={() => bldClicked("GAD Office")} style={{ cursor: "pointer" }} x="148.978" y="496" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">OFFICE</text>
        <path onClick={() => bldClicked("GAD Office")} style={{ cursor: "pointer" }} fill={allFalse ? '#d6b018' : category[""] ? "#d6b018" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M144 502h9.955v2H144z" />

        {/* COT Room 37 bldg */}
        <path onClick={() => bldClicked("Room 37")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category[""] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M203 397h23v25h-23z" />
        <text onClick={() => bldClicked("Room 37")} style={{ cursor: "pointer" }} x="214.5" y="410.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ROOM 37</text>

        {/* COT Room 36 bldg */}
        <path onClick={() => bldClicked("Room 36")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category[""] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M226 422.999v16.9412h-23V422.999z" />
        <text onClick={() => bldClicked("Room 36")} style={{ cursor: "pointer" }} x="214.5" y="432.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ROOM 36</text>

        {/* COT Room 35 bldg */}
        <path onClick={() => bldClicked("Room 35")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category[""] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M226 441v17h-23v-17z" />
        <text onClick={() => bldClicked("Room 35")} style={{ cursor: "pointer" }} x="214.5" y="450.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ROOM 35</text>

        {/* COT Room 34 bldg */}
        <path onClick={() => bldClicked("Room 34")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category[""] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M226 459v17h-23v-17z" />
        <text onClick={() => bldClicked("Room 34")} style={{ cursor: "pointer" }} x="214.5" y="468.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ROOM 34</text>

        {/* COT Room 26 bldg */}
        <path onClick={() => bldClicked("Room 26")} style={{ cursor: "pointer" }} fill={allFalse ? '#fc0' : category[""] ? "#fc0" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M225.997 477v25.427H203V477z" />
        <text onClick={() => bldClicked("Room 26")} style={{ cursor: "pointer" }} x="214.499" y="490.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ROOM 26</text>
        <path onClick={() => bldClicked("Room 26")} style={{ cursor: "pointer" }} fill={allFalse ? '#d6b018' : category[""] ? "#d6b018" : "#B0B0B0"} stroke={allFalse ? '#CCA817' : category[""] ? "#CCA817" : "#B0B0B0"} stroke-width={0.4} d="M203.003 502.034H226V504h-22.997z" />

        {/* COT Womens CR bldg */}
        <path fill={allFalse ? '#ff69eb' : category["Restroom"] ? "#ff69eb" : "#B0B0B0"} stroke={allFalse ? '#D74DC9' : category["Restroom"] ? "#D74DC9" : "#B0B0B0"} stroke-width={0.4} d="M184 484.161h6v6.68h-6z" />
        <text x="187" y="487.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1" fill="black">WOMEN'S</text>
        <text x="187" y="488.8" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1" fill="black">CR</text>
        <path fill={allFalse ? '#cf56bf' : category["Restroom"] ? "#cf56bf" : "#B0B0B0"} stroke={allFalse ? '#D74DC9' : category["Restroom"] ? "#D74DC9" : "#B0B0B0"} stroke-width={0.4} d="M184 490.841h6v1.361h-6z" />

        {/* COT Mens CR bldg */}
        <path fill={allFalse ? '#73daff' : category["Restroom"] ? "#73daff" : "#B0B0B0"} stroke={allFalse ? '#57A9C7' : category["Restroom"] ? "#57A9C7" : "#B0B0B0"} stroke-width={0.4} d="M191 484.161h6v6.68h-6z" />
        <text x="194" y="487.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1" fill="black">MEN'S</text>
        <text x="194" y="488.8" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1" fill="black">CR</text>
        <path fill={allFalse ? '#3bb2de' : category["Restroom"] ? "#3bb2de" : "#B0B0B0"} stroke={allFalse ? '#57A9C7' : category["Restroom"] ? "#57A9C7" : "#B0B0B0"} stroke-width={0.4} d="M191 490.841h6v1.361h-6z" />

        {/* SAC Womens CR bldg */}
        <path fill={allFalse ? '#ff69eb' : category["Restroom"] ? "#ff69eb" : "#B0B0B0"} stroke={allFalse ? '#D74DC9' : category["Restroom"] ? "#D74DC9" : "#B0B0B0"} stroke-width={0.4} d="M294 418h14v11h-14z" />
        <text x="301" y="423.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.9" fill="black">WOMEN'S</text>
        <text x="301" y="425.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.9" fill="black">CR</text>

        {/* SAC Mens CR bldg */}
        <path fill={allFalse ? '#73daff' : category["Restroom"] ? "#73daff" : "#B0B0B0"} stroke={allFalse ? '#57A9C7' : category["Restroom"] ? "#57A9C7" : "#B0B0B0"} stroke-width={0.4} d="M309 418h14v11h-14z" />
        <text x="316" y="423.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.9" fill="black">MEN'S</text>
        <text x="316" y="425.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.9" fill="black">CR</text>

        {/* SAC bldg */}
        <path onClick={() => bldClicked("SAC")} style={{ cursor: "pointer" }} fill={allFalse ? '#00ffae' : category["Sports"] ? "#00ffae" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M294 430h29v77.135h-29z" />
        <text onClick={() => bldClicked("SAC")} style={{ cursor: "pointer" }} x="308.5" y="466.768" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black">STUDENT</text>
        <text onClick={() => bldClicked("SAC")} style={{ cursor: "pointer" }} x="308.5" y="469.568" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black">ACTIVITY</text>
        <text onClick={() => bldClicked("SAC")} style={{ cursor: "pointer" }} x="308.5" y="472.368" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black">CENTER</text>
        <path fill={allFalse ? '#01db96' : category["Sports"] ? "#01db96" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M294 506.926h29V510h-29z" />

        {/* ???? bldg */}
        <path fill={allFalse ? '#00ffae' : category["Sports"] ? "#00ffae" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M356 431v21h-23v-21z" />
        <text x="344.5" y="442.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">????</text>

        {/* Office of the Electrical Maintenance bldg */}
        <path onClick={() => bldClicked("Office of the Electrical Maintenance")} style={{ cursor: "pointer" }} fill={allFalse ? '#f7ff5f' : category[""] ? "#f7ff5f" : "#B0B0B0"} stroke={allFalse ? '#CBD14E' : category[""] ? "#CBD14E" : "#B0B0B0"} stroke-width={0.4} d="M356 453v21h-23v-21z" />
        <text onClick={() => bldClicked("Office of the Electrical Maintenance")} style={{ cursor: "pointer" }} x="344.5" y="462.4" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">OFFICE OF THE</text>
        <text onClick={() => bldClicked("Office of the Electrical Maintenance")} style={{ cursor: "pointer" }} x="344.5" y="464.4" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ELECTRICAL</text>
        <text onClick={() => bldClicked("Office of the Electrical Maintenance")} style={{ cursor: "pointer" }} x="344.5" y="466.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">MAINTENANCE</text>

        {/* Kitchen Laboratory bldg */}
        <path onClick={() => bldClicked("Kitchen Laboratory")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category["Laboratory"] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="m355.997 475 .003 32.451h-22.997L333 475z" />
        <text onClick={() => bldClicked("Kitchen Laboratory")} style={{ cursor: "pointer" }} x="344.5" y="491.8" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">KITCHEN</text>
        <text onClick={() => bldClicked("Kitchen Laboratory")} style={{ cursor: "pointer" }} x="344.5" y="494.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">LABORATORY</text>
        <path fill={allFalse ? '#ce6700' : category["Laboratory"] ? "#ce6700" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category["Laboratory"] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M333.003 507.451H356V510h-22.997z" />

        {/* Carpentry Shop bldg */}
        <path onClick={() => bldClicked("Carpentry Shop")} style={{ cursor: "pointer" }} fill={allFalse ? '#f7ff5f' : category[""] ? "#f7ff5f" : "#B0B0B0"} stroke={allFalse ? '#CBD14E' : category[""] ? "#CBD14E" : "#B0B0B0"} stroke-width={0.4} d="m445.004 467.866-10.419 30.553-21.67-7.389 10.419-30.554z" />
        <text onClick={() => bldClicked("Carpentry Shop")} style={{ cursor: "pointer" }} x="429.55" y="479.448" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black" transform="rotate(18.83, 428.96, 478.448)">CARPENTRY</text>
        <text onClick={() => bldClicked("Carpentry Shop")} style={{ cursor: "pointer" }} x="428.65" y="481.8" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black" transform="rotate(18.83, 428.96, 480.448)">SHOP</text>
        <path fill={allFalse ? '#D1D851' : category[""] ? "#D1D851" : "#B0B0B0"} stroke={allFalse ? '#CBD14E' : category[""] ? "#CBD14E" : "#B0B0B0"} stroke-width={0.4} d="m413.079 490.558 21.67 7.39-.805 2.362-21.671-7.389z" />

        {/* Tennis Court bldg */}
        <path onClick={() => bldClicked("Tennis Court")} style={{ cursor: "pointer" }} fill={allFalse ? '#00ffae' : category["Sports"] ? "#00ffae" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M326.039 387.31h70.959v32.582h-70.959z" />
        <text onClick={() => bldClicked("Tennis Court")} style={{ cursor: "pointer" }} x="361.519" y="404.601" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black">TENNIS COURT</text>
        <path fill={allFalse ? '#01db96' : category["Sports"] ? "#01db96" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M326.039 419.799h70.959V422h-70.959z" />

        {/* Electrical Shop Womens CR / Tennis Court Womens CR bldg */}
        <path fill={allFalse ? '#ff69eb' : category["Restroom"] ? "#ff69eb" : "#B0B0B0"} stroke={allFalse ? '#D74DC9' : category["Restroom"] ? "#D74DC9" : "#B0B0B0"} stroke-width={0.4} d="M360 431h7v9.977h-7z" />
        <text x="363.5" y="435.7" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1" fill="black">WOMEN'S</text>
        <text x="363.5" y="437.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1" fill="black">CR</text>
        <path fill={allFalse ? '#cf56bf' : category["Restroom"] ? "#cf56bf" : "#B0B0B0"} stroke={allFalse ? '#D74DC9' : category["Restroom"] ? "#D74DC9" : "#B0B0B0"} stroke-width={0.4} d="M360 440.721h7V442h-7z" />

        {/*  Electrical Shop Mens CR / Tennis Court Men's CR bldg */}
        <path fill={allFalse ? '#73daff' : category["Restroom"] ? "#73daff" : "#B0B0B0"} stroke={allFalse ? '#57A9C7' : category["Restroom"] ? "#57A9C7" : "#B0B0B0"} stroke-width={0.4} d="M368 431h7v9.977h-7z" />
        <text x="371.5" y="435.7" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1" fill="black">MEN'S</text>
        <text x="371.5" y="437.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1" fill="black">CR</text>
        <path fill={allFalse ? '#3bb2de' : category["Restroom"] ? "#3bb2de" : "#B0B0B0"} stroke={allFalse ? '#57A9C7' : category["Restroom"] ? "#57A9C7" : "#B0B0B0"} stroke-width={0.4} d="M368 440.721h7V442h-7z" />

        {/* Kadasig Gym bldg */}
        <path onClick={() => bldClicked("Kadasig Gym")} style={{ cursor: "pointer" }} fill={allFalse ? '#00ffae' : category["Sports"] ? "#00ffae" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="m345.381 276.557 61.438 22.362-11.264 30.946-61.438-22.362z" />
        <text onClick={() => bldClicked("Kadasig Gym")} style={{ cursor: "pointer" }} x="370.468" y="304.211" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black" transform="rotate(19, 370.468, 303.211)">KADASIG GYM</text>
        <path fill={allFalse ? '#01db96' : category["Sports"] ? "#01db96" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="m334.104 307.538 61.439 22.362-.761 2.09-61.438-22.362z" />

        {/* Canteen Womens CR bldg */}
        <path fill={allFalse ? '#ff69eb' : category["Restroom"] ? "#ff69eb" : "#B0B0B0"} stroke={allFalse ? '#D74DC9' : category["Restroom"] ? "#D74DC9" : "#B0B0B0"} stroke-width={0.4} d="M115 407h7v6.646h-7z" />
        <text x="118.5" y="410.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1" fill="black">WOMEN'S</text>
        <text x="118.5" y="411.45" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1" fill="black">CR</text>
        <path fill={allFalse ? '#cf56bf' : category["Restroom"] ? "#cf56bf" : "#B0B0B0"} stroke={allFalse ? '#D74DC9' : category["Restroom"] ? "#D74DC9" : "#B0B0B0"} stroke-width={0.4} d="M115 413.646h7v1.353h-7z" />

        {/* Canteen Mens CR bldg */}
        <path fill={allFalse ? '#73daff' : category["Restroom"] ? "#73daff" : "#B0B0B0"} stroke={allFalse ? '#57A9C7' : category["Restroom"] ? "#57A9C7" : "#B0B0B0"} stroke-width={0.4} d="M123 407h7v6.646h-7z" />
        <text x="126.5" y="410.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1" fill="black">MEN'S</text>
        <text x="126.5" y="411.45" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1" fill="black">CR</text>
        <path fill={allFalse ? '#3bb2de' : category["Restroom"] ? "#3bb2de" : "#B0B0B0"} stroke={allFalse ? '#57A9C7' : category["Restroom"] ? "#57A9C7" : "#B0B0B0"} stroke-width={0.4} d="M123 413.646h7V415h-7z" />

        {/* Sanitation Staff Office bldg */}
        <path onClick={() => bldClicked("Sanitation Staff Office")} style={{ cursor: "pointer" }} fill={allFalse ? '#f7ff5f' : category[""] ? "#f7ff5f" : "#B0B0B0"} stroke={allFalse ? '#CBD14E' : category[""] ? "#CBD14E" : "#B0B0B0"} stroke-width={0.4} d="M185 397h11v12.019h-11z" />
        <text onClick={() => bldClicked("Sanitation Staff Office")} style={{ cursor: "pointer" }} x="190.5" y="402.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.35" fill="black">SANITATION</text>
        <text onClick={() => bldClicked("Sanitation Staff Office")} style={{ cursor: "pointer" }} x="190.5" y="403.7" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.35" fill="black">STAFF</text>
        <text onClick={() => bldClicked("Sanitation Staff Office")} style={{ cursor: "pointer" }} x="190.5" y="405.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.35" fill="black">OFFICE</text>
        <path fill={allFalse ? '#D1D851' : category[""] ? "#D1D851" : "#B0B0B0"} stroke={allFalse ? '#CBD14E' : category[""] ? "#CBD14E" : "#B0B0B0"} stroke-width={0.4} d="M185 409.019h11V411h-11z" />

        {/* Faculty CR near Tennis Court bldg */}
        <path fill={allFalse ? '#f7ff5f' : category[""] ? "#f7ff5f" : "#B0B0B0"} stroke={allFalse ? '#CBD14E' : category[""] ? "#CBD14E" : "#B0B0B0"} stroke-width={0.4} d="M357 447.411h13v10.871h-13z" />
        <text x="363.5" y="452.797" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">FACULTY</text>
        <text x="363.5" y="454.697" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.8" fill="black">CR</text>
        <path fill={allFalse ? '#D1D851' : category[""] ? "#D1D851" : "#B0B0B0"} stroke={allFalse ? '#CBD14E' : category[""] ? "#CBD14E" : "#B0B0B0"} stroke-width={0.4} d="M357 458.282h13v1.792h-13z" />

        {/* Fitness gym bldg */}
        <path onClick={() => bldClicked("Fitness Gym")} style={{ cursor: "pointer"}}  fill={allFalse ? '#00ffae' : category["Sports"] ? "#00ffae" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M274 397v24h-43v-24z" />
        <text onClick={() => bldClicked("Fitness Gym")} style={{ cursor: "pointer"}}  x="252.5" y="410" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">FITNESS GYM</text>

        {/* Electrical Shop bldg */}
        <path onClick={() => bldClicked("Electrical Shop")} style={{ cursor: "pointer" }} fill={allFalse ? '#f7ff5f' : category[""] ? "#f7ff5f" : "#B0B0B0"} stroke={allFalse ? '#CBD14E' : category[""] ? "#CBD14E" : "#B0B0B0"} stroke-width={0.4} d="M400 425v21.432h-24V425z" />
        <text onClick={() => bldClicked("Electrical Shop")} style={{ cursor: "pointer" }} x="388" y="435.666" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ELECTRICAL</text>
        <text onClick={() => bldClicked("Electrical Shop")} style={{ cursor: "pointer" }} x="388" y="437.866" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">SHOP</text>
        <path fill={allFalse ? '#D1D851' : category[""] ? "#D1D851" : "#B0B0B0"} stroke={allFalse ? '#CBD14E' : category[""] ? "#CBD14E" : "#B0B0B0"} stroke-width={0.4} d="M376 446.432h24V448h-24z" />

        {/* Mechanical Engineering Laboratory 1 bldg */}
        <path fill={allFalse ? '#ff3030' : category["Laboratory"] ? "#ff3030" : "#B0B0B0"} stroke={allFalse ? '#C32525' : category["Laboratory"] ? "#C32525" : "#B0B0B0"} stroke-width={0.4} d="M274 422v25h-43v-25z" />
        <text x="252.5" y="432.7" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black">MECHANICAL</text>
        <text x="252.5" y="435.6" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black">ENGINEERING</text>
        <text x="252.5" y="438.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black">LABORATORY 1</text>

        {/* Maintenance Office bldg */}
        <path onClick={() => bldClicked("Maintenance Office")} style={{ cursor: "pointer" }} fill={allFalse ? '#f7ff5f' : category[""] ? "#f7ff5f" : "#B0B0B0"} stroke={allFalse ? '#CBD14E' : category[""] ? "#CBD14E" : "#B0B0B0"} stroke-width={0.4} d="M239 448v22h-8v-22z" />
        <text onClick={() => bldClicked("Maintenance Office")} style={{ cursor: "pointer" }} x="234.2" y="458.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black" transform="rotate(-90, 235, 458.5)">MAINTENANCE</text>
        <text onClick={() => bldClicked("Maintenance Office")} style={{ cursor: "pointer" }} x="235" y="460.9" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black" transform="rotate(-90, 235, 459.5)">OFFICE</text>

        {/* Mechanical Engineering Lab 2 bldg */}
        <path fill={allFalse ? '#ff3030' : category["Laboratory"] ? "#ff3030" : "#B0B0B0"} stroke={allFalse ? '#C32525' : category["Laboratory"] ? "#C32525" : "#B0B0B0"} stroke-width={0.4} d="M274 448v22h-34v-22z" />
        <text x="257" y="457.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black">MECHANICAL</text>
        <text x="257" y="460.1" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black">ENGINEERING</text>
        <text x="257" y="463.1" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black">LABORATORY 2</text>

        {/* Woodcarving Area bldg */}
        <path onClick={() => bldClicked("Woodcarving Area")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category[""] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category[""] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M245 471v15h-14v-15z" />
        <text onClick={() => bldClicked("Woodcarving Area")} style={{ cursor: "pointer" }} x="238" y="478.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">WOODCARVING</text>
        <text onClick={() => bldClicked("Woodcarving Area")} style={{ cursor: "pointer" }} x="238" y="480.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">AREA</text>


        {/* Fablab Office bldg */}
        <path onClick={() => bldClicked("Fablab Office")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category[""] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category[""] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M274 478v17h-16v-17z" />
        <text onClick={() => bldClicked("Fablab Office")} style={{ cursor: "pointer" }} x="266" y="486.1" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">FABLAB</text>
        <text onClick={() => bldClicked("Fablab Office")} style={{ cursor: "pointer" }} x="266" y="488.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">OFFICE</text>


        {/* Fablab Production Area */}
        <path onClick={() => bldClicked("Fablab Production Area")} style={{ cursor: "pointer" }} fill={allFalse ? '#ff8000' : category[""] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category[""] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M231 487h15v-16h28v6h-17v19h17v12.082h-43z" />
        <text onClick={() => bldClicked("Fablab Production Area")} style={{ cursor: "pointer" }} x="252.5" y="501.341" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">FABLAB PRODUCTION</text>
        <text onClick={() => bldClicked("Fablab Production Area")} style={{ cursor: "pointer" }} x="252.5" y="504" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">AREA</text>
        <path fill={allFalse ? '#ff8000' : category[""] ? "#ff8000" : "#B0B0B0"} stroke={allFalse ? '#D76C00' : category[""] ? "#D76C00" : "#B0B0B0"} stroke-width={0.4} d="M231 508.082h43V510h-43z" />

        {/* Oval bldg */}
        <path onClick={() => bldClicked("Oval")} style={{ cursor: "pointer" }} fill={allFalse ? '#f55456' : category["Sports"] ? "#f55456" : "#B0B0B0"} stroke={allFalse ? '#DD4D50' : category[""] ? "#DD4D50" : "#B0B0B0"} stroke-width={0.4} d="m266.337 81.0004 26.655 25.4656L110.655 274.62 84 249.155z" />
        <path onClick={() => bldClicked("Oval")} style={{ cursor: "pointer" }} fill={allFalse ? '#f55456' : category["Sports"] ? "#f55456" : "#B0B0B0"} d="M112.914 326.486c-29.7551-28.367-29.4148-73.996.76-101.916l112.718-104.295c30.175-27.9191 78.758-27.5566 108.513.81 29.754 28.367 29.414 73.996-.76 101.916L221.426 327.296c-30.175 27.919-78.757 27.557-108.512-.81" />
        <path onClick={() => bldClicked("Oval")} style={{ cursor: "pointer" }} fill={allFalse ? '#51ff7d' : category["Sports"] ? "#51ff7d" : "#B0B0B0"} d="M125.471 315.626c-22.941-21.872-22.679-57.053.586-78.579l112.5-104.093c23.266-21.526 60.724-21.247 83.665.625 22.942 21.871 22.68 57.052-.586 78.579l-112.5 104.092c-23.265 21.527-60.723 21.247-83.665-.624" />
        <text onClick={() => bldClicked("Oval")} style={{ cursor: "pointer" }} x="258.554" y="244" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="5" fill="black" transform="rotate(-43, 223.554, 276.337)">OVAL</text>

        {/* Sports & Athletics Office bldg */}
        <path onClick={() => bldClicked("Sports & Athletics Office")} style={{ cursor: "pointer" }} fill={allFalse ? '#00ffae' : category["Sports"] ? "#00ffae" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M287 315v17h-20v-17z" />
        <text onClick={() => bldClicked("Sports & Athletics Office")} style={{ cursor: "pointer" }} x="277" y="322" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">SPORTS &</text>
        <text onClick={() => bldClicked("Sports & Athletics Office")} style={{ cursor: "pointer" }} x="277" y="324.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ATHLETICS</text>
        <text onClick={() => bldClicked("Sports & Athletics Office")} style={{ cursor: "pointer" }} x="277" y="327" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">OFFICE</text>

        {/* Socio-Cultural Office bldg */}
        <path onClick={() => bldClicked("Socio-Cultural Office")} style={{ cursor: "pointer" }} fill={allFalse ? '#00ffae' : category["Sports"] ? "#00ffae" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M287 333v16.01h-20V333z" />
        <text onClick={() => bldClicked("Socio-Cultural Office")} style={{ cursor: "pointer" }} x="277" y="339.305" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">SOCIO-</text>
        <text onClick={() => bldClicked("Socio-Cultural Office")} style={{ cursor: "pointer" }} x="277" y="341.705" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">CULTURAL</text>
        <text onClick={() => bldClicked("Socio-Cultural Office")} style={{ cursor: "pointer" }} x="277" y="344.205" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">OFFICE</text>
        <path fill={allFalse ? '#01db96' : category["Sports"] ? "#01db96" : "#B0B0B0"} stroke={allFalse ? '#01CC8C' : category["Sports"] ? "#01CC8C" : "#B0B0B0"} stroke-width={0.4} d="M267 349h20v2h-20z" />

        {/* ERRC Storage bldg  */}
        <path onClick={() => bldClicked("ERRC Storage")} style={{ cursor: "pointer" }} fill={allFalse ? '#8649ff' : category[""] ? "#8649ff" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category[""] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M36 748h18v5.906H36z" />
        <text onClick={() => bldClicked("ERRC Storage")} style={{ cursor: "pointer" }} x="45" y="751.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">STORAGE</text>
        <path fill={allFalse ? '#6f3dd2' : category[""] ? "#6f3dd2" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category[""] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M36 753.687h18V755H36z" />

        {/* ERRC Conference Room bldg  */}
        <path onClick={() => bldClicked("ERRC Conference Room")} style={{ cursor: "pointer" }} fill={allFalse ? '#8649ff' : category[""] ? "#8649ff" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category[""] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M36 701h18v5.906H36z" />
        <text onClick={() => bldClicked("ERRC Conference Room")} style={{ cursor: "pointer" }} x="45" y="703.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">CONFERENCE</text>
        <text onClick={() => bldClicked("ERRC Conference Room")} style={{ cursor: "pointer" }} x="45" y="705.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">ROOM</text>
        <path fill={allFalse ? '#6f3dd2' : category[""] ? "#6f3dd2" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category[""] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M36 706.687h18V708H36z" />

        {/* ERRC Room 1 bldg  */}
        <path onClick={() => bldClicked("ERRC Room 1")} style={{ cursor: "pointer" }} fill={allFalse ? '#8649ff' : category[""] ? "#8649ff" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category[""] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M12 742h23v10.969H12z" />
        <text onClick={() => bldClicked("ERRC Room 1")} style={{ cursor: "pointer" }} x="23.5" y="748.3" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ROOM 1</text>
        <path fill={allFalse ? '#6f3dd2' : category[""] ? "#6f3dd2" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category[""] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M12 752.969h23V755H12z" />

        {/* ERRC Office bldg  */}
        <path onClick={() => bldClicked("ERRC Office")} style={{ cursor: "pointer" }} fill={allFalse ? '#8649ff' : category[""] ? "#8649ff" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category[""] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M35 701v26H12v-26z" />
        <text onClick={() => bldClicked("ERRC Office")} style={{ cursor: "pointer" }} x="23.5" y="715.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">OFFICE</text>

        {/* ERRC Room 2 bldg  */}
        <path onClick={() => bldClicked("ERRC Room 2")} style={{ cursor: "pointer" }} fill={allFalse ? '#8649ff' : category[""] ? "#8649ff" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category[""] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M35 728v13H12v-13z" />
        <text onClick={() => bldClicked("ERRC Room 2")} style={{ cursor: "pointer" }} x="23.5" y="735.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">ROOM 2</text>


        {/* ERRC Fountain */}
        <circle cx="64" cy="728" r="7" fill={allFalse ? '#5aeeff' : category[""] ? "#5aeeff" : "#B0B0B0"} />

        {/* Centrum Pool */}
        <ellipse cx="427" cy="701" fill={allFalse ? '#19e0ff' : category[""] ? "#19e0ff" : "#B0B0B0"} rx="19" ry="10" />

        <path stroke="#818181" stroke-linecap="round" stroke-width="13" d="M295.184 799v-86.139c0-24.08 2.113-48.115 6.314-71.827l9.899-55.872c2.393-13.502 7.283-26.439 14.421-38.149 5.909-7.282 13.312-13.215 21.708-17.398l35.874-17.871M233 87.0965l13.957-11.7382c7.466-6.2791 17.748-11.5375 27.055-14.4658 6.093-1.9168 12.443-2.8921 18.831-2.8921 7.946 0 21.308 3.6937 28.691 6.6323 6.04 2.4042 11.813 5.4314 17.225 9.0325 5.776 3.8439 17.025 12.0285 22.078 16.7823 11.332 10.6605 20.555 23.3575 27.188 37.4275 3.65 7.742 8.575 19.93 10.834 28.186l6.358 23.228 9.753 40.996c6.135 28.427 9.229 57.426 9.229 86.507v33.997l-3.862 31.32M383.4 511.744l-20.534 56.192m20.534-56.192c1.13-1.152 2.622-3.287 4.297-5.995 12.836-20.746 20.724-44.373 22.807-68.68l4.466-38.087 5.367-26.873m-57.471 195.827-9.229 29.423-12.568 32.104c-8.379 20.817-11.476 43.383-9.016 65.687l5.089 46.121m25.724-173.335c10.265-1.461 26.584-6.992 34.168-14.058 1.253-1.356 3.725-3.784 6.436-6.23 5.85-5.276 13.444-9.789 21.321-9.789 4.408 0 8.198 3.121 9.039 7.445.533 2.734-.203 5.562-1.999 7.691l-12.054 13.908c-3.195 3.511-5.997 7.361-8.356 11.48-3.844 6.712-6.461 14.055-7.73 21.684l-4.889 29.396-2.029 34.981-3.547 35.656c-.921 9.267-5.138 17.896-11.884 24.319-2.358 2.246-8.139 5.95-10.981 7.541-7.29 4.079-24.947 8.141-33.219 9.311m-39.34.784 39.34-.784m83.195-369.162-69.812-33.885c-7.422-3.993-28.743-19.037-31.537-26.985-1.087-3.093-8.257-13.767-10.185-16.42l-9.852-11.957" /> 
        <path stroke="#535353" stroke-dasharray="15 15" stroke-width="2" d="M263.409 1.40222 24.0934 220.108v22.677l24.3598 18.251 16.8772 53.445 12.6252 90.665-53.8622 80.789-6.5818 112.449 37.2215 42.193v55.472H1.41932l.00011 113.693H359.308l59.005-6.542 58.35-9.55v-52.398l5.299-160.661 20.017-9.55v-47.688l-31.465-69.668 15.242-267.157-62.995-20.017 8.635-92.563 22.895 8.5694-31.53-72.4803-70.584-.0001z" />

        {/* COE Computer Laboratory 2 path */}
        <path opacity={path === "Computer Laboratory 2" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.158v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2v-116.11c0-.806.653-1.46 1.459-1.46" />

        {/* COE Electrical Laboratory path */}
        <path opacity={path === "Electronic Laboratory" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.158v-.814c0-1.104.896-1.999 2-1.999h40.971c1.104 0 2-.896 2-2V588.236c0-.807.654-1.462 1.461-1.463" />

        {/* COE Room 1 path */}
        <path opacity={path === "COE Room 1" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.158v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.896 2-2v-151.11c0-.806.654-1.461 1.461-1.461" />

        {/* COE Room 2 path */}
        <path opacity={path === "COE Room 2" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.165v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.896 2-2v-168.11c0-.807.654-1.462 1.461-1.463" />

        {/* CME CR path */}
        <path opacity={path === "CME CR" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-1.999 2-1.999h40.971c1.104 0 2-.896 2-2V544.279c0-1.104.895-2 2-2H260" />

        {/* Study area path */}
        <path opacity={path === "Study area" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H232.5c-.828 0-1.5-.672-1.5-1.5" />

        {/* FABLAB Production Area path */}
        <path opacity={path === "FABLAB Production Area" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105.895-2 2-2H258c1.105 0 2-.896 2-2v-2" />

        {/* Woodcarving Area path */}
        <path opacity={path === "Woodcarving Area" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105-.895-2-2-2h-3c-1.105 0-2-.895-2-2v-32.233c0-.276.224-.5.5-.5" />

        {/* Maintenance Office path */}
        <path opacity={path === "Maintenance Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.104 0-2-.896-2-2v-19.502c0-1.104-.895-2-2-2h-3c-1.104 0-2-.895-2-2v-49.485c0-.276.224-.5.5-.5" />

        {/* COT Room 26 path */}
        <path opacity={path === "COT Room 26" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105-.895-2-2-2l-17-.001c-1.105 0-2-.895-2-2v-8.006" />

        {/* Automation Laboratory path */}
        <path opacity={path === "Automation Laboratory" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105-.895-2-2-2h-70c-1.105 0-2-.896-2-2v-8.017" />

        {/* GAD Office path */}
        <path opacity={path === "GAD Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105-.895-2-2-2h-70c-1.105 0-2-.896-2-2v-5.009c0-1.104-.895-2-2-2H150c-.552 0-1-.447-1-1" />

        {/* NSTP Office path */}
        <path opacity={path === "NSTP Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105-.895-2-2-2h-70c-1.105 0-2-.896-2-2v-5.009c0-1.104-.895-2-2-2H139c-.552 0-1-.447-1-.999" />

        {/* COT Computer Laboratory path */}
        <path opacity={path === "COT Computer Laboratory 1" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105-.895-2-2-2h-70c-1.105 0-2-.896-2-2v-5.009c0-1.104-.895-2-2-2h-38.499c-.553 0-1.001-.447-1.001-1" />

        {/* COT Room 41 path */}
        <path opacity={path === "COT Room 41" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105-.895-2-2-2h-41c-1.105 0-2-.896-2-2v-5.017c0-1.104-.895-2-2-2h-6c-1.105 0-2-.895-2-2v-33.992c0-.276-.224-.5-.5-.5" />

        {/* COT Room 40 path */}
        <path opacity={path === "COT Room 40" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.104-.895-2-2-2h-41c-1.105 0-2-.895-2-2v-5.017c0-1.104-.895-2-2-2l-6 .001c-1.105 0-2-.896-2-2v-54.493c0-.276-.224-.5-.5-.5" />

        {/* COT Room 39 path  */}
        <path opacity={path === "COT Room 39" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105-.895-2-2-2h-41c-1.105 0-2-.896-2-2v-5.017c0-1.104-.895-2-2-2h-6c-1.105 0-2-.895-2-2v-72.495c0-.276-.224-.5-.5-.5" />

        {/* COT Room 38 path */}
        <path opacity={path === "COT Room 38" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.104-.895-2-2-2h-41c-1.105 0-2-.895-2-2v-5.017c0-1.104-.895-2-2-2l-6 .001c-1.105 0-2-.896-2-2v-91.493c0-.276-.224-.5-.5-.5" />

        {/* COT Room 34 path */}
        <path opacity={path === "COT Room 34" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105-.895-2-2-2l-17-.001c-1.105 0-2-.895-2-2v-5.006c0-1.105-.895-2-2-2H203c-1.105 0-2-.896-2-2v-34.005c0-.276.224-.5.5-.5" />

        {/* COT Room 35 path */}
        <path opacity={path === "COT Room 35" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105-.895-2-2-2h-17c-1.105-.001-2-.896-2-2v-5.007c0-1.105-.895-2-2-2H203c-1.105 0-2-.895-2-2v-54.508c0-.276.224-.5.5-.5" />

        {/* COT Room 36 path */}
        <path opacity={path === "COT Room 36" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105-.895-2-2-2h-17c-1.105-.001-2-.896-2-2v-5.007c0-1.105-.895-2-2-2H203c-1.105 0-2-.895-2-2V432.26c0-.276.224-.5.5-.5" />

        {/* COT Room 37 path */}
        <path opacity={path === "COT Room 37" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.104-.895-2-2-2h-17c-1.105 0-2-.896-2-2v-5.007c0-1.105-.895-2-2-2H203c-1.105 0-2-.895-2-2v-91.51c0-.276.224-.5.5-.5" />

        {/* Sanitation Staff Office path */}
        <path opacity={path === "Sanitation Staff Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.104-.895-2-2-2h-17c-1.105 0-2-.896-2-2v-5.007c0-1.105-.895-2-2-2H203c-1.105 0-2-.895-2-2v-96.978c0-1.105-.895-2-2-2h-1" />

        {/* Floating Room path */}
        <path opacity={path === "Floating Room" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.104 0-2-.896-2-2v-19.502c0-1.104-.895-2-2-2h-17c-1.105 0-2-.896-2-2v-5.007c0-1.105-.895-2-2-2H203c-1.104 0-2-.895-2-2V372.791" />

        {/* SAC path */}
        <path opacity={path === "Floating Room" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105.895-2 2-2H307c1.105 0 2-.895 2-2v-2.003" />

        {/* Carpentry Shop path */}
        <path opacity={path === "Carpentry Shop" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105.895-2 2-2h131.281c.465 0 .915-.162 1.273-.458l38.892-32.09c.358-.296.808-.457 1.273-.457h3.281" />

        {/* Kitchen Lab path */}
        <path opacity={path === "Kitchen Lab" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105.895-2 2-2H318c1.105 0 2-.898 2-2.002 0-1.105.895-2.002 2-2.002h2c1.105 0 2-.895 2-2v-4c0-1.105.895-2 2-2h3" />

        {/* Electrical Maintenance Office path */}
        <path opacity={path === "Electrical Maintenance Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105.895-2 2-2H318c1.105 0 2-.898 2-2.002 0-1.105.895-2.002 2-2.002h2c1.105 0 2-.896 2-2v-38c0-1.105.895-2 2-2h3" />

        {/* ????? path */}
        <path opacity={path === "?????" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105.895-2 2-2H318c1.105 0 2-.898 2-2.002 0-1.105.895-2.002 2-2.002h2c1.105 0 2-.895 2-2v-60.999c0-1.105.895-2 1.999-2l3.001-.001" />

        {/* Electrical Shop path */}
        <path opacity={path === "Electrical Shop" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105.895-2 2-2H318c1.105 0 2-.897 2-2.002s.895-2.002 2-2.002h2c1.105 0 2-.895 2-2v-81.501c0-1.105.895-2 2-2h43" />

        {/* Men's Dorm path */}
        <path opacity={path === "Men's Dorm" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105.895-2 2-2H318c1.105 0 2-.897 2-2.002s.895-2.002 2-2.002h2c1.105 0 2-.895 2-2v-81.501c0-1.105.895-2 2-2h28c1.105 0 2 .895 2 2v14.52c0 1.104.895 2 2 2h11c1.105 0 2 .895 2 2v14" />

        {/* ME Lab 2 path */}
        <path opacity={path === "ME Lab 2" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.814c0-1.104.896-1.999 2-1.999h40.971c1.104 0 2-.896 2-2V541.277c0-1.104-.896-2-2-2H237.5c-1.105 0-2-.895-2-2v-19.501c0-1.105.895-2 2-2H275c1.105 0 2-.896 2-2v-53c0-.552-.448-1-1-1" />

        {/* ME Lab 1 path */}
        <path opacity={path === "ME Lab 1" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105.895-2 2-2H275c1.105 0 2-.895 2-2v-76.999c0-.553-.448-1-1-1" />

        {/* Fitness Gym path */}
        <path opacity={path === "Fitness Gym" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.895-2-2v-19.502c0-1.104.895-2 2-2H275c1.105 0 2-.895 2-2V406.777c0-.553-.448-1-1-1" />

        {/* Socio-Cultural Office path */}
        <path opacity={path === "Socio-Cultural Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.278c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105.895-2 2-2H275c1.104 0 2-.896 2-2v-106c0-1.104.895-2 2-2h10c1.105 0 2-.895 2-2v-57.003c0-1.104-.896-1.999-2-1.999" />

        {/* Sports & Athletics Office path */}
        <path opacity={path === "Sports & Athletics Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.163v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.277c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105.895-2 2-2H275c1.104 0 2-.895 2-2v-106c0-1.104.895-2 2-2h10c1.105 0 2-.895 2-2v-83.003c0-1.104-.895-1.999-2-2" />

        {/* Kadasig Gym path */}
        <path opacity={path === "Kadasig Gym" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.163v-.813c0-1.105.896-2 2-2h40.971c1.104 0 2-.895 2-2V541.277c0-1.105-.896-2-2-2H237.5c-1.105 0-2-.896-2-2v-19.502c0-1.105.895-2 2-2H275c1.105 0 2-.896 2-2v-106c0-1.104.895-2 2-2h10.798c.74 0 1.419-.408 1.766-1.061l28.702-54.001c.154-.289.234-.611.234-.938v-45.001c0-1.105.895-2 2-2l9.5-.001" />

        {/* Tennis Court path */}
        <path opacity={path === "Tennis Court" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.165v-.814c0-1.104.896-1.999 2-1.999h40.971c1.104 0 2-.896 2-2V541.278c0-1.104-.896-2-2-2H237.5c-1.105 0-2-.895-2-2v-19.502c0-1.104.895-2 2-2H275c1.105 0 2-.895 2-2V407.777c0-1.105.895-2 2-2h16.383c.402 0 .795-.121 1.127-.348l20.98-14.306c.332-.226.725-.347 1.127-.347H324" />

        {/* Ergonomic Lab path */}
        <path opacity={path === "Ergonomic Lab" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-2 2-2h40.971c1.104 0 2-.895 2-2V539.777c0-1.105-.896-2-2-2H202.5c-1.105 0-2 .896-2 2v6.001c0 1.104.895 2 2 2h.5" />

        {/* BISTRO path */}
        <path opacity={path === "BISTRO" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.568 727.164v-.813c0-1.104.896-1.999 2-1.999h40.971c1.104 0 2-.896 2-2V539.777c0-1.105-.896-2-2-2H202.5c-1.105 0-2 .896-2 2v21.001c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2" />

        {/* COE Computer Laboratoy 1 Path*/}
        <path opacity={path === "Computer Laboratory 1" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.501 727.275-.001-.998c-.001-1.106.895-2.002 2-2.002h41.039c1.105 0 2-.896 2-2v-91.04c0-.806.654-1.46 1.461-1.46" />

        {/* PATH TO CIVIL ENGINEERING LABBBB */}
        <path opacity={path === "Engineering Laboratory" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.503 727.274-.001-.998c-.001-1.105.895-2.002 2-2.002h40.999c1.104 0 2-.895 2-2v-48.003c0-.827.671-1.498 1.499-1.497" />

        {/* EDTECH Lab 1 path */}
        <path opacity={path === "EDTECH Lab 1" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.503 727.275-.001-.998c-.001-1.105.895-2.002 2-2.002h40.999c1.104 0 2-.895 2-2v-65.002c0-1.105-.896-2-2-2H202.5c-1.105 0-2-.896-2-2v-6.502c0-1.105.895-2 2-2h.5" />

        {/* EDTECH Lab 2 path */}
        <path opacity={path === "EDTECH Lab 2" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.503 727.276-.001-.999c-.001-1.105.895-2.002 2-2.002h40.999c1.104 0 2-.895 2-2v-65.002c0-1.105-.896-2-2-2H202.5c-1.105 0-2-.895-2-2V622.77c0-1.104.895-2 2-2h.5" />

        {/* General Chemistry Lab path */}
        <path opacity={path === "General Chemistry Lab" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.503 727.276-.001-.998c-.001-1.106.895-2.002 2-2.002h40.999c1.104 0 2-.896 2-2v-65.003c0-1.104-.896-2-2-2H202.5c-1.105 0-2-.895-2-2V598.77c0-1.105.895-2 2-2h.5" />

        {/* Room 12 near BISTRO path */}
        <path opacity={path === "Room 12 near BISTRO" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.503 727.276-.001-.998c-.001-1.106.895-2.002 2-2.002h40.999c1.104 0 2-.896 2-2v-65.003c0-1.104-.896-2-2-2H202.5c-1.105 0-2-.895-2-2v-77.004c0-1.105.895-2 2-2h.5" />

        {/* PATH TO ELECTRICAL ENGINEERING LAB */}
        <path opacity={path === "Electrical Engineering Laboratory" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.273-.001-.998c-.001-1.105.895-2.002 2-2.002H243.5c1.104 0 2-.896 2-2l-.001-31c0-.828.672-1.5 1.5-1.5" />

        {/* COE CR path */}
        <path opacity={path === "COE CR" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.504 727.274-.001-.998c-.002-1.105.894-2.002 2-2.002h40.999c1.104 0 1.999-.895 2-2v-6.501c0-1.105.896-2 2-2H249c1.104 0 2-.895 2-2" />

        {/* cashier path */}
        <path opacity={path === "Cashier" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.276-.001-.998c-.001-1.106.895-2.002 2-2.002h15c.827 0 1.497.67 1.497 1.497" />

        {/* Registrar path */}
        <path opacity={path === "Registrar" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.276-.001-1.002c-.001-1.104-.896-1.998-2-1.998h-30.503c-.827 0-1.498.67-1.498 1.498" />

        {/* ERRC Storage path */}
        <path opacity={path === "ERRC Storage" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.5 735.291v1.207c0 1.105-.895 2-2 2H196c-1.104 0-2 .896-2 2v25.793c0 1.104-.895 2-2 2h-86c-1.105 0-2-.896-2-2v-19.5c0-1.105-.895-2-2-2H39.0002c-.5524 0-1.0002.448-1.0002 1" />

        {/* ERRC Room 1 path */}
        <path opacity={path === "ERRC Room 1" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.5 735.291v1.207c0 1.105-.895 2-2 2H196c-1.104 0-2 .896-2 2v25.793c0 1.104-.895 2-2 2h-86c-1.105 0-2-.896-2-2v-19.5c0-1.105-.895-2-2-2H37" />

        {/* ERRC Room 2 path */}
        <path opacity={path === "ERRC Room 2" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.5 735.29v1.208c0 1.105-.895 2-2 2H196c-1.104 0-2 .895-2 2v25.792c0 1.105-.895 2-2 2h-86c-1.105 0-2-.895-2-2v-26.499c0-1.105-.895-2-2-2H37" />

        {/* ERRC Office path */}
        <path opacity={path === "ERRC Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.5 735.29v1.208c0 1.104-.895 2-2 2H196c-1.104 0-2 .895-2 2v25.792c0 1.105-.895 2-2 2h-86c-1.105 0-2-.895-2-2v-47.999c0-1.105-.895-2-2-2l-65-.001" />

        {/* ERRC Conference Room path */}
        <path opacity={path === "ERRC Conference Room" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="M200.5 735.29v1.208c0 1.104-.895 2-2 2H196c-1.104 0-2 .895-2 2v25.792c0 1.105-.895 2-2 2h-86c-1.105 0-2-.896-2-2v-53.499c0-1.105-.895-2-2-2H39.0002c-.5524 0-1.0002-.448-1.0002-1" />

        {/* MIS path*/}
        <path opacity={path === "MIS Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.276-.001-1.002c-.001-1.104-.896-1.998-2-1.998h-46.503c-.827 0-1.498.671-1.498 1.498" />

        {/* Accounting path */}
        <path opacity={path === "Accounting Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.276-.001-1.002c-.001-1.104-.896-1.998-2-1.998l-59.003.001c-.827 0-1.498.67-1.498 1.498" />

        {/* CEAS CR path */}
        <path opacity={path === "CEAS CR" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.275-.001-1.002c-.001-1.104-.896-1.998-2-1.998l-58.501.001c-1.105 0-2-.896-2-2v-5.502c0-1.104-.895-2-2-2h-2c-1.105 0-2-.895-2-2v-1" />

        {/* to CEAS 2nd floor path */}
        <path opacity={path === "to CEAS 2nd floor" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.275-.001-1.002c-.001-1.104-.896-1.998-2-1.998H140c-1.105 0-2-.895-2-2v-7.484c0-1.105-.895-2-2-2h-10" />

        {/* CEAS Lab 1 path */}
        <path opacity={path === "CEAS Lab 1" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.274-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.896-2-2v-30c0-.829-.672-1.5-1.5-1.5" />

        {/* CEAS Lab 2 path */}
        <path opacity={path === "CEAS Lab 2" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.274-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2v-48.5c0-.829-.672-1.5-1.5-1.5" />

        {/* Centrum path */}
        <path opacity={0} d="M200.084 726.911L200.083 725.912C200.082 724.807 200.977 723.91 202.083 723.91L243.082 723.91C244.186 723.91 245.082 723.015 245.082 721.91L245.082 656.934C245.082 655.83 245.977 654.934 247.082 654.934L291.54 654.934C292.448 654.934 293.242 655.546 293.474 656.424L301.17 685.578C301.41 686.488 302.251 687.107 303.19 687.066L323.515 686.182C324.181 686.153 324.789 685.795 325.136 685.226L336.557 666.496C336.886 665.955 337.453 665.602 338.083 665.545L347.606 664.679C347.918 664.651 348.219 664.55 348.485 664.383L359.684 657.384C359.945 657.221 360.24 657.12 360.546 657.09L415.581 651.636" stroke="#FF0000" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" />

        {/* path to COT Bldg 2nd Floor */}
        <path opacity={path === "to COT Bldg 2nd Floor" ? "1" : 0} d="M200.149 726.8L200.149 725.987C200.149 724.882 201.045 723.987 202.149 723.987L243.12 723.987C244.224 723.987 245.12 723.092 245.12 721.987L245.12 540.914C245.12 539.809 244.224 538.914 243.12 538.914L237.081 538.914C235.976 538.914 235.081 538.018 235.081 536.914L235.081 517.412C235.081 516.307 234.185 515.412 233.081 515.412L195.081 515.412C193.976 515.412 193.081 514.517 193.081 513.412L193.081 504.136" stroke="#FF0000" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" />

        {/* path 2 to Old Admin 2nd Floor */}
        <path opacity={path === "to Old Admin 2nd Floor 2" ? "1" : 0} d="M200.083 726.91L200.082 725.908C200.081 724.804 199.186 723.91 198.082 723.91L141.081 723.91C139.976 723.91 139.081 723.014 139.081 721.91L139.081 657.396C139.081 656.291 138.185 655.396 137.081 655.396L94.5807 655.396C93.4761 655.396 92.5807 654.501 92.5807 653.396L92.5807 624.973C92.5807 624.599 92.4763 624.234 92.2793 623.917L81.3821 606.387C81.1851 606.07 81.0807 605.704 81.0807 605.331L81.0807 489.636C81.0807 488.532 80.1853 487.636 79.0807 487.636L77.5807 487.636" stroke="#FF0000" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" />

        {/* path 1 to Old Admin 2nd Floor */}
        <path opacity={path === "to Old Admin 2nd Floor 1" ? "1" : 0} d="M200.083 726.91L200.082 725.908C200.081 724.804 199.186 723.91 198.082 723.91L141.081 723.91C139.976 723.91 139.081 723.014 139.081 721.91L139.081 657.396C139.081 656.291 138.185 655.396 137.081 655.396L94.5807 655.396C93.4761 655.396 92.5807 654.501 92.5807 653.396L92.5807 624.973C92.5807 624.599 92.4763 624.234 92.2793 623.917L81.3821 606.387C81.1851 606.07 81.0807 605.704 81.0807 605.331L81.0807 561.136C81.0807 560.032 80.1853 559.136 79.0807 559.136L74.5807 559.136" stroke="#FF0000" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" />

        {/* COT Faculty path */}
        <path opacity={path === "COT Faculty" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.274-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.896-2-2V657.76c0-1.105-.895-2-2-2H95c-1.1046 0-2-.895-2-2v-28.424c0-.373-.1044-.738-.3014-1.055L81.8014 606.75c-.197-.317-.3014-.682-.3014-1.055v-11.428c0-.828-.6716-1.5-1.5-1.5" />

        {/* COT Records path */}
        <path opacity={path === "COT Records" ? "1" : 0} d="M200.083 726.91L200.082 725.908C200.081 724.804 199.186 723.91 198.082 723.91L141.081 723.91C139.976 723.91 139.081 723.014 139.081 721.91L139.081 657.396C139.081 656.291 138.185 655.396 137.081 655.396L94.5807 655.396C93.4761 655.396 92.5807 654.501 92.5807 653.396L92.5807 624.973C92.5807 624.599 92.4763 624.234 92.2793 623.917L81.3821 606.387C81.1851 606.07 81.0807 605.704 81.0807 605.331L81.0807 602.636C81.0807 601.808 80.4091 601.136 79.5807 601.136" stroke="#FF0000" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" />

        {/* Sewing Lab path */}
        <path opacity={path === "Sewing Lab" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.273-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2V657.76c0-1.105-.895-2-2-2H95c-1.1046 0-2-.896-2-2v-18.883c0-.802-.4789-1.527-1.2168-1.841l-51.5317-21.931c-.4817-.205-.8638-.591-1.0643-1.074L31 590.285" />

        {/* Near Old Admin Dorm path */}
        <path opacity={path === "Near Old Admin Dorm" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.273-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2V657.76c0-1.105-.895-2-2-2H95c-1.1046 0-2-.896-2-2v-18.869c0-.809-.4878-1.539-1.2356-1.848l-46.5288-19.244C44.4878 613.49 44 612.76 44 611.951v-47.163c0-.552-.4477-1-1-1" />

        {/* COT Office path */}
        <path opacity={path === "COT Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.274-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.896-2-2V657.76c0-1.105-.895-2-2-2H95c-1.1045 0-2-.896-2-2v-28.424c0-.373-.1044-.738-.3014-1.055L81.8014 606.75c-.197-.317-.3014-.682-.3014-1.055v-25.926c0-.829-.6717-1.5-1.5-1.5" />

        {/* COT Storage Room path */}
        <path opacity={path === "COT Storage Room" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.278-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2v-64.514c0-1.104-.895-2-2-2l-42.5.001c-1.1045 0-2-.896-2-2v-28.424c0-.373-.1044-.739-.3014-1.056l-10.8972-17.53c-.197-.317-.3014-.683-.3014-1.056v-54.423c0-.828-.6718-1.5-1.5-1.499" />

        {/* COT Supply Office path */}
        <path opacity={path === "COT Supply Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.278-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2v-64.514c0-1.104-.895-2-2-2l-42.5.001c-1.1045 0-2-.896-2-2v-28.424c0-.373-.1044-.739-.3014-1.056l-10.8971-17.53c-.1971-.317-.3015-.683-.3015-1.056v-67.421c0-.828-.6717-1.5-1.5-1.499" />

        {/* Extension & Production Office path */}
        <path opacity={path === "Extension & Production Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.278-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2v-64.514c0-1.104-.895-2-2-2l-42.5.001c-1.1045 0-2-.896-2-2v-28.424c0-.373-.1044-.739-.3014-1.056l-10.8971-17.53c-.1971-.317-.3015-.683-.3015-1.056v-78.92c0-.828-.6716-1.499-1.5-1.499" />

        {/* Production Office path */}
        <path opacity={path === "Production Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.278-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2v-64.514c0-1.104-.895-2-2-2l-42.5.001c-1.1045 0-2-.896-2-2v-28.424c0-.373-.1044-.739-.3014-1.056l-10.8972-17.53c-.197-.317-.3014-.683-.3014-1.056v-88.418c0-.828-.6716-1.5-1.5-1.5" />

        {/* Production Area path */}
        <path opacity={path === "Production Area" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.278-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2v-64.514c0-1.104-.895-2-2-2l-42.5.001c-1.1045 0-2-.896-2-2v-28.424c0-.373-.1044-.739-.3014-1.056l-10.8972-17.53c-.197-.317-.3014-.683-.3014-1.056V504.782c0-.828-.6716-1.5-1.5-1.5" />

        {/* New CEAS Room 1 path*/}
        <path opacity={path === "New CEAS Room 1" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.276-.001-1.003c-.001-1.103-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2v-92.501c0-.828-.672-1.5-1.5-1.5" />

        {/* New CEAS Room 2 path */}
        <path opacity={path === "New CEAS Room 2" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.276-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.896-2-2V606.274c0-.828-.672-1.5-1.5-1.5" />

        {/* New CEAS Room 3 path */}
        <path opacity={path === "New CEAS Room 3" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.275-.001-1.002c-.001-1.103-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2V589.274c0-.828-.672-1.5-1.5-1.5" />

        {/* New CEAS Room 4 path */}
        <path opacity={path === "New CEAS Room 4" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.276-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.896-2-2V571.774c0-.828-.672-1.5-1.5-1.5" />

        {/* New CEAS Room 5 path */}
        <path opacity={path === "New CEAS Room 5" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.283-.001-1.003c-.001-1.103-.896-1.997-2-1.997H141.5c-1.105 0-2-.896-2-2V554.281c0-.828-.672-1.5-1.5-1.5" />

        {/* New CEAS CR path */}
        <path opacity={path === "New CEAS CR" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.283-.001-1.003c-.001-1.103-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2V544.278c0-1.104-.895-2-2-2h-13" />

        {/* COT Room 46 path */}
        <path opacity={path === "COT Room 46" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.282-.001-1.002c-.001-1.104-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2V541.289c0-1.105.895-2 2-2h5.5c1.105 0 2-.896 2-2v-20.501c0-1.104-.895-2-2-2h-40c-1.105 0-2-.895-2-2v-33.999c0-.552.448-1 1-1" />

        {/* Oval path */}
        <path opacity={path === "Oval" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.283-.001-1.002c-.001-1.104-.896-1.998-2-1.998l-57.001-.001c-1.105 0-2-.895-2-2V541.289c0-1.105.895-2 2-2h5.5c1.105 0 2-.896 2-2v-20.5c0-1.105-.895-2-2-2h-45c-1.105 0-2-.896-2-2V341.501c0-.744.413-1.427 1.072-1.772l9.428-4.938" />

        {/* Grandstand */}
        <path opacity={path === "Grandstand" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.283-.001-1.003c-.001-1.103-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2V541.289c0-1.105.895-2 2-2h5.5c1.105 0 2-.896 2-2v-20.5c0-1.105-.895-2-2-2h-45c-1.105 0-2-.896-2-2V344.658c0-.243-.0442-.483-.1304-.71l-33.5136-88.22c-.2241-.59-.1567-1.251.1817-1.783L103.5 195.791" />

        {/* Canteen path */}
        <path opacity={path === "Canteen" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.502 727.283-.001-1.003c-.001-1.103-.896-1.998-2-1.998H141.5c-1.105 0-2-.895-2-2V541.289c0-1.105.895-2 2-2h5.5c1.105 0 2-.896 2-2v-20.5c0-1.105-.895-2-2-2h-40c-1.105 0-2-.896-2-2V452.29c0-.553.448-1 1-1" />

        {/* BAC path */}
        <path opacity={path === "BAC Office" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.504 727.276-.001-.998c-.001-1.105.895-2.002 2-2.002h31.499c.827 0 1.498.671 1.498 1.498" />

        {/* Clinic path */}
        <path opacity={path === "University Clinic" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.504 727.276-.001-.998c-.001-1.105.895-2.002 2-2.002l43.998-.001c.828 0 1.499.671 1.499 1.499" />

        {/* COE CR path */}
        <path opacity={path === "COE CR" ? "1" : 0} stroke="red" id="grow-path" stroke-linecap="round" stroke-opacity=".5" stroke-width="1.5" d="m200.504 727.276-.001-.998c-.001-1.105.895-2.002 2-2.002H243.5c1.105 0 2-.895 2-2v-7.485c0-1.105.895-2 2-2h12" />

        {/* COT PINNNNNNNN */}
        <path className="floating-element" onClick={() => bldClicked("College of Technology/COT Building")} style={{ cursor: "pointer" }} fill="#fbff00" stroke="#6e7000" stroke-width=".5" d="M190.5 508.333c1.956.001 3.541 1.587 3.541 3.542 0 1.185-.564 2.161-1.265 2.916-.702.757-1.526 1.275-2 1.538-.174.096-.378.096-.552 0-.474-.263-1.297-.781-1.999-1.538-.702-.755-1.267-1.73-1.267-2.916 0-1.956 1.586-3.542 3.542-3.542Z" />
        <circle className="floating-element" onClick={() => bldClicked("College of Technology/COT Building")} style={{ cursor: "pointer" }} cx="190.5" cy="511.875" r="1.375" fill="#fff" stroke="#6e7000" stroke-width=".5" />
        <path stroke="#fbff01" stroke-linecap="round" stroke-width=".5" d="M194.722 516.479c.428.247.653.528.653.813s-.225.565-.653.812-1.043.452-1.784.595c-.742.143-1.582.218-2.438.218s-1.696-.075-2.437-.218c-.742-.143-1.357-.348-1.785-.595s-.653-.527-.653-.812.225-.566.653-.813" />
        <path className="floating-element" onClick={() => bldClicked("College of Technology/COT Building")} style={{ cursor: "pointer" }} fill="#fbff01" d="M189.256 505.409h-.533c-.007-.055-.022-.104-.044-.148s-.051-.082-.087-.113q-.054-.0465-.129-.072c-.049-.017-.103-.025-.163-.025-.106 0-.197.026-.274.078-.076.051-.134.126-.176.224-.04.098-.06.217-.06.356 0 .145.02.267.061.365.042.097.101.17.176.22.076.049.166.074.27.074.058 0 .111-.008.158-.023.049-.015.091-.036.127-.065.037-.029.067-.064.091-.105.024-.042.041-.089.05-.142l.533.003c-.01.097-.038.192-.085.286-.046.094-.109.179-.19.257-.081.076-.18.137-.296.183-.116.045-.249.068-.399.068-.197 0-.374-.043-.53-.13s-.279-.215-.369-.381c-.09-.167-.135-.37-.135-.61s.045-.443.137-.61q.138-.2505.372-.381c.156-.086.331-.13.525-.13.132 0 .254.019.367.056.112.036.211.089.296.16.085.069.154.155.207.256.054.102.087.218.1.349m2.361.3c0 .24-.047.444-.139.611s-.217.293-.375.38c-.157.087-.333.13-.528.13-.196 0-.373-.044-.53-.131s-.281-.214-.374-.38c-.091-.167-.137-.37-.137-.61s.046-.443.137-.61c.093-.167.217-.294.374-.381.157-.086.334-.13.53-.13.195 0 .371.044.528.13q.237.1305.375.381c.092.167.139.37.139.61m-.539 0c0-.142-.021-.262-.061-.36s-.097-.172-.173-.223c-.074-.05-.164-.075-.269-.075q-.1575 0-.27.075c-.075.051-.133.125-.173.223q-.06.147-.06.36t.06.36c.04.098.098.173.173.223s.165.076.27.076.195-.026.269-.076c.076-.05.133-.125.173-.223s.061-.218.061-.36m.676-.662v-.429h1.844v.429h-.662v1.753h-.52v-1.753z" />

        {/* COE PINNNNNNNNNNNNNN */}
        <path className="floating-element" onClick={() => bldClicked("College of Engineering Building")} style={{ cursor: "pointer" }} fill="red" stroke="#560000" stroke-width=".5" d="M229.5 674.25c1.975 0 3.541 1.474 3.541 3.25 0 1.09-.566 1.99-1.276 2.69-.709.699-1.538 1.175-2.005 1.412-.165.083-.354.083-.519 0-.467-.237-1.297-.713-2.006-1.412-.71-.7-1.277-1.6-1.277-2.69 0-1.776 1.567-3.25 3.542-3.25Z" />
        <path className="floating-element" onClick={() => bldClicked("College of Engineering Building")} style={{ cursor: "pointer" }} fill="#fff" stroke="#560000" stroke-width=".5" d="M229.5 676.25c.779 0 1.375.578 1.375 1.25s-.596 1.25-1.375 1.25-1.375-.578-1.375-1.25.596-1.25 1.375-1.25Z" />
        <path onClick={() => bldClicked("College of Engineering Building")} style={{ cursor: "pointer" }} stroke="#560000" stroke-linecap="round" stroke-width=".5" d="M233.722 681.75c.428.228.653.487.653.75 0 .264-.225.522-.653.75s-1.043.418-1.784.549c-.742.132-1.582.201-2.438.201s-1.696-.069-2.437-.201c-.742-.131-1.357-.321-1.785-.549s-.653-.486-.653-.75c0-.263.225-.522.653-.75" />


        <path className="floating-element" fill="#560000" d="M228.195 671.763h-.533c-.007-.055-.021-.104-.043-.148s-.051-.082-.088-.113q-.054-.0465-.129-.072c-.049-.017-.103-.025-.163-.025-.105 0-.197.026-.273.078-.076.051-.135.126-.176.224s-.061.217-.061.356c0 .145.021.267.062.365.042.097.1.17.176.22.076.049.166.074.269.074.059 0 .111-.008.159-.023s.091-.036.127-.065q.0555-.0435.09-.105c.025-.042.041-.089.05-.142l.533.003c-.009.097-.037.192-.084.286-.046.094-.11.179-.191.257-.081.076-.179.137-.296.183-.116.045-.249.068-.398.068-.198 0-.375-.043-.531-.13-.155-.087-.278-.215-.369-.381-.09-.167-.135-.37-.135-.61s.046-.443.138-.61c.091-.167.215-.294.371-.381.157-.086.332-.13.526-.13.132 0 .254.019.366.056.112.036.211.089.296.16.086.069.155.155.208.256.053.102.086.218.099.349m2.361.3c0 .24-.046.444-.138.611-.093.167-.218.293-.375.38s-.333.13-.529.13-.372-.044-.529-.131-.282-.214-.374-.38c-.092-.167-.138-.37-.138-.61s.046-.443.138-.61.217-.294.374-.381c.157-.086.333-.13.529-.13s.372.044.529.13q.2355.1305.375.381c.092.167.138.37.138.61m-.539 0c0-.142-.02-.262-.061-.36-.039-.098-.097-.172-.172-.223q-.1125-.075-.27-.075c-.104 0-.194.025-.269.075-.076.051-.133.125-.174.223q-.06.147-.06.36t.06.36c.041.098.098.173.174.223.075.05.165.076.269.076.105 0 .195-.026.27-.076s.133-.125.172-.223c.041-.098.061-.218.061-.36m.847 1.091v-2.182h1.521v.429h-.994v.447h.917v.429h-.917v.449h.994v.428z" />
        {/* CEAS PINNNNNN */}
        <path className="floating-element" onClick={() => bldClicked("Education Building")} style={{ cursor: "pointer" }} fill="#005eff" stroke="#003187" stroke-width=".5" d="M155.5 674.334c1.956 0 3.541 1.586 3.541 3.542 0 1.185-.564 2.16-1.265 2.916-.702.756-1.526 1.274-2 1.537-.174.096-.378.096-.552 0-.474-.263-1.297-.781-1.999-1.537s-1.267-1.731-1.267-2.916c0-1.956 1.586-3.542 3.542-3.542Z" />

        <circle className="floating-element" cx="155.5" cy="677.875" r="1.125" fill="#fff" stroke="#003187" />
        <path stroke="#003187" stroke-linecap="round" stroke-width=".5" d="M159.722 682.479c.428.247.653.528.653.813s-.225.565-.653.812-1.043.453-1.784.595c-.742.143-1.582.218-2.438.218s-1.696-.075-2.437-.218c-.742-.142-1.357-.348-1.785-.595s-.653-.527-.653-.812.225-.566.653-.813" />
        <path className="floating-element" fill="#003187" d="M153.465 671.609h-.533c-.007-.055-.021-.104-.043-.148s-.052-.082-.088-.113-.079-.055-.129-.071c-.049-.018-.103-.026-.163-.026-.105 0-.197.026-.273.078s-.135.126-.176.225c-.041.098-.061.216-.061.355 0 .145.021.267.062.365.042.097.1.17.176.22.076.049.165.074.269.074.058 0 .111-.008.159-.023s.09-.036.127-.065q.0555-.0435.09-.105c.024-.042.041-.089.05-.142l.533.003c-.009.097-.037.192-.084.286-.046.094-.11.179-.191.257-.081.076-.18.137-.296.183-.116.045-.249.068-.399.068-.197 0-.374-.043-.53-.13s-.278-.214-.369-.381c-.09-.167-.135-.37-.135-.61s.046-.443.137-.61c.092-.167.216-.294.372-.38.157-.087.332-.13.525-.13.133 0 .255.018.367.055.112.036.211.089.296.16.085.069.155.155.208.257q.0795.1515.099.348m.302 1.391v-2.182h1.521v.429h-.994v.447h.916v.429h-.916v.449h.994V673zm2.323 0h-.567l.737-2.182h.702l.736 2.182h-.567l-.512-1.632h-.017zm-.075-.858h1.184v.4h-1.184zm3.03-.669c-.007-.079-.039-.139-.095-.183s-.135-.066-.238-.066c-.068 0-.125.009-.17.027-.046.018-.08.042-.102.073-.023.031-.035.066-.036.106-.001.033.005.061.02.086.014.025.036.047.063.066.029.019.063.035.103.049s.084.027.134.038l.187.042c.108.024.204.055.286.094.083.039.153.086.209.139.057.054.1.117.129.187s.044.149.044.236c0 .138-.035.256-.104.355s-.168.175-.297.227c-.129.053-.284.079-.466.079s-.341-.027-.477-.082-.241-.138-.316-.249c-.076-.112-.114-.253-.117-.423h.505c.005.07.024.129.057.175.033.047.079.083.137.107.059.024.127.036.205.036.071 0 .131-.009.181-.029.05-.019.089-.045.116-.079.027-.035.041-.074.042-.118q-.0015-.0615-.039-.105c-.025-.03-.063-.056-.115-.077-.051-.022-.116-.042-.196-.061l-.228-.053c-.189-.043-.337-.113-.446-.21s-.163-.228-.162-.394c-.001-.135.035-.253.109-.355q.1095-.1515.303-.237c.129-.057.277-.085.442-.085.169 0 .316.028.44.086q.1875.0855.291.24c.069.103.104.222.106.358z" />
        {/* COE/CME PINNNNN */}
        <path className="floating-element" onClick={() => bldClicked("CME/COE Building")} style={{ cursor: "pointer" }} fill="#1f0" stroke="#087c00" stroke-width=".5" d="M234.5 565.334c1.956 0 3.541 1.586 3.541 3.542 0 1.185-.564 2.16-1.265 2.916-.702.756-1.526 1.275-2 1.537-.174.096-.378.096-.552 0-.474-.262-1.297-.781-1.999-1.537s-1.267-1.731-1.267-2.916c0-1.956 1.586-3.542 3.542-3.542Z" />

        <circle className="floating-element" cx="234.5" cy="568.875" r="1.375" fill="#fff" stroke="#087c00" stroke-width=".5" />
        <path stroke="#087c00" stroke-linecap="round" stroke-width=".5" d="M238.722 573.479c.428.247.653.527.653.812 0 .286-.225.566-.653.813s-1.043.452-1.784.595c-.742.142-1.582.217-2.438.217s-1.696-.075-2.437-.217c-.742-.143-1.357-.348-1.785-.595s-.653-.527-.653-.813c0-.285.225-.565.653-.812" />
        <path className="floating-element" fill="#087c00" d="M232.994 562.609h-.532c-.007-.055-.022-.104-.044-.148s-.051-.082-.087-.113-.079-.055-.129-.071c-.049-.017-.104-.026-.163-.026-.106 0-.197.026-.274.078-.076.052-.135.127-.176.225-.04.098-.06.216-.06.355 0 .145.02.267.061.365.042.097.101.171.176.22.076.049.166.074.27.074.058 0 .111-.008.158-.023.049-.014.091-.036.127-.065.037-.029.067-.064.091-.105.024-.042.041-.089.05-.142l.532.004q-.0135.144-.084.285c-.046.094-.109.179-.19.257-.081.076-.18.138-.297.183-.115.045-.248.068-.398.068-.197 0-.374-.043-.531-.13-.155-.087-.278-.214-.368-.381s-.135-.37-.135-.61.045-.443.137-.61.216-.294.372-.38c.156-.087.331-.13.525-.13.132 0 .254.018.366.055.113.036.211.09.297.16.085.07.154.155.207.257q.081.1515.099.348m.302-.79h.653l.554 1.35h.026l.554-1.35h.653V564h-.514v-1.34h-.018l-.524 1.327h-.328l-.524-1.334h-.018V564h-.514zm2.769 2.181v-2.181h1.521v.428h-.994v.447h.916v.43h-.916v.448h.994V564z" />

        {/* ERRC CR 4 bldg  */}
        <path fill={allFalse ? '#8649ff' : category["Restroom"] ? "#8649ff" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category["Restroom"] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M6 701h5v3.66265H6z" />
        <text x="8.5" y="703.38" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">CR</text>
        <path fill={allFalse ? '#6f3dd2' : category["Restroom"] ? "#6f3dd2" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category["Restroom"] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M6 704.6h5v1H6z" />

        {/* ERRC CR 3 bldg  */}
        <path fill={allFalse ? '#8649ff' : category["Restroom"] ? "#8649ff" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category["Restroom"] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M6 715h5v3.66265H6z" />
        <text x="8.5" y="717.39" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">CR</text>
        <path fill={allFalse ? '#6f3dd2' : category["Restroom"] ? "#6f3dd2" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category["Restroom"] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M6 718.6h5v1H6z" />

        {/* ERRC CR 2 bldg  */}
        <path fill={allFalse ? '#8649ff' : category["Restroom"] ? "#8649ff" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category["Restroom"] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M6 728h5v3.66265H6z" />
        <text x="8.5" y="730.35" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">CR</text>
        <path fill={allFalse ? '#6f3dd2' : category["Restroom"] ? "#6f3dd2" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category["Restroom"] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M6 731.6h5v1H6z" />

        {/* ERRC CR 1 bldg  */}
        <path fill={allFalse ? '#8649ff' : category["Restroom"] ? "#8649ff" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category["Restroom"] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M6 742h5v3.66265H6z" />
        <text x="8.5" y="744.35" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.5" fill="black">CR</text>
        <path fill={allFalse ? '#6f3dd2' : category["Restroom"] ? "#6f3dd2" : "#B0B0B0"} stroke={allFalse ? '#693AC6' : category["Restroom"] ? "#693AC6" : "#B0B0B0"} stroke-width={0.4} d="M6 745.6h5v1H6z" />

        {/* SECURITY OFFICE bldg */}
        <path onClick={() => bldClicked("Security Office")} style={{ cursor: "pointer", pointerEvents: 'all' }} fill={allFalse ? '#8cd200' : category[""] ? "#8cd200" : "#B0B0B0"} stroke={allFalse ? '#609400' : category[""] ? "#609400" : "#B0B0B0"} stroke-width={0.4} d="M109 802h27v11h-27z" />
        <text x="122.5" y="809" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.2" fill="black">SECURITY OFFICE</text>
        <path fill={allFalse ? '#6eaa00' : category[""] ? "#6eaa00" : "#B0B0B0"} stroke={allFalse ? '#609400' : category[""] ? "#609400" : "#B0B0B0"} stroke-width={0.4} d="M109 813h27v2h-27z" />

        {/* GUARD HOUSE */}
        <path fill={allFalse ? '#8cd200' : category[""] ? "#8cd200" : "#B0B0B0"} stroke={allFalse ? '#609400' : category[""] ? "#609400" : "#B0B0B0"} stroke-width={0.4} d="M272 800h12v11h-12z" />
        <text x="278" y="804.8" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">GUARD</text>
        <text x="278" y="807.6" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">HOUSE</text>
        <path fill={allFalse ? '#6eaa00' : category[""] ? "#6eaa00" : "#B0B0B0"} stroke={allFalse ? '#609400' : category[""] ? "#609400" : "#B0B0B0"} stroke-width={0.4} d="M272 811h12v2h-12z" />

        {/* BUSINESS HUB BLDG */}
        <path fill={allFalse ? '#8cd200' : category[""] ? "#8cd200" : "#B0B0B0"} stroke={allFalse ? '#609400' : category[""] ? "#609400" : "#B0B0B0"} stroke-width={0.4} d="m58 800.625 4.8546-22.813 1.2137-7.062h7.6013v22.5h-4.5991v7.375H87V813H58z" />
        <text x="72.5" y="806.4" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">BUSINESS HUB</text>
        <text x="72.5" y="809.2" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2" fill="black">BUILDING</text>
        <path fill={allFalse ? '#6eaa00' : category[""] ? "#6eaa00" : "#B0B0B0"} stroke={allFalse ? '#609400' : category[""] ? "#609400" : "#B0B0B0"} stroke-width={0.4} d="M58 812.875h29v1.875H58z" />

        <path stroke="#777" stroke-linecap="round" stroke-width=".9" d="M182.554 753.238h-24.137c-.552 0-1 .448-1 1v6.479c0 .553.448 1 1 1h19.515" />
        <path stroke="#777" stroke-linecap="round" stroke-width=".9" d="M182.554 756.991h-20.661c-.28 0-.507.228-.507.508 0 .281.227.508.507.508h16.13" />
        <path stroke="#535353" d="m174.395 751.011 8.592-.021" />
        <path stroke="#535353" d="M183.492 760.022l-.02-9.534" />
        <path stroke="#535353" d="M203.001 750.993l7.602-.021" />
        <path stroke="#535353" d="M203 760.022l-.021-9.534" />
        <path stroke="#777" stroke-linecap="round" stroke-width=".9" d="M221.211 719.356v-6.373c0-.552-.448-1-1-1H165.25c-.552 0-1 .448-1 1v6.963" />
        <path stroke="#777" stroke-linecap="round" stroke-width=".9" d="M202.67 716.228h12.421c.28 0 .508-.227.508-.507 0-.281-.228-.508-.508-.508h-45.315c-.281 0-.508.227-.508.508 0 .28.227.507.508.507h9.439" />
        <path stroke="#535353" d="m202.268 720.021 34-.021" />
        <path stroke="#535353" d="M149.268 720.022l35-.02" />
        <path stroke="#535353" d="M143.289 710.286l-.021-20.265" />
        <path stroke="#535353" d="M143.246 672.024l.002-8" />
        <path stroke="#535353" stroke-width=".8" d="m241.777 643.029-.001-15.006" />
        <path stroke="#535353" stroke-width=".8" d="M238.028 646.046l.003-10" />
        <path stroke="#535353" stroke-width=".8" d="M242.086 645.65l-4-.004" />
        <path stroke="#535353" stroke-width=".8" d="M242.084 636.446l-4.057-.001" />
        <path stroke="#535353" stroke-width=".8" d="M242.081 630.529h-4.532" />
        <path stroke="#535353" stroke-width=".8" d="M241.524 628.419l-4 .003" />
        <path stroke="#535353" stroke-width=".8" d="M240.223 636.778l-.002-6.447" />
        <path stroke="#535353" stroke-width=".8" d="M238.778 636.75l.007-6.419" />
        <path stroke="#535353" stroke-width=".8" d="M237.273 630.929l-.004-2.906" />
        <path stroke="#535353" stroke-width=".8" d="M143.104 643.007l.001-15.006" />
        <path stroke="#535353" stroke-width=".8" d="M146.854 646.024l-.004-10" />
        <path stroke="#535353" stroke-width=".8" d="M142.796 645.627l4-.003" />
        <path stroke="#535353" stroke-width=".8" d="M142.798 636.424l4.057-.001" />
        <path stroke="#535353" stroke-width=".8" d="M142.8 630.507h4.531" />
        <path stroke="#535353" stroke-width=".8" d="M143.356 628.396l4 .004" />
        <path stroke="#535353" stroke-width=".8" d="M144.657 636.756l.002-6.448" />
        <path stroke="#535353" stroke-width=".8" d="M146.104 636.728l-.007-6.42" />
        <path stroke="#535353" stroke-width=".8" d="M147.608 630.907l.004-2.906" />
        <path stroke="#535353" stroke-width=".8" d="M143.104 614.024l.001-36" />
        <path stroke="#535353" stroke-width=".8" d="M147.608 614.024l.001-3" />
        <path stroke="#535353" stroke-width=".8" d="M144.659 611.024v-30" />
        <path stroke="#535353" stroke-width=".8" d="M146.104 605.024l.003-17.13" />
        <path stroke="#535353" stroke-width=".8" d="M143.007 610.758l5 .001" />
        <path stroke="#535353" stroke-width=".8" d="M143.007 613.625l5 .001" />
        <path stroke="#535353" stroke-width=".8" d="M147.595 581.69l.001-3" />
        <path stroke="#535353" stroke-width=".8" d="M142.995 578.424l5 .001" />
        <path stroke="#535353" stroke-width=".8" d="M142.995 581.291l5 .001" />
        <path stroke="#535353" stroke-width=".8" d="M144.995 588.292h1" />
        <path stroke="#535353" stroke-width=".8" d="M142.955 596.023l3 .001" />
        <path stroke="#535353" stroke-width=".8" d="M144.935 604.625h1" />
        <path stroke="#535353" stroke-width=".8" d="M241.857 614.024v-36" />
        <path stroke="#535353" stroke-width=".8" d="M237.354 614.024v-3" />
        <path stroke="#535353" stroke-width=".8" d="M240.303 611.024l-.001-30" />
        <path stroke="#535353" stroke-width=".8" d="M238.859 605.024l-.003-17.13" />
        <path stroke="#535353" stroke-width=".8" d="M241.954 610.758l-5 .001" />
        <path stroke="#535353" stroke-width=".8" d="M241.954 613.626l-5 .001" />
        <path stroke="#535353" stroke-width=".8" d="M237.366 581.69l-.001-3" />
        <path stroke="#535353" stroke-width=".8" d="M241.966 578.424l-5 .001" />
        <path stroke="#535353" stroke-width=".8" d="M241.966 581.292l-5 .001" />
        <path stroke="#535353" stroke-width=".8" d="M239.966 588.292l-1 .001" />
        <path stroke="#535353" stroke-width=".8" d="M242.007 596.023l-3 .001" />
        <path stroke="#535353" stroke-width=".8" d="M240.026 604.625l-1 .001" />
        <path stroke="#535353" d="m242.289 710.286-.021-20.265" />
        <path stroke="#535353" d="M242.267 672.024l-.02-8" />
        <path stroke="#535353" stroke-width=".8" d="M241.857 562.024v-18" />
        <path stroke="#535353" stroke-width=".8" d="M240.303 559.043l-.001-15" />
        <path stroke="#535353" stroke-width=".8" d="M238.857 552.043l-.001-8" />
        <path stroke="#535353" stroke-width=".8" d="M237.366 562.043l-.001-3" />
        <path stroke="#535353" stroke-width=".8" d="M242.259 561.642l-5.2.001" />
        <path stroke="#535353" stroke-width=".8" d="M242.166 558.879l-5.2.001" />
        <path stroke="#535353" stroke-width=".8" d="M240.456 552.192l-2 .001" />
        <path stroke="#535353" stroke-width=".8" d="M242.259 544.396l-3.803-.002" />
        <path stroke="#535353" stroke-width=".8" d="M143.103 561.981l.001-18" />
        <path stroke="#535353" stroke-width=".8" d="M144.658 559l.001-15" />
        <path stroke="#535353" stroke-width=".8" d="M146.105 552l.001-8" />
        <path stroke="#535353" stroke-width=".8" d="M147.595 562l.001-3" />
        <path stroke="#535353" stroke-width=".8" d="M142.702 561.599l5.2.001" />
        <path stroke="#535353" stroke-width=".8" d="M142.796 558.836l5.2.001" />
        <path stroke="#535353" stroke-width=".8" d="M144.504 552.15h2" />
        <path stroke="#535353" stroke-width=".8" d="M142.702 544.353l3.803-.002" />
        <path stroke="#535353" stroke-width=".8" d="M143.104 534.981l.001-10" />
        <path stroke="#535353" stroke-width=".8" d="M146.106 535l.001-10" />
        <path stroke="#535353" stroke-width=".8" d="M142.703 534.62l3.803.001" />
        <path stroke="#535353" stroke-width=".8" d="M142.71 525.116l3.802-.002" />
        <path stroke="#535353" stroke-width=".8" d="M238.859 535.024l.001-10" />
        <path stroke="#535353" stroke-width=".8" d="M241.86 535.043v-10" />
        <path stroke="#535353" stroke-width=".8" d="M238.457 534.663l3.803.001" />
        <path stroke="#535353" stroke-width=".8" d="M238.458 525.045l3.803-.002" />
        <path stroke="#777" stroke-linecap="round" stroke-width=".7" d="M136.319 521.056h-21.564c-.553 0-1 .448-1 1l-.002 5.207" />
        <path stroke="#777" stroke-linecap="round" stroke-width=".7" d="M136.307 524.043h-18.488c-.28 0-.508.227-.508.508 0 .28.228.507.508.507h24.534" />
        <path stroke="#777" stroke-linecap="round" stroke-width=".7" d="M248.635 520.979h21.584c.552 0 1 .448 1 1l.002 5.207" />
        <path stroke="#777" stroke-linecap="round" stroke-width=".7" d="m248.67 523.965 18.488.001c.281 0 .508.227.508.508 0 .28-.227.507-.508.507h-24.533" />
        <path stroke="#535353" d="M85 606.403V591" />
        <path stroke="#535353" d="M85 580v-12" />
        <path stroke="#535353" d="M85 556v-14" />
        <path stroke="#535353" d="M85 535v-6" />
        <path stroke="#535353" d="M85 521.599V514" />
        <path stroke="#535353" d="M85 506v-7" />
        <path stroke="#535353" d="M108 510h6" />
        <path stroke="#535353" d="M125 510h30" />
        <path stroke="#535353" d="M166 510h17" />
        <path stroke="#535353" d="M198 510h11" />
        <path stroke="#535353" d="M220 510h6" />
        {/* KIOSK */}
        <path onClick={() => zooomBuildingbyName("KIOSK")} style={{ cursor: "pointer", pointerEvents: 'all' }} className='floating-element' fill="#fffec6" stroke="#ea8228" stroke-width=".5" d="M198.742 729.458c0-.095 0-.142.029-.171.03-.029.077-.029.171-.029h3.284c.094 0 .141 0 .17.029.03.029.03.076.03.171v4.085c0 .095 0 .142-.03.171-.029.029-.076.029-.17.029h-3.284c-.094 0-.141 0-.171-.029-.029-.029-.029-.076-.029-.171z" />
        <path onClick={() => zooomBuildingbyName("KIOSK")} style={{ cursor: "pointer", pointerEvents: 'all' }} className='floating-element' stroke="#f55456" stroke-linecap="round" stroke-width=".6" d="M200.584 732.648v.024" />
        <rect onClick={() => zooomBuildingbyName("KIOSK")} style={{ cursor: "pointer", pointerEvents: 'all' }} className='floating-element' width=".68" height=".683594" x="199.643" y="730.193" fill="#65a468" rx=".1" />
        <rect onClick={() => zooomBuildingbyName("KIOSK")} style={{ cursor: "pointer", pointerEvents: 'all' }} className='floating-element' width=".68" height=".683594" x="200.844" y="730.193" fill="#657ea4" rx=".1" />
        <rect onClick={() => zooomBuildingbyName("KIOSK")} style={{ cursor: "pointer", pointerEvents: 'all' }} className='floating-element' width=".68" height=".683594" x="199.643" y="731.247" fill="#a48765" rx=".1" />
        <rect onClick={() => zooomBuildingbyName("KIOSK")} style={{ cursor: "pointer", pointerEvents: 'all' }} className='floating-element' width=".68" height=".683594" x="200.844" y="731.247" fill="#a46566" rx=".1" />
        <text onClick={() => zooomBuildingbyName("KIOSK")} style={{ cursor: "pointer", pointerEvents: 'all' }} className='floating-element' x="194" y="737" fontSize="3" fill="#000" fontWeight="bold" >YOU ARE </text>
        <text onClick={() => zooomBuildingbyName("KIOSK")} style={{ cursor: "pointer", pointerEvents: 'all' }} className='floating-element' x="197" y="741" fontSize="3" fill="#000" fontWeight="bold"> HERE</text>

        {/* PAGLAUM FARM */}
        <path fill={allFalse ? '#8cd200' : category[""] ? "#8cd200" : "#B0B0B0"} stroke={allFalse ? '#609400' : category[""] ? "#609400" : "#B0B0B0"} stroke-width={0.4} d="M351 759h109v27.4194H351z" />
        <text x="405.5" y="773.5" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="2.5" fill="black">PAGLAUM FARM</text>
        <path fill={allFalse ? '#6eaa00' : category[""] ? "#6eaa00" : "#B0B0B0"} stroke={allFalse ? '#609400' : category[""] ? "#609400" : "#B0B0B0"} stroke-width={0.4} d="M351 786.419h109V789H351z" />

        {/* Storage near Oval bldg */}
        <path fill={allFalse ? '#bf71ff' : category[""] ? "#bf71ff" : "#B0B0B0"} stroke={allFalse ? '#9759C9' : category[""] ? "#9759C9" : "#B0B0B0"} stroke-width={0.4} d="M80 404h7v13h-7z" />
        <text x="83.5" y="411.19" text-anchor="middle" font-weight="600" font-family="Inter, sans-serif" font-size="1.75" fill="black" transform="rotate(-90, 83.5, 410.5)">STORAGE</text>
        <path fill={allFalse ? '#9e5ed3' : category[""] ? "#9e5ed3" : "#B0B0B0"} stroke={allFalse ? '#9759C9' : category[""] ? "#9759C9" : "#B0B0B0"} stroke-width={0.4} d="M80 417h7v2h-7z" />
  
      </svg>

    </>
  );
}));

export default Floor1

