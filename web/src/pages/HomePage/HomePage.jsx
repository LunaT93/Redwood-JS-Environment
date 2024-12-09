// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

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
  return (
    <div>
      <input type="password" name="passwpord" />
    </div>
  )
}

//I don't know if I have to export PW
