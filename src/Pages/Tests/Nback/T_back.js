import React ,{ useState }from 'react'
import { Link } from 'react-router-dom'
import NbackTestSet from '../../../Components/NbackTestSet'
import SubHeaderNback from '../../../Components/SubHeaderNback'
import Result from './Result'
import Header from '../../../Components/Header'

var final_results = []
const T_back = (props) => {

    const [pageNo,changePage] = useState(1)
    const [finalResult,setResult] = useState([])

    const nextPage = (page) =>{
        if (page<3){
            changePage(page+1)
        }
    }

    const previousPage = (page) =>{
        if (page>1){
            changePage(page-1)
        }
    }

    // const [results, setresults] = useState({})

    const add_result = (nback,n,correct_answer,time,responded,true_correct,false_correct,true_wrong,false_wrong) =>{

        var mean_time = 0
        var i =0
        for (i=0;i<time.length;i++){
            if (!isNaN(time[i])){
                mean_time += time[i]
            }
        }

        var chart_data = []

        for (i=0;i<n;i++){
            var t = 0
            if (!isNaN(time[i])){
                t=time[i]
            }
            chart_data.push(
                {
                    index:i+1,
                    time_taken:t
                }
            )
        }

        if (responded!=0){
            mean_time = mean_time/responded;
        }
        final_results.push({
            "n":n,
            "nback":nback,
            "correct_answer":correct_answer,
            "responded":responded,
            "true_correct":true_correct,
            "false_correct":false_correct,
            "true_wrong":true_wrong,
            "false_wrong":false_wrong,
            "chart_data":chart_data,
            "mean_time":mean_time
        })
        setResult(final_results);
    }


    return (
        <div className="overflow-auto relative h-5/6">
             <div className="w-screen flex-col">
            <Header nam={{name:"Two-Back Test"}} />
        </div>
        <div  className="relative lg:w-3/4 h-full mx-auto" >
            {pageNo==1 &&
                <div>
                    <SubHeaderNback content="N-back Memory Task: Test Start"/>
                    <div className="text-2xl font-serif">
                        <h5 className="mt-10">- Hope you are done with practice. Now we will proceed to the real test.</h5>
                        <br/>
                        <h5>- The whole test will last approximately for 10 minutes. You will have to do the same task as done in the practice. You will work on 0-,1-,2- and 3- back tasks . The order of the task will be linear .</h5>
                        <br/>
                        <h5 >- After each block you can take a short break before you proceed for next task.</h5>
                        <br/>
                        <h5>- Try to respond to every letter and be as accurate as possible .</h5>
                    </div>

                </div>
            }
            {pageNo==2 &&
                <div>
                    <SubHeaderNback content="Do a 2-Back Task"/>
                    <h5 className="text-2xl font-serif mt-4">You have to press the 'A' each time the current letter is exactly the same as the one presented before last (i.e, 2 position back in the sequence). Otherwise you have to respond by pressing 'D'.</h5>
                    <NbackTestSet nback={2} n={25} max_right={7} min_right={5} nextPage={()=>nextPage(pageNo)} add_result={add_result}/>
                </div>
            }
            {pageNo==3 &&
                <div className="">
                    <SubHeaderNback content="Results :"/>
                    <Result data={finalResult}/>
                    <Link to="/dashboard">
                        <button className=" block mx-auto mt-5 px-4 py-2 mx-10 rounded-md text-2xl font-bold border-4 border-green-700 text-green-900 hover:bg-green-700 hover:text-white" >Return to Dashboard</button>
                    </Link>
                </div>
            }
            
            <div className="flex flex-row justify-self-end  mt-10">
                <div className="flex-grow"></div>
                
                {pageNo==1 &&
                    <button 
                        onClick={()=>nextPage(pageNo)}
                        className="px-4 py-2 mx-10 rounded-md text-2xl font-bold border-4 border-green-700 text-green-900 hover:bg-green-700 hover:text-white">
                        Start Test
                    </button>
                }
                <div className="flex-grow"></div>
            </div>
        </div>
        </div>
    )
}

export default T_back
