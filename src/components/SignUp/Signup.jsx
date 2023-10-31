import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { AuthContex } from '../providers/AuthProviders';

const Signup = () => {
    const [error, setError] = useState(null);
    const { setUser, createUser } = useContext(AuthContex);
    const handleSignup = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password)

        if (password.length > 6) {
            setError('Password is too Short!!!')
            return
        }
        else if (email != confirmPassword) {
            setError('Password Do not Match');
            return
        }
        else {
            setError(null)
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    setUser(user)
                })
                .catch(error => {
                    console.log(error)
                })
        };


    }
    return (
        <div>
            <h1>
                Welcome to Sign Up Page
            </h1>

            <div className="login-container">
                <form onSubmit={handleSignup}>
                    <h2>Sign Up</h2>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="email" name="email" id="email" required placeholder='Please Enter Your Email' />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" id="password" required placeholder='Please Enter Your Password' />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" required placeholder='Confirm Password' />
                    </div>
                    {error && <p className='error-msg'>
                        <small>
                            {error}
                        </small>
                    </p>}
                    <button type="submit" >Sign Up</button>
                    <p>
                        <small>
                            Already Have An Account? <span> <Link to="/login">Log In</Link></span>
                        </small>
                    </p>
                    <button className='googlesignin'>Sign Up With Google</button>
                </form>
            </div>
        </div>

    );
};

export default Signup;