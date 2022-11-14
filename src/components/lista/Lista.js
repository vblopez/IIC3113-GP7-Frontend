import React from "react";
import "./Lista.css";

function Lista({ drugs }) {

    function Instance({ instance, index }) {
        return (
            <>
                {index !== 0 ? (
                    <p className="cont">
                    <img className='image' src={instance.imagen} alt="imagen" />
                        <div className="Lista_item" key={index}>
                            <div className="Lista__item__container">
                                <div className="Lista__item__container__left">
                                    <div className="Lista__item__container__left__farmacia">{instance.farmacia}</div>
                                </div>
                                <div className="Lista__item__container__right">
                                    <div className="Lista__item__container__right__precio">{instance.precio}</div>
                                </div>
                                <a href={instance.link} className="link">Comprar</a>
                            </div>
                        </div>
                    </p>
                ) : (
                <p className="cont">
                <img className='image' src={instance.imagen} alt="imagen" />
                <div className="Lista_item" key={index}>
                    <div className="Lista__item__container_0">
                        <div className="Lista__item__container__left">
                            <div className="Lista__item__container__left__farmacia">{instance.farmacia}</div>
                        </div>
                        <div className="Lista__item__container__right">
                            <div className="Lista__item__container__right__precio">{instance.precio}</div>
                        </div>
                        <a href={instance.link} className="link">Comprar</a>
                    </div>
                </div>
                </p>
                )}
            </>
        );
    }

    function Drug({ drug, index }) {
        return (
            <>
                <div className="nombre">{drug.nombre}</div>
                {drug.instancias.map((instance, indexx) => (
                    <Instance instance={instance} index={indexx} />
                ))}
            </>
        );
    }

    return (
        <div className="Lista">
            <div className="Lista__container">
                {
                    drugs.length > 0 ? (
                        drugs[0] === -1 ? (
                            <div className="Lista_item">
                                <div className="Lista__item__container__left">
                                    <div className="Lista__item__container__left__nombre">Ingrese el Medicamento que desea buscar</div>
                                </div>
                            </div>
                        ) : (
                            drugs.map((drug, index) => {
                                return (
                                    <Drug drug={drug} index={index} />
                                );
                            })
                        )
                    ) : (
                        <div className="Lista_item">
                            <div className="Lista__item__container__left">
                                <div className="Lista__item__container__left__nombre">No se encontraron medicamentos</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Lista;