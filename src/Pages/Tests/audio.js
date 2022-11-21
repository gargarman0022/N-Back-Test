import React, { Component,useState } from 'react'
import TestHeader from '../../Components/TestHeader'
import IntroNback from './Audio/IntroNback'
import Demo from './Audio/Demo'
import Test from './Audio/Test'

const AudioTest = () => {

    const [selectedStage,selectStage] = useState("Intro")

    return (
        <div className="w-screen h-screen flex-col">
            <TestHeader test={{name:"N-Back Audio Test"}} selectedOption={selectedStage} selectOption={selectStage} />
            
            {selectedStage === "Intro" && <IntroNback goToDemo={()=>selectStage("Demo")}/>}
            {selectedStage === "Demo"  && <Demo goToTask={()=>selectStage("Task")}/>}
            {selectedStage === "Task"  && <Test exit={()=>selectStage("Exit")}/>}
            {/* <DemoNback/>
            <TestNback/> */}
    </div>
    )
}

export default AudioTest
