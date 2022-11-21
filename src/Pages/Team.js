import React from 'react'
import m1 from "../Assets/Images/m1.png"
import m2 from "../Assets/Images/m2.png"
import m3 from "../Assets/Images/m3.png"
import m4 from "../Assets/Images/m4.png"
import m5 from "../Assets/Images/m5.png"
import m6 from "../Assets/Images/m6.png"
import m7 from "../Assets/Images/m7.png"

const Team = () =>{
    return (
        <div className="w-screen h-full">
            <header className="bg-white shadow">
                <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                    Team Members
                    </h1>
                </div>
            </header>
            <div className="mx-auto mt-6 lg:mt-12">
            <div className="w-3/4 relative h-10 mx-auto self-center mt-40">
                <img width="190px" className="absolute bottom-0 left-20" src={m1}/>
                <img width="190px" className="absolute bottom-0 left-1/4 ml-24" src={m7}/>
                <img width="190px" className="absolute bottom-0 right-1/4 mr-24" src={m3}/>
                <img width="190px" className="absolute bottom-0 right-20" src={m2}/>
            </div>
            <div className="w-3/4 relative h-10 mx-auto self-center text-xl font-bold ">
                <h5 className="absolute left-20 top-3">HEMANT</h5>
                <div className="absolute w-20 top-3 left-1/3 mr-36">NILESH</div>
                <div className="absolute w-20 top-3 right-1/4 mr-36">ARMAN</div>
                <h5 className="absolute right-28 top-3">MEENAL</h5>
                
            </div>
            <div className="w-1/2 relative h-32 mx-auto self-center mt-32">
                <img width="210px" className="absolute bottom-0 left-20" src={m4}/>
                <img width="200px" className="absolute bottom-0 right-16" src={m5}/>
                <img width="200px" className="absolute bottom-0 block mx-auto left-0 right-0" src={m6}/>
            </div>
            <div className="w-1/2 relative h-12 mx-auto self-center text-xl font-bold ">
                <h5 className="absolute left-20 top-3">HIMAKSHI</h5>
                <h5 className="absolute right-20 top-3">SHRUTI</h5>
                <h5 className="absolute w-24 top-3 mx-auto left-0 right-0">TITIKSHA</h5>
            </div>
            </div>
        </div>
    )
}

export default Team
