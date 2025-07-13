import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
import Header from './Components/Header'
import Filterr from './Components/Filterr'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Auth from './Others/Auth';


function App() {


  return (
    <>

    <Router>
      <Routes>

        <Route path='/' element={
          <>
          <Header/>
          <Filterr/>
          <Main/>
          <Footer/>
          </>
        } />
        
        <Route path='/login' element={<Auth />} />

      </Routes>
    </Router>

    </>
  )
}

export default App
