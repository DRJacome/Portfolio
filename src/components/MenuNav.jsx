import { Link, useNavigate } from "react-router-dom";

export const MenuNav = () => {
    const navigate = useNavigate();

    const handleDesplazar = (evento) => {
        evento.preventDefault();
        navigate("/", { replace: true });
        setTimeout(() => {
            const footerContacto = document.getElementById("contacto");
            if (footerContacto) {
                footerContacto.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }, 100);
    };
    return (
        <nav className='contenedor-nav animate__animated animate__fadeInLeft'>
            <section className='menu-nav'>
                <Link className='link' to='/'>
                    Home
                </Link>
                |
                <Link className='link' to='/about'>
                    Sobre mí
                </Link>
                |
                <Link className='link' to='/cv'>
                    CV
                </Link>
                |
                <Link className='link' to='/' onClick={handleDesplazar}>
                    RRSS
                </Link>
            </section>
        </nav>
    );
};
