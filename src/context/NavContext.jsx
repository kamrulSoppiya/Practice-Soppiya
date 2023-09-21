import { createContext } from "react"
import useGetVideos from "../Hooks/useGetVideos";
// eslint-disable-next-line react-refresh/only-export-components
export const context = createContext();
export default function NavContext({children}) {
    const {videos} = useGetVideos();
    let getValue;

    getValue =videos.map((video)=>{
        return video.youtubeID;
    } )
    return (
        <context.Provider value={{getValue}}>
            {children}
        </context.Provider>
    )
}
