import React from "react";
import "../inputURL/InputURL.css";

const Login = ({changeRoute}) => {
    return (
    <div className="m-5 d-inline-block p-5 shadow-5 br3 bg-white">
        <p className="f2" style={{fontWeight: "bold"}}>Login</p>
        <div className="">
            <input type="email" placeholder="Email" className="m-3 br2 p-3" />
        </div>
        
        <div className="">
            <input type="password" placeholder="Password" className="m-3 br2 p-3" />
        </div>
        <button onClick={() => changeRoute("home")} className="detect-btn m-1 br4 grow" style={{backgroundColor: "#0099ff"}}type="button">Continue</button>
    </div>
    )
}

export default Login;
