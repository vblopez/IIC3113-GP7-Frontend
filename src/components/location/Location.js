import React, { useState } from "react";
import "./Location.css";

function Location() {

    const [location, setLocation] = useState("Santiago");

    function handleLocation() {
        console.log("handleLocation");
    }

    return (
        <div className="location">
            <div className="location__container">
                <form onSubmit={handleLocation}>
                    <input type="text" placeholder="Ingresa tu ubicación" className="location__input" onChange={v => setLocation(v.target.value)} /> 
                    <button className="location__button" onClick={handleLocation}>Buscar</button>
                </form>
            </div>
        </div>
    );
}

export default Location;