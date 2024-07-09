import { useState } from "react";

const ListaProyectos = ({ proyectos }) => {
    const [proyectoElegido, setProyectoElegido] = useState(null);

    const handleEnter = (imagen) => {
        setProyectoElegido(imagen);
    };

    const handleLeave = () => {
        setProyectoElegido(null);
    };

    return (
        <>
            <h2>Proyectos:</h2>
            <hr />
            <ul className='proyectos'>
                {proyectos.map((proyecto, index) => (
                    <li
                        key={proyecto.id}
                        className={`proyecto ${
                            proyectoElegido !== null &&
                            proyectoElegido !== index
                                ? "difuminado"
                                : ""
                        } `}>
                        <h3>{proyecto.titulo}</h3>
                        <a href={proyecto.url}>
                            <img
                                className='proyecto-imagen'
                                src={proyecto.img}
                                alt={proyecto.titulo}
                                onMouseEnter={() => handleEnter(index)}
                                onMouseLeave={() => handleLeave()}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};

function NoProyectos() {
    return <p>No se han encontrado proyectos</p>;
}

export const Proyectos = ({ proyectos }) => {
    const hayProyectos = proyectos?.length > 0;
    return hayProyectos ? (
        <ListaProyectos proyectos={proyectos} />
    ) : (
        <NoProyectos />
    );
};
