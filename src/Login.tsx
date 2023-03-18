import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

export function Login() {
    
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    
    function formSubmit(e){
        e.preventDefault();
        localStorage.setItem('username', username)

        if(username){ navigate('/home'); }
    }

    return(
        <>
            <div className="containe">
                <div className="">
                    <div className="custom-fiel">
                        <form onSubmit={formSubmit} id="login-form" autoComplete="off">
                        <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <label htmlFor="username" className="placeholderr">Enter Username</label>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}