import React, { useState } from 'react'
import Home from './Home'

export default function LoginRegister () {

const [show, setShow]=useState({state: true, home: null})

const showHome = () => {
show.state ? setShow({state: false, home: <Home/>}) : setShow({state: true, home: null})
}

console.log('show :', show.state)
  return(
    <>
      <div className="logologin">
        <img src="../rp.png" alt="Logo"/>
    </div>
    <h1 className='reciPlan'>ReciPlan</h1>
    <div className='words'>
    "Your recipes, Your week"
    </div>
    <br/>
    <div className='welcomeButton'>
    <button onClick={() => showHome()}className="button is-outlined">Start Planning</button>
    </div>
    {show.home}
</>
  )

}