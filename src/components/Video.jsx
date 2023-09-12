import classes from "../styles/Video.module.css";
import img from '../assets/images/item.png';

export default function Video({ id, title, noq }) {
  return (
    <div className={classes.video}>
      <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="image"/>
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
}