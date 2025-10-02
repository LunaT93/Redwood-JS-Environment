// import { Link, routes } from '@redwoodjs/router'
import React, { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
//perhaps this should be import {useState} from @redwood yada yda.

import 'src/index.css'

import { useQuery, gql } from '@redwoodjs/web'

import { BackgroundHexagon } from 'src/components/BackgroundHexagon'
import { BackgroundPentagon } from 'src/components/BackgroundPentagon'
import { DuiiDefense } from 'src/components/DuiiDefense'
import { Elaw } from 'src/components/ELaw'
import { ForestSign } from 'src/components/ForestSign'
import { LegalBitch1 } from 'src/components/LegalBitch1'
import { ProtesterDefense } from 'src/components/ProtesterDefense'
import { ReviewBox1 } from 'src/components/ReviewBox1'
import { ReviewBox2 } from 'src/components/ReviewBox2'

// web/src/pages/HomePage/HomePage.js

// Delete ME LATER

const TEST_QUERY = gql`
  query {
    __typename
  }
`
// DELETE ME LATER

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
      {/* DELETE ME LATER */}
      const {(data, loading, error)} = useQuery(TEST_QUERY) if (loading) return{' '}
      <p>Loading...</p>
      if (error) return <p>Error: {error.message}</p>
      return (
      <div>
        <h1>Welcome</h1>
        <p>GraphQL says: {data.__typename}</p>
      </div>
      ) {/* DELETE ME LATER */}
      <nav className="topnav">
        <div className="nav-logo">
          <img src="/images/LegalBitchLogo.png" alt="Your Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.blog()}>WokeMindVirus Blog</Link>
          </li>
          <li>
            <Link to={routes.contact()}>Contact</Link>
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
            <a href="tel:+19718001494" className="phone-link">
              (971) 800-1494
            </a>
          </div>
        </div>

        <div className="callme-box">
          <img src="/images/CallMe.png" alt="Call Me" className="callme-pic" />
        </div>
      </div>
      <div className="aboutMe">
        <p>
          Hi! I’m Luna, the Legal Bitch. I run an LGBTQ+ friendly law firm in
          Portland, Oregon primarily focused on criminal defense. I primarily
          serve Multnomah County, but I handle Washington, Clackamas, and Hood
          River County cases when I think it's a cause worthy of driving. I
          handle cases on a sliding scale for low income people, so ask me about
          that! It's worth noting that if you make less than about $2,000 a
          month, you likely qualify for court-appointed (or, as I like to call
          it, "socialist") counsel (which, who knows, could be me anyway since I
          like to take conflict cases).
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
      <h1>Major Practice Areas:</h1>
      <div className="staggered-container">
        <div className="staggered-card">
          <img src="/images/ProtesterDefense.png" alt="Protester Defense" />
          <div className="card-text">
            <h2>Protester Defense</h2>
            <p>
              These cases are why I'm in the business. Whether you're standing
              up for the human rights of Palestinians or fighting to have Satan
              back in our classrooms, I'd love to stand with you. I have taken
              multiple protest cases from arraignment to dismissal in Portland
              and would love to help you out.
            </p>
          </div>
        </div>

        <div className="staggered-card reverse">
          <img src="/images/DuiiDefense.png" alt="DUII Defense" />
          <div className="card-text">
            <h2>DUII Defense</h2>
            <p>
              This is not to make light of drinking and driving, especially with
              a Martini glass (think of the upholstry!). But don't you want a
              lawyer who won't make you feel more stressed than you already do?
              You may be innocent and, in any case, punitive justice, fines, nor
              jail have been shown to benefit you or help society. I have
              experience with dozens of DUII cases in Oregon including ones that
              I've taken to trial and won. Let me be on DD on your case!
            </p>
          </div>
        </div>

        <div className="staggered-card">
          <img src="/images/ELaw.png" alt="E Law" />
          <div className="card-text">
            <h2>Environmental Law and Other Areas</h2>
            <p>
              In addition to my criminal work, I also have a certification in
              Environment and Natural Resources Law from Lewis & Clark Law
              School. If you want some extra help on an environmental case, let
              me know! I might be interested in doing it (even doing it for free
              but don't quote me on that). I've also helped people get their
              LLCs started, advised other attorneys in starting their firms, and
              I built this website myself! I can be a bit of a Jacqueline of all
              trades. Call me up and see if I'd be a good fit! Just no family
              law, please. That bums me out.
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: '500px', overflow: 'hidden' }}>
        <BackgroundHexagon />
      </div>
      <div
        className="page-footer"
        style={{ backgroundColor: 'rgb(166, 200, 194)' }}
      >
        © 2025 Luna Thomas, LLC. Special thanks to Mischa Hof for providing the
        rights to the “Witched” font.
      </div>
      {/* <div className="Box">
        <LegalBitch1 />
      </div> */}
      {/* has weird background rn  */}
      {/*
           My default route is named `home`, link to me with:
           `<Link to={routes.home()}>Home</Link>`
        */}
    </>
  )
}

export default HomePage
