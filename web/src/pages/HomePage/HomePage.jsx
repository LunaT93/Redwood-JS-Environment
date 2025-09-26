// import { Link, routes } from '@redwoodjs/router'
import React, { useState } from 'react'

import { Metadata } from '@redwoodjs/web'
//perhaps this should be import {useState} from @redwood yada yda.

import 'src/index.css'

import { BackgroundHexagon } from 'src/components/BackgroundHexagon'
import { BackgroundPentagon } from 'src/components/BackgroundPentagon'
import { DuiiDefense } from 'src/components/DuiiDefense'
import { Elaw } from 'src/components/ELaw'
import { ForestSign } from 'src/components/ForestSign'
import { LegalBitch1 } from 'src/components/LegalBitch1'
import { ProtesterDefense } from 'src/components/ProtesterDefense'
import { ReviewBox1 } from 'src/components/ReviewBox1'
import { ReviewBox2 } from 'src/components/ReviewBox2'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>theLegalBitch.com</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.jsx</code>
      </p>
      <div className="Box">
        <ForestSign />
      </div>

      {/* Forest Sign: I'm WORKING! Fuck yes.  */}
      <div className="Box">
        <BackgroundPentagon />
      </div>

      <div className="Box">
        <ReviewBox1 />
      </div>

      <div className="Box">
        <ReviewBox2 />
      </div>

      <div className="Box">
        <ProtesterDefense />
      </div>

      <div className="Box">
        <DuiiDefense />
      </div>

      <div className="Box">
        <Elaw />
      </div>

      <div className="Box">
        <BackgroundHexagon />
      </div>

      <div className="Box">
        <LegalBitch1 />
      </div>

      {/*
           My default route is named `home`, link to me with:
           `<Link to={routes.home()}>Home</Link>`
        */}
    </>
  )
}

export default HomePage
