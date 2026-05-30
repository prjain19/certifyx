import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard'
import Certificates from './pages/Certificates'
import Profile from './pages/Profile'
import CertificateDetails from './pages/CertificateDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} ></Route>
        <Route path="/certificates" element={<Certificates></Certificates>} ></Route>
        <Route path="/profile" element={<Profile></Profile>} ></Route>
        <Route path="/certificate-details" element={<CertificateDetails></CertificateDetails>} ></Route>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
