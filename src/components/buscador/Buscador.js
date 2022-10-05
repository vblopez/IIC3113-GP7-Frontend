import React, { useState } from "react";
import "./Buscador.css";

function Buscador() {

    const [medicamento, setMedicamento] = useState("Paracetamol");

    function handleSearch() {
        console.log("handleSearch");
    }

    return (
        <div className="buscador">
            <div className="buscador__container">
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder="Ingrese Medicamento" className="buscador__input" onChange={v => setMedicamento(v.target.value)} />
                </form>
            </div>
        </div>
    );
}

export default Buscador;