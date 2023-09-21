import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function AnswerHook(videoId){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [ans, setAns] = useState();

    useEffect(()=>{
        async function fetchAnswerData(){
            const db = getDatabase();
            const reffer = ref(db/+videoId+"/answers")
            const conQuery = query(reffer, orderByKey());
            try{
                const snapshot = await get(conQuery);
                if(snapshot.exists()){
                    setAns((prevAns) => {
                    return [...prevAns, ...Object.values(snapshot.val())];
                })}

                // console.log(snapshot)
                setLoading(false);
                setError(false)
            }catch(err){
                setError(true);
                setLoading(false)
            }
        }
        fetchAnswerData()
    },[videoId])
    return {
        ans,
        error,
        loading
    }
}