import './Aboutme.css'
export const Aboutme = ({image = null, text}) => {

    return (
        <div id='aboutMe' className='about-me-container'>
            <section className='about-me-description'>
                <section className='about-me-description-text'> {text}  </section>
                <img src={`src/assets/${image}.jpg`} alt='' className='about-me-description-image'/>
            </section>
        </div>
       )
}