import React from 'react'
import {Link} from 'react-router-dom'
export default function WelcomePage () {
    return (
        <>
        <div className='welcome'>
            <div className='welcomeContainer'>
    <div className="logoWelcome">
        <img src="../rp.png" alt="Logo"/>
    </div>
    <div>
    <h1 className='reciPlan'>ReciPlan</h1>
    </div>
    <br/>
    <div className='words'>
    "Your recipes, Your week"
    </div>
    <br/>
    <div className='welcomeButton'>
    
    <button className="button is-outlined">Start Planning</button>
   
    </div>
    </div>
    </div>
    </>
    )
}