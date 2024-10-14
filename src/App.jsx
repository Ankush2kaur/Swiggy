
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignuUp from './Components/SignuUp';
import VerifyToken from './Components/VerifyToken';


function App() {
  

  return (
    <>
    {/* <Home/>
    <Categories/> */}
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignuUp />} />
          <Route path="/verifyToken" element={<VerifyToken />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
