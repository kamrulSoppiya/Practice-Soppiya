import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {context} from '../context/NavContext';
// import classes from '../styles/Menu.modules.css';
export default function Menu(){
    const useDataContext = useContext(context);
    return(
        <div>
            <ul style={{display:'flex', gap:'20px'}}>
                <li><NavLink className={({isActive})=> isActive?"active":"dim"} to="/">Home</NavLink></li>
                {/* <li><NavLink className={({isActive})=> isActive?"active":"dim"} to={`/quiz/${useDataContext.getValue}`}>Quiz</NavLink></li> */}
                <li><NavLink className={({isActive})=> isActive?"active":"dim"} to="/login">Contact</NavLink></li>
                <li><NavLink className={({isActive})=> isActive?"active":"dim"} to="/result">Pages</NavLink></li>
            </ul>
        </div>
    );
}