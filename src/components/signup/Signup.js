import React from "react";
import "../inputURL/InputURL.css";

const Signup = () => {
    return (
    <div className="m-5 d-inline-block p-5 shadow-5 br3 bg-white">
        <p className="f2" style={{fontWeight: "bold"}}>Sign up</p>
        <div className="">
            <input type="text" placeholder="Username" className="m-3 br2 p-3" />
        </div>
        <div className="">
            <input type="email" placeholder="Email" className="m-3 br2 p-3" />
        </div>
        
        <div className="">
            <input type="password" placeholder="Password" className="m-3 br2 p-3" />
        </div>
        <button className="detect-btn m-1 br4 grow" style={{backgroundColor: "#0099ff"}}type="button">Register</button>
    </div>
    )
}

export default Signup;
