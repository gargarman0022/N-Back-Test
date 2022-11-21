import React ,{useState } from 'react'
import SubHeaderNback from '../../../Components/SubHeaderNback'
import OneBack from './Instructions/OneBack'
import Overview from './Instructions/Overview'
import ThreeBack from './Instructions/ThreeBack'
import TwoBack from './Instructions/TwoBack'
import ZeroBack from './Instructions/ZeroBack'

const IntroNback = (props)=>{
    const [pageNo,changePage] = useState(1)

    const nextPage = (page) =>{
        if (page<5){
            changePage(page+1)
        }
    }

    const previousPage = (page) =>{
        if (page>1){
            changePage(page-1)
        }
    }
    
    return (
        <div  className="relative lg:w-3/4 h-4/5 mx-auto mb-5">
            {pageNo==1 &&
                <div>
                    <SubHeaderNback content="N-back Memory Task: Overview of Procedure"/>
                    <Overview/>
                </div>
            }

            {pageNo==2 &&
                <div>
                    <SubHeaderNback content="0-back Task:"/>
                    <ZeroBack/>
                </div>
            }

            {pageNo==3 &&
                <div>
                    <SubHeaderNback content="1-Back Task"/>
                    <OneBack/>
                </div>
            }
            {pageNo==4 &&
                <div>
                    <SubHeaderNback content="2-Back Task"/>
                    <TwoBack/>
                </div>
            }
            {pageNo==5 &&
                <div>
                    <SubHeaderNback content="3-Back Task"/>
                    <ThreeBack/>
                </div>
            }

            
            <div className="flex flex-row justify-self-end  mt-10">
            {!(pageNo==1) &&
                <button 
                    onClick={()=>previousPage(pageNo)}
                    className="absolute bottom-110 left-0 px-4 py-2 mx-10 rounded-md text-xl font-bold border-yellow-400 text-white bg-yellow-400 hover:bg-gray-700 hover:text-white">
                    Previous Page
                </button>
            }


            {!(pageNo==5) &&
                <button 
                    onClick={()=>nextPage(pageNo)}
                    className="absolute top-110 right-0 px-4 py-2 mx-10 rounded-md text-xl font-bold border-2 border-yellow-400 text-white bg-yellow-400 hover:bg-gray-700 hover:text-white">
                    Next Page
                </button>
            }

            {(pageNo==5) &&
                <button 
                    onClick={props.goToDemo}
                    className="absolute top-200 right-0 px-4 py-2 mx-10 rounded-md text-xl font-bold border-4 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                    Go to Practice
                </button>
            }
            </div>
        </div>
    )
}

export default IntroNback
