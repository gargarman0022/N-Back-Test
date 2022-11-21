import React ,{ useState }from 'react'
import NbackTestSet from '../../../Components/NbackTestSet'
import SubHeaderNback from '../../../Components/SubHeaderNback'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Result from './Result';
var final_results = []

const Demo = (props) => {

    const [pageNo,changePage] = useState(1)
    const [finalResult,setResult] = useState([])

    const nextPage = (page) =>{
        if (page<6){
            changePage(page+1)
        }
    }

    const previousPage = (page) =>{
        if (page>1){
            changePage(page-1)
        }
    }

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
        <div  className="relative lg:w-3/4 h-full mx-auto" >
            {pageNo==1 &&
                <div>
                    <SubHeaderNback content="N-back Memory Task: Practice Start"/>
                    <div className="text-2xl font-serif">
                        <br/>
                        <h5>-This test gets harder with increase in the number n(N-Back Level) of the test.</h5>
                        <br/>
                        <h5>-The easiest level being 0 for most of the people.</h5>
                        <br/>
                        <h5 >-In order to gain familiarity with the task , you can now practice it by doing a 0-back test, a 1-back, a 2-back and a 3-back in that order.</h5>
                        <br/>
                    </div>

                </div>
            }
            {pageNo==2 &&
                <div>
                    <SubHeaderNback content="Do a 0-Back Task"/>
                    <h5 className="text-2xl font-serif mt-4">You have to press the 'A' each time the current letter is 'M'. Otherwise you have to respond by pressing 'D'.</h5>
                    <NbackTestSet nback={0} n={10} max_right={3} min_right={2} nextPage={()=>nextPage(pageNo)} add_result={add_result}/>
                </div>
            }
            {pageNo==3 &&
                <div>
                    <SubHeaderNback content="1-Back Task"/>
                    <h5 className="text-2xl font-serif mt-4">You have to press the 'A' each time the current letter is exactly the same as the one presented before (i.e, 1 position back in the sequence). Otherwise you have to respond by pressing 'D'.</h5>
                    <NbackTestSet nback={1} n={10} max_right={3} min_right={2} nextPage={()=>nextPage(pageNo)} add_result={add_result}/>
                </div>
            }
            {pageNo==4 &&
                <div>
                    <SubHeaderNback content="2-Back Task"/>
                    <h5 className="text-2xl font-serif mt-4">You have to press the 'A' each time the current letter is exactly the same as the one presented before last (i.e, 2 position back in the sequence). Otherwise you have to respond by pressing 'D'.</h5>
                    <NbackTestSet nback={2} n={10} max_right={3} min_right={2} nextPage={()=>nextPage(pageNo)} add_result={add_result}/>
                </div>
            }
            {pageNo==5 &&
                <div>
                    <SubHeaderNback content="Do a 3-Back Task"/>
                    <h5 className="text-2xl font-serif mt-4">You have to press the 'A' each time the current letter is exactly the same as the one presented three positions back in the sequence. Otherwise you have to respond by pressing 'D'.</h5>
                    <NbackTestSet nback={3} n={10} max_right={3} min_right={2} nextPage={()=>nextPage(pageNo)} add_result={add_result}/>
                </div>
            }
            {pageNo==6 &&
                <div className="">
                    <SubHeaderNback content="Results :"/>
                    <Result data={finalResult}/>
                    <button className=" block mx-auto mt-5 px-4 py-2 mx-10 rounded-md text-2xl font-bold border-4 border-green-700 text-green-900 hover:bg-green-700 hover:text-white" onClick={props.goToTask}>Go to Real Test</button>
                </div>
            }

            <div className="flex flex-row justify-self-end  mt-20">
                <div className="flex-grow"></div>
                
                {pageNo==1 &&
                    <button 
                        onClick={()=>nextPage(pageNo)}
                        className="px-4 py-2 rounded-md text-2xl font-bold border-4 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                        Start Practice
                    </button>
                }
                <div className="flex-grow"></div>
            </div>
        </div>
        </div>
    )
}

export default Demo
