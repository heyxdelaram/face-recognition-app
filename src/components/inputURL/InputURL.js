import React from "react";
import './InputURL.css';

const InputURL = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="p-5 shadow-5 br4 bg-white">
                <input type="text" placeholder="https://example.com" className="m-1 me-2 br4 p-3"/>
                <button className="detect-btn m-1 br4 grow">Detect</button>
            </div>
        </section>
    )
}

export default InputURL;