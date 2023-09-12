import { Link, useNavigate } from "react-router-dom";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Signup() {
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // get data from Context
  const {login} = useAuth();
  const navigate = useNavigate();
  async function handelSubmit(e){
    e.preventDefault();
    try{
      setLoading(true);
      setError("");
      await login(email, pass);
      navigate("/");
    }catch(err){
      console.log(err);
      setLoading(false);
      setError('Get A Error');
    }
  }
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration />
        <Form className={`${classes.login}`} onSubmit={handelSubmit}>
          <TextInput type="text" placeholder="Enter email" icon="alternate_email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

          <TextInput type="password" placeholder="Enter password" icon="lock" value={pass} onChange={(e)=>setPass(e.target.value)} />

          <Button type="submit" disabled={loading}><span>Submit Now</span></Button>
          {error && <p className="error">{error}</p>}
          <div className="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
        </Form>
      </div>
    </>
  );
}
