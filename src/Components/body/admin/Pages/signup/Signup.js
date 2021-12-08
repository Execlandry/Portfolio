import React from 'react';
import './signup.css';
import Signuppic from '../../../../../assets/Signuppic.png'
import {NavLink} from 'react-router-dom'
const Signup = () => {
    return (
        <div className="signup">
            <div className="signup-container">

                <div className="signup-section">
                    <label className="signup-section-title">Signup</label>
                    <div className="signup-section-form">
                        <form className="signup-reg-form" id="signup-reg-form">

                            <div className="form-group">
                                <label htmlFor="name"><i class="user outline icon"></i></label>
                                <input type="text" name="name" id="name" autoComplete="off"
                                    placeholder="Enter your Name" />
                            </div>


                            <div className="form-group">
                                <label htmlFor="email"> <i class="address card outline icon"></i> </label>
                                <input type="email" name="email" id="email" autoComplete="off"
                                    placeholder="Enter your Email" />
                            </div>


                            <div className="form-group">
                                <label htmlFor="phone"><i class="phone icon"></i></label>
                                <input type="number" name="phone" id="phone" autoComplete="off"
                                    placeholder="Enter your Phone Number" />
                            </div>


                            <div className="form-group">
                                <label htmlFor="work"><i class="briefcase icon"></i></label>
                                <input type="text" name="work" id="work" autoComplete="off"
                                    placeholder="Enter your Role" />
                            </div>


                            <div className="form-group">
                                <label htmlFor="password"><i class="key icon"></i></label>
                                <input type="password" name="password" id="password" autoComplete="off"
                                    placeholder="Enter your Password" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cpassword"><i class="key icon"></i></label>
                                <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                    placeholder="Confirm your Password" />
                            </div>

                                <div className="form-group">
                                    <input className="form-submit" type="submit" name="signup" id="signup" value="Register" />
                                </div>
                        </form>

                        <div className="signup-image">
                            <figure>
                                <img src={Signuppic} alt="registration" />
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
