import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import { Route, Routes,BrowserRouter } from "react-router-dom";


function App() {
  return (
  
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
  
  );
}

export default App;
