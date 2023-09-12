import { Link } from "react-router-dom";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
import Menu from "./Menu";
import useWindowWidth from "../Hooks/useNavHooks";

export default function Nav() {
  const screenSize = useWindowWidth(760);
  
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <h3 style={{color:'#1cb8e8'}}>Soppiya</h3>
          </Link>
        </li>
      </ul> 
      {!screenSize?(<Menu />):''}
      <Account />
    </nav>
  );
}
