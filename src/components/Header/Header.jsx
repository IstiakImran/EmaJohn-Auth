import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import AuthProviders, { AuthContex } from '../providers/AuthProviders';

const Header = () => {
    const { user, setUser, signout } = useContext(AuthContex);
    const handleSignOut = () => {
        signout()
            .then(restlt => {
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>

                {user ?
                    <>
                        <Link to="/">{user}</Link>
                        <Link to="/">Log Out</Link>
                    </>
                    :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>}
            </div>
        </nav>
    );
};

export default Header;