import React, { useState } from 'react';
import './signup.css';
import Signuppic from '../../../../../assets/Signuppic.png'
import { NavLink,useNavigate } from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""
    })

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const PostData = async (e) => {
        e.preventDefault();
        const { name,
            email,
            phone,
            work,
            password,
            cpassword }=user;

            const res = await fetch("/register",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name,
            email,
            phone,
            work,
            password,
            cpassword 

                })
            })
            const data = await res.json();
            if(data.status === 422 || !data){
                window.alert("Invalid Registration")

            }
            else{
                window.alert(" Registered")

                navigate("/signin")
            }


    }

    return (
        <div className="signup">
            <div className="signup-container">

                <div className="signup-section">
                    <label className="signup-section-title">Signup</label>
                    <div className="signup-section-form">
                        <form method="POST" className="signup-reg-form" id="signup-reg-form">

                            <div className="form-group">
                                <label htmlFor="name"><i class="user outline icon"></i></label>
                                <input type="text" name="name" id="name" autoComplete="off"
                                    value={user.name}
                                    onChange={handleInputs}
                                    placeholder="Enter your Name" />
                            </div>


                            <div className="form-group">
                                <label htmlFor="email"> <i class="address card outline icon"></i> </label>
                                <input type="email" name="email" id="email" autoComplete="off"
                                    value={user.email}
                                    onChange={handleInputs}
                                    placeholder="Enter your Email" />
                            </div>


                            <div className="form-group">
                                <label htmlFor="phone"><i class="phone icon"></i></label>
                                <input type="number" name="phone" id="phone" autoComplete="off"
                                    value={user.phone}
                                    onChange={handleInputs}
                                    placeholder="Enter your Phone Number" />
                            </div>


                            <div className="form-group">
                                <label htmlFor="work"><i class="briefcase icon"></i></label>
                                <input type="text" name="work" id="work" autoComplete="off"
                                    value={user.work}
                                    onChange={handleInputs}
                                    placeholder="Enter your Role" />
                            </div>


                            <div className="form-group">
                                <label htmlFor="password"><i class="key icon"></i></label>
                                <input type="password" name="password" id="password" autoComplete="off"
                                    value={user.password}
                                    onChange={handleInputs}
                                    placeholder="Enter your Password" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cpassword"><i class="key icon"></i></label>
                                <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                    value={user.cpassword}
                                    onChange={handleInputs}
                                    placeholder="Confirm your Password" />
                            </div>

                            <div className="form-group">
                                <input onClick={PostData} className="form-submit" type="submit" name="signup" id="signup" value="Register" />
                            </div>
                        </form>

                        <div className="signup-image">
                            <figure>
                                <img src={Signuppic} alt="registration" className="signup-picture" />
                            </figure>
                            <NavLink to="/signin" className="signup-image-link">I am already Registered</NavLink>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Signup
