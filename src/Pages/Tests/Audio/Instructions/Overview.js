import React from 'react'

const Overview = () =>{
    return (
        <div>
            <h5 className="text-2xl font-serif mt-10">In this memory test , you will hear a sequence of letters appearing one after another in the center of the computer screen :</h5>
            <div className="mt-10 flex flex-row">
                <div className="w-32 h-34 m-5">
                    <div className="h-32 w-32 border-4 border-gray-600 rounded-lg text-6xl">
                        <h5 className="text-center mt-6">F</h5>
                    </div>
                    <h5 className="text-center mt-2 text-lg font-bold">1. letter</h5>
                </div>
                <div className="w-32 h-34 m-5">
                    <div className="h-32 w-32 border-4 border-gray-600 rounded-lg text-6xl">
                        <h5 className="text-center mt-6">B</h5>
                    </div>
                    <h5 className="text-center mt-2 text-lg font-bold">2. letter</h5>
                </div>
                <div className="w-32 h-34 m-5">
                    <div className="h-32 w-32 border-4 border-gray-600 rounded-lg text-6xl">
                        <h5 className="text-center mt-6">S</h5>
                    </div>
                    <h5 className="text-center mt-2 text-lg font-bold">3. letter</h5>
                </div>
                <div className="w-32 h-34 m-5">
                    <div className="h-32 w-32 border-4 border-gray-600 rounded-lg text-6xl">
                        <h5 className="text-center mt-6">K</h5>
                    </div>
                    <h5 className="text-center mt-2 text-lg font-bold">4. letter</h5>
                </div>
                <div className="text-8xl text-bottom">...</div>
            </div>
            <h5 className="text-2xl font-serif mt-5">The presentation rate is fast . Every new letter appears after 3 seconds</h5>
        </div>
        

    )
}

export default Overview
