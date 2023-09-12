import image from "../assets/images/success.png";
import classes from "../styles/Summary.module.css";

export default function Summary() {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Result
        </p>
      </div>

      {/* <div className={classes.badge}>
        <img src={image} alt="Success" />
      </div> */}
    </div>
  );
}
