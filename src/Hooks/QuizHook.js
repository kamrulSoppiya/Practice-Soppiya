import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function QuizHook(videoId){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [question, setQuestion] = useState([]);
    
    useEffect(() => {
        async function fetchQuizData(){
            const db=getDatabase();
            const quizRef=ref(db,"quiz/"+videoId+"/questions"); 
            const questionQuery=query(quizRef,orderByKey());
            try{
                setError(false);
                setLoading(true);
                const snapshot=await get(questionQuery);
               
                setLoading(false);
                console.log(snapshot.val());
                
                if(snapshot.exists()){
                    setQuestion((prevQuestions) => {
                        return [...prevQuestions, ...Object.values(snapshot.val())];
                    });
                }
            }catch(err){
                // console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        fetchQuizData();
    }, [videoId]);

    
    return{
        loading,
        error,
        question
    } 
}