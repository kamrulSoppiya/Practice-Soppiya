import Form from "./Form";
import { Link, useNavigate   } from "react-router-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import TextInput from "./TextInput";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
export default function SignUpForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [conPass, setConPass] = useState("");
    const [agree, setAgree] = useState("");
    
    //Server Data Controll
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    // Context Data from UseAuth
    const {signup} = useAuth();
    let navigateTo = useNavigate ();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError("");
            setLoading(true)
            await signup(email, pass, name);
            navigateTo("/");

        }catch(err){
            console.log(err);
            setLoading(false);
            setError('Error Occured');
        }
    }

    return (
        <Form style={{height:'500px'}} onSubmit={handleSubmit}>
            <TextInput type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} icon="person" />

            <TextInput type="text" placeholder="Enter email" icon="alternate_email" value={email} onChange={(e)=>setEmail(e.target.value)} />

            <TextInput type="password" placeholder="Enter password" value={pass} onChange={(e)=>setPass(e.target.value)} icon="lock" />

            <TextInput type="password" placeholder="Confirm password" value={conPass} onChange={(e)=>setConPass(e.target.value)} icon="lock_clock" />

            <Checkbox text="I agree to the Terms &amp; Conditions" value={agree} onChange={(e)=>setAgree(e.target.value)} />

            <Button type="submit" disable={loading}><span>Submit Now</span></Button>

            {error && <p className="error">{error}</p>}
            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>

      </Form>
    );
}