import './Aboutme.css'

export const Aboutme = ({image = null,text = text = null}) => {

    return (
        <div id='aboutMe' className='about-me-container'>
            <section className='about-me-description'>
                <section className='about-me-description-text'> {text}  </section>
                <div className='about-me-description-div'><img src={`src/assets/${image}.jpg`} alt='' className='about-me-description-image'/></div>
            </section>
        </div>
       )
}