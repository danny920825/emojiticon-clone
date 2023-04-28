import './App.css'
import Emoji from './components/Emoji'
import Footer from './components/Footer'
import NoApi from './components/NoApi'
import { config } from './config'

function App() {

  const { apiKey } = config

  return (
    apiKey ? (
      <>
        <Emoji />
        <Footer />
      </>
    )
      :
      (
        <>
          <NoApi />
          <Footer />
        </>
      )
  )
}

export default App
