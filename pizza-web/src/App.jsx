import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Home from "./Pages/Home"
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
     {/* <Navbar/> */}
      <Home/>
      <Menu/>
      <Contact/>
    </div>
  );
}

export default App;
