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

      {/* <div className="header-wrap">
        <h1>
          <span>theLegalBitch.com</span>
        </h1>
        <img src="/images/LegalBitch1.png" alt="Logo" className="logo" />
      </div> */}

      {/* <h1>
        <img src="/images/LegalBitchLogo.png" alt="logo" className="logo" />
      </h1> */}

      <nav className="topnav">
        <div className="nav-logo">
          <img src="/images/LegalBitchLogo.png" alt="Your Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">WokeMindVirus Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.jsx</code>
      </p> */}

      <div className="hero">
        <div className="forest-box">
          <ForestSign className="forest-sign" />
          <div className="forest-text">
            <p>CALL ME FOR A FREE CONSULTATION </p>
            <p>(971) 800-1494</p>
          </div>
        </div>

        <div className="callme-box">
          <img src="/images/CallMe.png" alt="Call Me" className="callme-pic" />
        </div>
      </div>

      <div className="aboutMe">
        <p>
          Hi. I’m Luna, the Legal Bitch. I run an LGBTQ+ friendly law firm in
          Portland, Oregon primarily focused on criminal defense. I worked as a
          public defender for several years in Hood River handling misdemeanor
          and felony cases before *transitioning* to my current practice in
          Multnomah County.
        </p>
      </div>

      {/* Forest Sign: I'm WORKING! Fuck yes.  */}
      <div className="PentagonBox">
        <BackgroundPentagon className="pentagon-svg" />

        <div className="reviews">
          <div className="review-card">
            <ReviewBox1 className="review-image" />
            <p>
              "CASE DISMISSED!!! Luna refused to bend and saw my case through to
              the end. All charges were dismissed. If you are looking for an
              attorney who truly cares about her clients and who will go the
              extra mile to fight for your rights... Luna Thomas is the attorney
              you want fighting for you!!"
            </p>
          </div>

          <div className="review-card">
            <ReviewBox2 className="review-image" />
            <p>
              "If you're facing serious legal issues, look no further! This is
              the lawyer for you! I literally owe this woman my freedom! Thank
              you SO much, Luna!"
            </p>
          </div>
        </div>
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
      {/* has weird background rn  */}

      {/*
           My default route is named `home`, link to me with:
           `<Link to={routes.home()}>Home</Link>`
        */}
    </>
  )
}

export default HomePage
