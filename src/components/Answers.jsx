import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

// eslint-disable-next-line react/prop-types
export default function Answers({handeler,options}) {
  return (
    <div className={classes.answers}>
      {options.map((option, index)=>(
        <div key={index}>
          {
              (true)?(<Checkbox handel={handeler} index={index} option={option} text={option.title}/>)
              :(<Checkbox index={index} option={option} text={option.title} />)
          }
          
        </div>
          // <Checkbox key={index} handeler={handeler} input="true" className={classes.answer} text={option.title} />
      ))}
    </div>
  );
}
