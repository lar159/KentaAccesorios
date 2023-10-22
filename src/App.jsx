import './App.css'
import { Routes, BrownserRouter, Route} from 'react-router-dom'
import Home from "./components/pages/Home/Home"
import Login from "./components/pages/Login/Login"
import Register from "./components/pages/Register/Register"
import Error from "./components/pages/Error/Error"
import AboutUs from "./components/pages/AboutsUs/AboutUs"
import NavBar from "./components/layout/NavBar/NavBar"


function App() {
  

  return (
    <>
      <BrownserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/*" element={<Error />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrownserRouter>
    </>
  )
}

export default App
