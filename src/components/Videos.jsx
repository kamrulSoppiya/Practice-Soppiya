import { Link } from "react-router-dom";
import classes from "../styles/Videos.module.css";
import Video from "./Video";
import useGetVideos from "../Hooks/useGetVideos";

export default function Videos() {
  const {loading, error, videos} = useGetVideos();
  return (
      <div className={classes.videos}>
        {videos.map((video,index)=>(
          <Link to="#" key={index}>
            <Video id={video.youtubeID} title={video.title} noq={video.noq}/>
          </Link>
        ))}
          
        {/* })} */}
        {!loading && videos.length === 0 && <div>No data found!</div>}
        {error && <div>There was an error!</div>}
        {loading && <div>Loading...</div>}
      </div>
  );
}
