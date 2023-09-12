import { useCallback, useEffect, useState } from "react";

export default function useWindowWidth(size){
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    const checkDisplay = useCallback(()=>{
       setOnSmallScreen(window.innerWidth<size);
    },[size]);

    useEffect(()=>{
        checkDisplay();
        window.addEventListener('resize', checkDisplay);

        return ()=> window.removeEventListener('resize',checkDisplay);
    },[checkDisplay]);

    return onSmallScreen;
}