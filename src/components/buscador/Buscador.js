import React from "react";
import "./Buscador.css";
import allDrugs from "../../events.json";

function Buscador({ setDrugs }) {

    const handleSearch = (medicamento) => {
        let drugs = [];
        let newDrugs = [];
        if (medicamento === "") 
        {
            drugs = [-1];
        } 
        else 
        {
            for (let i = 0; i < allDrugs.length; i++) {
                if (allDrugs[i].nombre.toLowerCase().startsWith(medicamento.toLowerCase())) {
                    drugs.push(allDrugs[i]);
                }
            }

            // We sort alphabetically by drug name
            drugs.sort((a, b) => {
                if (a.nombre < b.nombre) {
                    return -1;
                }
                if (a.nombre > b.nombre) {
                    return 1;
                }
                return 0;
            });

            for (let i = 0; i < drugs.length; i++) {
                let name = drugs[i].nombre;
                let instances = [];
                for (let j = 0; j < drugs.length; j++) {
                    if (drugs[j].nombre === name) {
                        let instance = {
                            farmacia: drugs[j].farmacia,
                            precio: drugs[j].precio
                        };
                        instances.push(instance);
                    }
                }
                newDrugs.push({
                    nombre: name,
                    instancias: instances
                });
            }

            // We remove duplicates
            drugs = newDrugs.filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t.nombre === thing.nombre
                ))
            );
            
            // we sort the drugs by price
            for (let i = 0; i < drugs.length; i++)
            {
                for (let j = 0; j < drugs[i].instancias.length; j++) {
                    drugs[i].instancias[j].precio = '$' + drugs[i].instancias[j].precio.split('$')[1];
                }

                drugs[i].instancias.sort((a, b) => {
                    return parseInt(a.precio.split("$")[1].replace(".", "")) - parseInt(b.precio.split("$")[1].replace(".", ""));
                });
            }
        }

        setDrugs(drugs);
    }

    return (
        <div className="buscador">
            <div className="buscador__container">
                <form>
                    <input type="text" placeholder="Ingrese Medicamento" className="buscador__input" onChange={v => handleSearch(v.target.value) } />
                </form>
            </div>
        </div>
    );
}

export default Buscador;