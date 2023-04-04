import React from 'react';
import './Navigation.css';
import logo from '../../face-id.png'

const Navigation = () => {
    return(
        <nav className="d-flex justify-content-between align-items-center m-1 p-2">
            <a className="dim d-flex align-items-center" href='#'>
                <img style={{width: "auto", maxHeight: "50px"}} src={logo} alt="logo"/>
                <p className="mt-2 p-3 facereco f3">Facereco</p>
            </a>
            <a href="#">
                <button className="signup-btn grow">Sign up</button>
            </a>
        </nav>
    )
}
export default Navigation;