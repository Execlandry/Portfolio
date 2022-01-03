import './signin.css';
// import signinpic from '../../../../../assets/Signuppic.png'

import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';


const Signin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        //getting the response from pending state
        const data = res.json()

        if (res.status === 400 || !data) {
            window.alert("Invalid Credential")

        }
        else {
            window.alert("login Successfull")
            navigate('/dashboard')

        }

    }
    return (<>
        <body>
            <div className="main">
                <p className="sign" align="center">Sign in</p>
                <form className="form1" method="POST">

                    <input className="un " align="center" type="email" name="email" id="email" autoComplete="off"
                        value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />

                    <input className="pass" type="password" name="password" id="password" autoComplete="off"
                        value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />

                    <NavLink to="/dashboard">
                        <input className="submit" type="submit" name="signin" id="signin"
                            onClick={loginUser} value="Login" />
                    </NavLink>

                </form>
            </div>
                {/* <div className="signin-image">
                    <figure>
                        <img src={signinpic} alt="registration" className="signup-picture" />
                    </figure>

                </div> */}
        </body>
    </>
    )
}

export default Signin