import React from 'react'
import logo_black from "../Assets/Images/brain_white.png"
import back from "../Assets/Images/back.png"
import {Link} from "react-router-dom";

const items = {"Intro":"How To Play","Task":"Start"}

const TestHeader= ({test,selectedOption,selectOption}) => {
    return (
        <div className="w-screen">
        <header className="bg-yellow-500 shadow">
            <div className="flex items-center space-x-6 mx-auto py-6 px-4 sm:px-6 lg:px-8">

            <div className="flex-shrink-0">
                <Link to={"/dashboard"}>
                    <img
                      className="h-8 w-8 cursor-pointer"
                      src={back}
                      alt="Workflow"
                    />
                </Link>
            </div>
            <div className="text-4xl font-bold text-white">
                {test.name}
            </div>
            <div className ="w-25">
            </div>
            {Object.keys(items).map((item)=>(
                <button 
                    key={item}
                    onClick={()=>selectOption(item)}
                    className={"px-4 py-1 mx-4 rounded-md text-lg font-bold border-2 border-yellow-500 hover:bg-yellow-700 hover:text-white"+
                    (selectedOption==item?" bg-yellow-500 text-white":" text-white hover:bg-gyellow-700 hover:text-white")}>
                    {items[item]}
                </button>
            ))}
            <div className ="flex-grow">
            </div>
            <div className ="flex-grow">
            </div>
            <div className ="flex-grow">
            </div>
            <div className="flex-shrink-0">
                <Link to="/">
                    <img
                      className="cursor-pointer h-8 w-8 md:h-16 md:w-16"
                      src={logo_black}
                      alt="Workflow"
                    />
                </Link>
            </div>
            </div>
        </header>
    </div>
    )
}

export default TestHeader
