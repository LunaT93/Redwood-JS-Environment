import React, { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
//perhaps this should be import {useState} from @redwood yada yda.

import 'src/index.css'

const AboutPage = () => {
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

      <div className="aboutMe">
        Hi there, <br /> <br />
        I’m Luna. I’m a trans lawyer in Portland, Oregon. I decided to create
        this website and my law firm to serve LGBTQ+ people in need of good
        representation. I was a public defender for years in Hood River, Oregon
        before *transitioning* (heh) to my current practice here in Multnomah
        County. In between learning how to code and thinking about fleeing the
        country (as if those thoughts are gone) I decided to open my own law
        practice. Primarily I do court-appointed cases because that’s where my
        heart is but people who don’t qualify for court-appointed counsel (or
        people who REALLY want to hire me anyway) also need high-quality
        representation (I mean it’s also nice to get paid). <br /> <br />
        Prior to working as a public defender, while I was a student at Lewis &
        Clark Law School, I was a certified law student (basically a baby
        lawyer) working at the Metropolitan Public Defender in Washington County
        where I handled dozens of misdemeanor cases. Further back still, I
        clerked for Columbia Riverkeeper working on fighting big businesses
        (sorry I meant to say “job creators”) who were totally coincidentally
        polluting the Columbia River. Suffice it to say, I’ve always been part
        of the pinko liberal hippy-dippy side of law and am proud to say that I
        still am. <br />
        <br />
        My interest in being a criminal lawyer preceded my career in law school.
        While I was an undergraduate student in Texas, I worked in the nation's
        only (at the time at least) undergraduate Innocence Project clinic.
        During that time I learned how utterly fucked the Texas Criminal justice
        system was with its long track record of imprisoning and likely
        executing innocent people, of executing people with diminished capacity,
        and of imprisoning people, sometimes for life, on drug charges under
        their draconian three strikes laws (I also got to see our old electric
        chair, Old Sparky at the Texas Prison Museum!). Anyway, because of the
        jacked up situation in our criminal justice system (which isn’t limited
        to Texas) and my skills at public speaking from my tenure as high school
        debate captain (am I still riding that high? Oh yeah) I decided to put
        my skills to use defending people from a system that empirically helps
        no one.
        <br />
        <br />
        In my free time I play tennis and dodgeball. I also do some modest
        programming. I created this website from scratch using a REACT
        framework. I also coded fillable PDFs for my law practice. When I'm not
        coding or playing sports, I love to hike, bike, and enjoy nature and I
        have a sometimes-serious relationship with astrophysics because I love
        science and the cosmos.
      </div>
    </>
  )
}
export default AboutPage
