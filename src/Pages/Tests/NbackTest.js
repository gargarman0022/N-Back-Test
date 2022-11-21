import React, { Component,useState } from 'react'
import TestHeader from '../../Components/TestHeader'
import IntroNback from './Nback/IntroNback'
import Demo from './Nback/Demo'
import Test from './Nback/Test'

const NbackTest = () => {

    const [selectedStage,selectStage] = useState("Intro")

    return (
        <div className="w-screen h-screen flex-col">
            <TestHeader test={{name:"N-Back Test Digit"}} selectedOption={selectedStage} selectOption={selectStage} />
            
            {selectedStage === "Intro" && <IntroNback goToDemo={()=>selectStage("Demo")}/>}
            {selectedStage === "Demo"  && <Demo goToTask={()=>selectStage("Task")}/>}
            {selectedStage === "Task"  && <Test exit={()=>selectStage("Exit")}/>}
            {/* <DemoNback/>
            <TestNback/> */}
    </div>
    )
}

export default NbackTest
