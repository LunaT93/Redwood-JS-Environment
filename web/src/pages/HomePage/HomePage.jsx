// import { Link, routes } from '@redwoodjs/router'
import React, { useState } from 'react'

import { Metadata } from '@redwoodjs/web'
//perhaps this should be import {useState} from @redwood yada yda.

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.jsx</code>
      </p>
      <div>
        <Password />
      </div>
      {/*
           My default route is named `home`, link to me with:
           `<Link to={routes.home()}>Home</Link>`
        */}
    </>
  )
}

export default HomePage

const Password = () => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false)
  console.log(isPasswordShowing)

  const togglePassword = () => {
    setIsPasswordShowing(!isPasswordShowing)
  }

  return (
    <div>
      {isPasswordShowing ? (
        <input type="text" name="password" />
      ) : (
        //otherwise! fun
        <input type="password" name="passwpord" />
      )}
      <button onClick={togglePassword}>Toggle</button>
    </div>
  )
}

//I don't know if I have to export PW. It seems I do not
