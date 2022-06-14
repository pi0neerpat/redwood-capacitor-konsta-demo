// Neither option works
// import { KonstaProvider } from 'konsta/react'
const { KonstaProvider } = require('konsta/react')

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const App = () => {
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <KonstaProvider theme="ios">
        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </RedwoodProvider>
      </KonstaProvider>
    </FatalErrorBoundary>
  )
}

export default App
