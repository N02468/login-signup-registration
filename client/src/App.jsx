import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Home from './home'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import './App.css'

function App() {
 

  return (
   
    <Router>
      <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
   
   
  )
}

export default App
