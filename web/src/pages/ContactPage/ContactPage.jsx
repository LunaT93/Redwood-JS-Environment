import React, { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
//perhaps this should be import {useState} from @redwood yada yda.

import 'src/index.css'

const ContactPage = () => {
  return (
    <>
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

      <div className="contactMe">
        Contact Information:
        <br />
        Luna Thomas
        <br />
        <a href="tel:+19718001494" className="phone-link">
          (971) 800-1494
        </a>
        <br />
        <a href="mailto:lunathomas@lunathomaslaw.com" className="email-link">
          lunathomas@lunathomaslaw.com
        </a>
        <br />
        520 SW 6th Ave.
        <br />
        Portland, OR 97204
      </div>
    </>
  )
}

export default ContactPage
