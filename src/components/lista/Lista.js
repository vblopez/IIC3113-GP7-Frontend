import React, { useEffect } from "react";
import "./Lista.css";

function Lista({ drugs }) {

    useEffect (() => {
        console.log('medicamento: ' + drugs[0]);
    }, [drugs]);

    return (
        <div className="Lista">
            <div className="Lista__container">
                {
                    drugs.length > 0 ? (
                    drugs.map((drug, index) => {
                        return (
                            <div className="Lista_item" key={index}>
                                <div className="Lista__item__container">
                                    <div className="Lista__item__container__left">
                                        <div className="Lista__item__container__left__nombre">{drug.nombre}</div>
                                        <div className="Lista__item__container__left__precio">{drug.precio}</div>
                                    </div>
                                    <div className="Lista__item__container__right">
                                        <div className="Lista__item__container__right__farmacia">{drug.farmacia}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })) : (
                        <div className="Lista_item">
                            <div className="Lista__item__container">
                                <div className="Lista__item__container__left">
                                    <div className="Lista__item__container__left__nombre">No hay medicamentos</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Lista;