import { useEffect, useReducer, useState } from "react";
import QuizHook from "../../Hooks/QuizHook";
import _, { set } from "lodash";
import { useNavigate, useParams } from "react-router-dom";
import Answers from "../Answers";
import { useAuth } from "../../context/AuthContext";
import { getDatabase, ref } from "firebase/database";
import ProgressBar from "../ProgressBar";
import MiniPlayer from "../MiniPlayer";

const initialState = null;

const reducer =(state, action)=>{
    switch(action.type){
        case "questions":
            action.value.forEach((question)=>{
                question.options.forEach((option)=>{
                    option.checked = false;
                })
            })
            return action.value;
        case "answers":
            // eslint-disable-next-line no-case-declarations
            const questions = _.cloneDeep(state);
            questions[action.questionId].options[action.optionIndex].checked=action.value;
            return questions;
        
        default:
            return state;
    }
}


export default function QuizDataClient(){
    const {id}=useParams();
    const {loading, error, question} = QuizHook(id);
    const [qna, dispatch] = useReducer(reducer,initialState);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const {currentUser} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch({
            type:"questions",
            value:question
        })
    }, [question])

    function handeler(e,index){
        dispatch({
            type:"answers",
            questionId:currentQuestion,
            optionIndex:index,
            value:e.target.checked,
        });
    }
    function nextQuestion(){
        if(currentQuestion+1<question.length){
            setCurrentQuestion((prevQuestions)=>prevQuestions+1);
        }
    }

    function prevQuestion(){
        if(currentQuestion+1<question.length){
            setCurrentQuestion((prevQuestions)=>prevQuestions-1);
        }
    }

    async function submit(){
        const {uid} = currentUser;
        const db=getDatabase();
        const resultRef=ref(db,`result/${uid}`);

        await set(resultRef,{
            [id]:qna
        });

        navigate(`/result/${id}`);
    }

    const complete = question.length>0?((currentQuestion+1)/question.length)*100:0;

    return(
        <>
            {loading && <div>Loading ...</div>}
            {error && <div>There was an error!</div>}
            {!loading && !error && qna && qna.length>0 && (
            <>
                {console.log(qna)}
                <h1>সঠিক উত্তরে টিক চিহ্ন দেউ , হাড়ি </h1>
                <h1>{qna[currentQuestion].title}</h1>
                <Answers handeler={handeler} options={qna[currentQuestion].options} />
                <ProgressBar nextQuestion={nextQuestion} buttonText="Next Page" complete={complete} prevQuestion={prevQuestion} submit={submit}/>
                <MiniPlayer />
            </>
            )}
        </>
    );
}