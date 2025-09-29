// import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
// import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

// import FatalErrorPage from 'src/pages/FatalErrorPage'

// import './index.css'

// const App = ({ children }) => (
//   <FatalErrorBoundary page={FatalErrorPage}>
//     <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
//       <RedwoodApolloProvider>{children}</RedwoodApolloProvider>
//     </RedwoodProvider>
//   </FatalErrorBoundary>
// )

// export default App

import { useEffect } from 'react'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'

import './index.css'

const App = ({ children }) => {
  useEffect(() => {
    // create sparkle container
    const container = document.createElement('div')
    container.id = 'sparkle-container'
    container.style.position = 'fixed'
    container.style.top = 0
    container.style.left = 0
    container.style.width = '100%'
    container.style.height = '100%'
    container.style.pointerEvents = 'none'
    document.body.appendChild(container)

    // mousemove handler
    const handleMove = (e) => {
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle'
      sparkle.style.left = e.pageX + 'px'
      sparkle.style.top = e.pageY + 'px'
      container.appendChild(sparkle)
      setTimeout(() => sparkle.remove(), 800)
    }

    document.addEventListener('mousemove', handleMove)

    // cleanup on unmount
    return () => {
      document.removeEventListener('mousemove', handleMove)
      container.remove()
    }
  }, [])

  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <RedwoodApolloProvider>{children}</RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App
