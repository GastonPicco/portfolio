import './Aboutme.css'
import images from './image.js'

export const Aboutme = ({image = null,text = text = null}) => {

    return (
        
        <div id='aboutMe' className='about-me-container'>
            <section className='about-me-description'>
                <section className='about-me-description-text'> {text} </section>
                <div className='about-me-description-div'><img src={images.backgroundImg} alt='' className='about-me-description-image'/></div>
            </section>
        </div>
       )
}