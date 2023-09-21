import classes from "../styles/ProgressBar.module.css";

export default function ProgressBar({nextQuestion, prevQuestion,complete, submit, buttonText}) {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        {/* <span className="material-icons-outlined"> arrow_back </span> */}
        <button className="material-icons-outlined" style={{Outline:"none", border:"none", background:"#47f5901g", hover:"#47f5953a"}} type="button">arrow_back</button>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{complete}%</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{width:`${complete}%`}}></div>
        </div>
      </div>
      {/* <Link to="/result">
        <Button className={classes.next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link> */}
     <button type="button" className={classes.progressButton} onClick={complete===100?submit:nextQuestion}>{complete===100?"Submit":buttonText}</button>
     
    </div>
  );
}
