import { Link } from "react-router-dom";

export const MenuNav = () => {
    const handleDesplazar = (evento) => {
        evento.preventDefault();
        const contactoSection = document.getElementById("contacto");
        if (contactoSection) {
            contactoSection.scrollIntoView({
                behavior: "smooth",
            });
        }
    };
    return (
        <nav className='contenedor-nav'>
            <section className='menu-nav'>
                <Link className='link' to='/'>
                    🏠 Home
                </Link>
                |
                <Link className='link' to='/about'>
                    ⛹ Sobre mí
                </Link>
                |
                <Link className='link' to='/contact' onClick={handleDesplazar}>
                    ✉ Contacto
                </Link>
            </section>
        </nav>
    );
};
