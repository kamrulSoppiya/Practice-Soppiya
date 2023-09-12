import { Link } from "react-router-dom";
import classes from "../styles/Account.module.css";
import { useAuth } from "../context/AuthContext";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <>
      {currentUser?(<div style={{display:'flex', alignItems:'center'}}>
        <span className="material-icons-outlined" title="Account">account_circle</span>
        <span>{currentUser.displayName}</span>
        <span className="material-icons-outlined" title="Logout" onClick={logout}>{" "}logout{" "}</span>
      </div>):(<div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signup">Signup</Link>
      <span className="material-icons-outlined" title="Account">
        login
      </span>
      <Link to="/login">Login</Link>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>)}
    </>
  );
}
