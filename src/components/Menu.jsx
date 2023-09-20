import { NavLink } from 'react-router-dom';
// import classes from '../styles/Menu.modules.css';
export default function Menu(){

    return(
        <div>
            <ul style={{display:'flex', gap:'20px'}}>
                <li><NavLink className={({isActive})=> isActive?"active":"dim"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=> isActive?"active":"dim"} to="/quiz">Quiz</NavLink></li>
                <li><NavLink className={({isActive})=> isActive?"active":"dim"} to="/login">Contact</NavLink></li>
                <li><NavLink className={({isActive})=> isActive?"active":"dim"} to="/result">Pages</NavLink></li>
            </ul>
        </div>
    );
}