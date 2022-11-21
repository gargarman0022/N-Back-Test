import React ,{useState,useEffect,useCallback} from 'react'
import ShowCard from './ShowCard';

var i = 0;
var choosen_set = []
var random_set = []
var no_of_right = 0;
var test_set = []
var correct_answer = 0;
var answer_set = []
var true_correct = 0;
var false_correct = 0;
var true_wrong = 0;
var false_wrong =0 ;
var initialTime ;
var finalTime;
var time_taken = [];

var responded = 0;
var allowedToClick = false;



const NbackTestSet = ({nback,n,max_right,min_right,nextPage,add_result}) => 
{
    const [isStarted,StartGame] = useState("no")
    const [currentIndex,updateIndex] = useState(0)
    var letters = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z']

    var currentIndexRef = React.useRef(currentIndex);

    useEffect(() => {
        i=0;
        choosen_set =[]
        random_set =[]
        no_of_right = 0
        test_set = []
        correct_answer = 0
        answer_set =[]
        true_correct = 0
        false_correct =0
        true_wrong =0
        false_wrong =0
        time_taken =[]
        responded =0
        allowedToClick = false

        no_of_right = Math.floor(Math.random() * (max_right - min_right + 1) + min_right)
        
        if (nback!=0){
            while (i < no_of_right) {     
                var random = letters[Math.floor(Math.random() * 21)]   
                choosen_set.push(random)
                i+=1
            }
        }
        else{
            for(i=0;i<no_of_right;i++){
                choosen_set.push("M")
            }
        }
        
        var no_of_random_letters = n - no_of_right
        if (nback!=0){
            no_of_random_letters = n - 2*no_of_right
        }
        i =0
        while (i < no_of_random_letters) {
            var random = letters[Math.floor(Math.random() * letters.length)]
            if (!choosen_set.includes(random)){
                var index1 = letters.indexOf(random)
                letters.splice(index1, 1)
                random_set.push(random)
                i+=1
            }
        }

        var unfilled_pos =[]
        for (i=0;i<n-nback;i++){
            unfilled_pos.push(i)
        }

        for (i=0;i<n;i++){
            test_set.push("A")
        }

        i=0
        for(i=0;i< no_of_right;i++){
            var random = unfilled_pos[Math.floor(Math.random() * unfilled_pos.length)];
            
            var index1 = unfilled_pos.indexOf(random);
            unfilled_pos.splice(index1, 1);
            
            var index2 = unfilled_pos.indexOf(random+nback);
            unfilled_pos.splice(index2,1);

            var index3 = unfilled_pos.indexOf(random-nback);
            unfilled_pos.splice(index3,1);

            console.log(random)
            console.log(choosen_set[i])
            test_set[random] = choosen_set[i];
            test_set[random+nback] = choosen_set[i];
        }

        var index = 0
        for(i=0;i<n;i++){
            if (test_set[i]=="A"){
                test_set[i] = random_set[index]
                index+=1
            }
        }


        for(i=0;i<n;i++){
            answer_set.push("D");
        }

        if(nback!=0){
            for (i=0;i<n-nback;i++){
                if (test_set[i] == test_set[i+nback]){
                    correct_answer+= 1;
                    answer_set[i+nback] = "A";
                }
            }
        }
        else{
            for (i=0;i<n-nback;i++){
                if (test_set[i] == "M"){
                    correct_answer+= 1;
                    answer_set[i+nback] = "A";
                }
            }
        }

        
        console.log(random_set)
        console.log(choosen_set)
        console.log(test_set)

      }
      , []);


    useEffect(()=>{
        if (isStarted=="yes" && currentIndex<n-1){
            allowedToClick = true;
            initialTime = Date.now();
            setTimeout(animate_letters,2500);
        }
        if (currentIndex==n-1){
            allowedToClick = true;
            initialTime = Date.now();
            setTimeout(()=>{StartGame("end")},2500);
        }
        if (isStarted=="end"){
            add_result(nback,n,correct_answer,time_taken,responded,true_correct,false_correct,true_wrong,false_wrong)
        }
    },[isStarted,currentIndex]);



    useEffect ( ()=>{
        if (isStarted==="yes"){
            document.addEventListener("keydown", record_key);
        }
        else{
            document.removeEventListener("keydown",record_key);
        }
    },[isStarted]);

    // useEffect( ()=>()=>{
    //         document.removeEventListener("keydown",record_key);
    // })

    const animate_letters = () =>{
        currentIndexRef.current = currentIndex+1;
        updateIndex(currentIndex+1);
        
    }

   
    const record_key =  useCallback((event) => {

        var choice = String (event.key).toUpperCase();
        
        
        if (choice =="A" || choice=="D"){
            if (allowedToClick){
                finalTime = Date.now();
                responded +=1

                if (choice == answer_set[currentIndexRef.current]){

                    if (choice =="A"){
                        true_correct+=1
                    }
                    else{
                        false_correct+=1
                    }

                }

                else{
                    console.log("galat kiye ho")

                    if (choice == "A"){
                        false_wrong+=1
                    }
                    else{
                        true_wrong+=1
                    }

                }

                var time_elapsed = finalTime-initialTime;
                time_taken[currentIndexRef.current] = time_elapsed;
                console.log(time_taken);
                allowedToClick = false
            }
        }
        
        }, []);
    
    return (
        <div className="flex items-center flex-col sm:h-50 lg:h-100">
            {isStarted=="no" &&
            <button onClick={()=>StartGame("yes")}
                className="absolute bottom-10  px-4 py-2 rounded-md text-2xl font-bold border-4 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                Start Task
            </button>
            }
            {(isStarted=="yes" && currentIndex<n)  &&
            <div className="flex flex-row pt-48">
                <div className="flex-grow"></div>
                <ShowCard letter={test_set[currentIndex]} no={currentIndex}/>
                <div className="flex-grow"></div>
            </div>
            }
            {isStarted=="end" && <div>
            <div className="text-center pt-48">
                <h5 className="text-3xl text-green-800 font-bold" >Task Finished</h5>
            </div>
            <button
                onClick = {nextPage}
                className="absolute bottom-10 right-0 px-4 py-2 rounded-md text-2xl font-bold border-4 border-green-700 text-green-900 hover:bg-green-700 hover:text-white">
                Next
            </button>
                </div>}
        </div>
    )
}

export default NbackTestSet
