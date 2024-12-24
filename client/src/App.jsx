import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import './App.css'

function App() {
 

  return (
   
    <Router>
      <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
   
   
  )
}

export default App
