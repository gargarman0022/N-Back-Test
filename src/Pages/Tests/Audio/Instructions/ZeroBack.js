import React from 'react'

const ZeroBack = () => {
    return (
<div>
            <h5 className="text-2xl font-serif mt-10">For a 0-Back task, you have to press the 'A' each time the current letter is 'M'. Otherwise you have to respond by pressing 'D'.</h5>

            <div className="mt-10 flex flex-row">
                <div className="w-32 h-34 m-5">
                    <div className="h-32 w-32 border-4 border-gray-600 rounded-lg text-6xl">
                        <h5 className="text-center mt-6">F</h5>
                    </div>
                    <h5 className="text-center mt-2 text-lg font-bold">1. letter</h5>
                </div>
                <div className="w-32 h-34 m-5">
                    <div className="h-32 w-32 border-4 border-gray-600 rounded-lg text-6xl">
                        <h5 className="text-center mt-6">M</h5>
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
            <div className="ml-28 w-36 h-10 border-r-4 border-red-500"></div>
            <h5 className="text-2xl font-serif mt-10">Here, you have to press the key "M" because it is the current shown letter.</h5>
        </div>
    )
}

export default ZeroBack
