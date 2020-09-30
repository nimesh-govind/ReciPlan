import React from 'react'

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
    Your recipes, Your week
    </div>
    <br/>
    <div>
    <button>Yes i am over 18</button> <button>No I am not</button>
    </div>
    </div>
    </div>
    </>
    )
}