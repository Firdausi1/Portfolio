import React from 'react'
import './Experience.css'

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="experience__container">
                <div className="experience__education">
                    <h2>EDUCATION</h2>
                    <div>
                        <h3>Northwest University</h3>
                        <p>2013 - 2017</p>
                        <p>B.Sc Computer Science</p>
                    </div>
                    <div>
                        <h3>Dansol High School</h3>
                        <p>2007 - 2013</p>
                        <p>West African Examination Council (WAEC)</p></div>
                </div>
                <div className="experience__work">
                <h2>WORK</h2>
                    <div>
                        <h3>NASRDA</h3>
                        <p>2019 - present</p>
                        <p>Position: Scientific Officer II</p></div>
                    <div>
                        <h3>FAAN</h3>
                        <p>2018 - 2019</p>
                        <p>Position: IT Personel</p></div>
                    
                </div>
            </div>
            
        </section>
    )
}

export default Experience;
