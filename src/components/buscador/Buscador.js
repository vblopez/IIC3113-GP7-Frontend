import React, { useState } from "react";
import "./Buscador.css";
import allDrugs from "../../drugs.json";

function Buscador({ setDrugs }) {

    const [medicamento, setMedicamento] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        let drugs = [];
        for (let i = 0; i < allDrugs.length; i++) {
            if (allDrugs[i].nombre === medicamento) {
                drugs.push(allDrugs[i]);
                console.log(allDrugs[i].nombre + " " + allDrugs[i].precio + " " + allDrugs[i].farmacia);
            }
        }

        // we sort the drugs by price
        drugs.sort((a, b) => {
            return parseInt(a.precio.split("$")[1].replace(".", "")) - parseInt(b.precio.split("$")[1].replace(".", ""));
        });

        setDrugs(drugs);
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