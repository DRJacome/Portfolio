export const Header = () => {
    const fotoPerfil = "user-profile";

    return (
        <>
            <header>
                <div className='contenedor-header'>
                    <img  className="animate__animated animate__fadeInRight"
                        id='fotoPerfil'
                        src={`./assets/${fotoPerfil}.jpg`}
                        alt='Foto de perfil'
                    />
                    <div className='titulo animate__animated animate__fadeInLeft'>
                        <h1>Hola! Soy David Rodríguez</h1>
                        <hr />
                        <h2>Bienvenido a mi Portfolio</h2>
                    </div>
                </div>
            </header>
        </>
    );
};
