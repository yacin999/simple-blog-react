import React from 'react'
import aboutImg from '../about.png'
import './about.css'

function About() {
    return (
        <div className='about'>
            <div className="left">
                <h1>About us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, inventore dolorum, natus omnis quo sunt dolorem incidunt provident hic eaque consequuntur illo? Consequuntur, voluptatum impedit? Ducimus veritatis quas unde recusandae blanditiis quae itaque! Commodi animi tempora voluptate, consequatur at deserunt harum nostrum eaque porro, cupiditate velit adipisci similique, officia sit?</p>
                <button>Contact Us</button>
            </div>
            <div className="right">
                <img src={aboutImg}/>
            </div>
        </div>
    )
}

export default About
