import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const user = false;
    return (
        <div>
            <h1>
                Welcome to Log In Page
            </h1>

            {user ?
                <button >Sign Out</button> :

                <div className="login-container">
                    <form>
                        <h2>Login</h2>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="email" name="email" id="email" required placeholder='Please Enter Your Email' />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" id="password" required placeholder='Please Enter Your Password' />
                        </div>
                        <button type="submit">Login</button>
                        <br />
                        <button className='googlesignin'>Sign Up With Google</button>
                        <p>
                            <small>
                                New to Ema-John? <span> <Link to="/signup">Sign Up</Link></span>
                            </small>
                        </p>
                    </form>
                </div>}
            {user &&
                <div>
                    <h1>
                    </h1>
                </div>}

        </div>
    );
};

export default Login;