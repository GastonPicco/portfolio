import "./AboutMeText.css"
export const AboutMeText = () => {
    return (
        <>
            <h2 className="about-me-title">¿Quien soy?</h2>
            <img src={`src/assets/background.jpg`} alt='' className='about-me-description-image-inner'/>
            <p
                className="about-me-text">Para asegurarte de que el espacio entre los elementos también esté presente a los lados del primer y último elemento, puedes usar justify-content: space-around en lugar de space-between. Sin embargo, si necesitas un control más preciso, puedes agregar padding al contenedor o usar una combinación de space-between y :before y :after pseudo-elementos.
            </p>
        </>

    )
}