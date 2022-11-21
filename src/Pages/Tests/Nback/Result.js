import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Result = ({data}) =>{
    console.log(data);

    var mean_time = 0
    var total_correct = 0
    var total_hits = 0
    var false_alarm = 0
    var total_target = 0
    var total_attempted = 0
    var test_size = 0

    for (var i =0;i<data.length;i++){

        test_size += data[i]["n"]
        total_attempted += data[i]["responded"]
        mean_time += data[i]["mean_time"]
        total_correct += data[i]["true_correct"]+data[i]["false_correct"]
        total_hits += data[i]["true_correct"]
        false_alarm += data[i]["true_wrong"]
        total_target += data[i]["correct_answer"]
    }

    mean_time =  parseFloat(mean_time/4).toFixed(2)

    var mean_hits =  parseFloat(total_hits/4).toFixed(2)
    var mean_false =  parseFloat(false_alarm /4).toFixed(2)

    var mean_hit_rate = parseFloat((total_hits/total_attempted)*100).toFixed(2)
    var mean_false_rate = parseFloat((false_alarm/total_attempted)*100).toFixed(2)
    var overall_accuracy = parseFloat((total_correct/test_size )*100).toFixed(2)
    

    return (
        <div>
            <div className="flex mt-5">
                <div className="flex-grow text-2xl text-center self-center font-serif">
                    <h5>Following are the Results of the Tasks</h5>
                    <h5>Given below are the results N-back task wise </h5>
                </div>
                <div className="text-xl font-serif flex-grow">
                    <div className="grid grid-cols-2 gap-1 border-2 text-center rounded-xl p-3 mr-5">
                    <h5>Total Test Size</h5>
                    <h5>{test_size}</h5>
                    <h5>Total Responded</h5>
                    <h5>{total_attempted}</h5>
                    <h5>Total Correct</h5>
                    <h5>{total_correct}</h5>
                    <h5>Mean Response time</h5>
                    <h5>{mean_time} ms</h5>
                    <h5>Mean Hits</h5>
                    <h5>{mean_hits}</h5>
                    <h5>Mean False Alarm</h5>
                    <h5>{mean_false}</h5>
                    <h5>HitRate</h5>
                    <h5>{mean_hit_rate} %</h5>
                    <h5>False Alarm Rate</h5>
                    <h5>{mean_false_rate} %</h5>
                    <h5 className="text-green-700 text-2xl">Accuracy</h5>
                    <h5 className="text-green-700 text-2xl">{overall_accuracy} %</h5>
                    </div>
                </div>
            </div>

            {
            data.map((item)=>(
                <div className="mt-10 flex border-2 rounded-lg p-5 mr-5 border-gray-400">
                    <LineChart
                        width={800}
                        height={300}
                        data={item["chart_data"]}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="index" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="time_taken"  stroke="#8884d8" activeDot={{ r: 10 }} strokeWidth={2} />
                    </LineChart>
                    <div className="flex-grow font-serif text-xl pl-5">
                        <h5 className="text-3xl text-center mb-10"><u>{item.nback} -back</u></h5>
                        <h5>Responded: {item.responded}</h5>
                        <h5>Correct Answers: {item.true_correct+item.false_correct}</h5>
                        <h5>Accuracy : {parseFloat(((item.true_correct+item.false_correct)/item.n )*100).toFixed(2)} %</h5>
                        <h5>Mean Response Time(in ms): {item.mean_time}</h5>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Result
