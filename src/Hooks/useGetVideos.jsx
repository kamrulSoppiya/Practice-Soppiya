import { useEffect, useState } from "react";
import {get,getDatabase,orderByKey, query, ref, } from "firebase/database";
export default function useGetVideos() {
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        async function fetchVideosData(){
            const db = getDatabase();
            const reffer = ref(db, "videos");
            const videoQuery =query(reffer, orderByKey());

            try{
                setError(false);
                setLoading(true);
                const snapshot = await get(videoQuery);
                setLoading(false);
                // console.log(snapshot.val())
                if (snapshot.exists()) {
                  setVideos((prevVideos) => {
                    return [...prevVideos, ...Object.values(snapshot.val())];
                  });
                }
            }catch(err){
                console.log(err);
                setLoading(true);
                setError(`Error Occured : ${err}`);
            }
        }

        fetchVideosData()
    },[])
    return {
        loading,
        error, 
        videos
    };
}
