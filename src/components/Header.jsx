export const Header = () => {
    const fotoPerfil = "user-profile";

    return (
        <>
            <header>
                <div className='contenedor-header'>
                    <img
                        id='fotoPerfil'
                        src={`./assets/${fotoPerfil}.jpg`}
                        alt='Foto de perfil'
                    />
                    <div className='titulo'>
                        <h1>Hola! Soy David Rodríguez</h1>
                        <hr />
                        <h2>Bienvenido a mi Portfolio</h2>
                    </div>
                </div>
            </header>
        </>
    );
};
