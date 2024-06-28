import React, { useState } from 'react';
import "./Tecnology.css"
import TecnologyData from './TecnologyData.js'
import Images from './image.js'

export const Tecnology = ({ title = "titulo", text = TecnologyData[0].text, title_1 = "titulo 1", title_2 = "titulo 2", title_3 = "titulo 3", title_4 = "titulo 4" }) => {

    return (
        <section id="tecnologys" className="tecnology-content">
            <section className="tecnology-content-description">
                <h3 className="tecnology-content-description-title">{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: text }} className="tecnology-content-description-text"></p>
            </section>
            <section className="tecnology-content-areas">
                <div className="tecnology-content-divs">
                    <h4 className="tecnology-subtitle">{title_1}</h4>
                    <section className="tecnology-content-areas-section four">
                        <div className='tecnology-grid-element'>
                            <img className='iconFromTec' src={Images.nodeJSICO} alt="" ></img>
                            <p className='textFromTec' >Estudiando</p>
                        </div>
                        <img className='iconFromTec' src={Images.mongoDBICO} alt="" />
                        <img className='iconFromTec' src={Images.jsICO} alt="" />
                        <div className='tecnology-grid-element'>
                            <img className='iconFromTec' src={Images.javaICO} alt="" ></img>
                            <p className='textFromTec' >Estudiando</p>
                        </div>


                    </section>
                </div>
                <div className="tecnology-content-divs">
                    <h4 className="tecnology-subtitle">{title_2}</h4>
                    <section className="tecnology-content-areas-section four">
                        <img className='iconFromTec' src={Images.reactICO} alt="React Icon" />
                        <img className='iconFromTec' src={Images.cssICO} alt="CSS Icon" />
                        <img className='iconFromTec' src={Images.htmlICO} alt="HTML Icon" />
                        <img className='iconFromTec' src={Images.jsICO} alt="JavaScript Icon" />
                    </section>
                </div>
                <div className="tecnology-content-divs">
                    <h4 className="tecnology-subtitle">{title_3}</h4>
                    <section className="tecnology-content-areas-section four">
                        <img className='iconFromTec' src={Images.unityICO} alt="" />
                        <img className='iconFromTec' src={Images.csharpICO} alt="" />
                        <img className='iconFromTec' src={Images.blenderICO} alt="" />
                    </section>
                </div>
                <div className="tecnology-content-divs">
                    <h4 className="tecnology-subtitle">{title_4}</h4>
                    <section className="tecnology-content-areas-section nine">
                        <img className='iconFromTec' src={Images.vscodeICO} alt="" />
                        <img className='iconFromTec' src={Images.visualstudioICO} alt="" />
                        <img className='iconFromTec' src={Images.gitICO} alt="" />
                        <img className='iconFromTec' src={Images.blenderICO} alt="" />
                        <img className='iconFromTec' src={Images.cinema4dICO} alt="" />
                        <img className='iconFromTec' src={Images.capcutICO} alt="" />
                        <img className='iconFromTec' src={Images.camtasiaICO} alt="" />
                    </section>
                </div>

            </section>
        </section>
    )
}