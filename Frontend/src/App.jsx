import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
import Header from './Components/Header'
import Filterr from './Components/Filterr'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Auth from './Others/Auth';
import WishList from './Others/WishList';


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

        <Route path='/wishlist' element={
          <>
          <Header/>
          <WishList/>
          <Footer/>
          </>
        } 
        />

      </Routes>
    </Router>

    </>
  )
}

export default App
