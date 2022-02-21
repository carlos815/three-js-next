
import * as THREE from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import React, { Suspense, useState } from "react";

import Car from "./Car";
import { Canvas } from "@react-three/fiber";



export const enviromentPresets = [
  "sunset",
  "dawn",
  "night",
  "warehouse",
  "forest",
  "apartment",
  "studio",
  "city",
  "park",
  "lobby",
]

export default function CustomScene() {

  const [enviromentIndex, setEnviromentIndex] = useState(1)

  const handleBackClick = () => {
    if (enviromentIndex !== 0) { setEnviromentIndex(enviromentIndex - 1) }
    else {
      setEnviromentIndex(enviromentPresets.length - 1)
    }

    console.log(enviromentPresets.length)
  }



  const handleForwardClick = () => {
    if (enviromentIndex < enviromentPresets.length - 1) { setEnviromentIndex(enviromentIndex + 1) } else {
      setEnviromentIndex(0)
    }

    console.log(enviromentIndex)
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas >
        <Suspense fallback={null}>
          <Car />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} enableDamping={true}>
            <Environment preset={enviromentPresets[enviromentIndex]} background />
          </OrbitControls>
        </Suspense>
      </Canvas>
      <ChangeSceneButtons current={enviromentPresets[enviromentIndex]} handleBackClick={handleBackClick} handleForwardClick={handleForwardClick} />
    </div >
  );
}

function ChangeSceneButtons({ handleBackClick, handleForwardClick, current }) {
  const buttonsStyle = {

  }

  return (
    <div className="fixed top-2 left-2 bg-orange-300 p-4  gap-3 flex flex-col  bg-opacity-30 border-opacity-30 backdrop-blur-lg">

      <h1 className="text-xl text-white  w-64 ">Enviroment: {current[0].toUpperCase() + current.substring(1)}</h1>
      <div className="flex gap-x-4 ">
        <button className=" bg-gray-300  w-full text-center p-1 flex items-center justify-center " onClick={handleBackClick}>Previous</button>
        <button className=" bg-orange-300  w-full text-center p-1 flex items-center justify-center  " onClick={handleForwardClick}>Next</button>
      </div>
    </div>
  )
}