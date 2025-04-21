import './App.css'
import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import './index.css'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {

  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 

  return (
  <>
 {!loading && <LoadingScreen onComplete = {() => setLoading(true)}/>}

  <div className={`min-h-screen w-full transition-opacity 
    duration-7000 ${loading ? "opacity-100" : "opacity-0"
    }
     bg-black text-gary-100`}>

    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   
  <Home />
 <About/>
 <Projects/>
 <Contact/>
  </div>
  </>
  )
}

export default App
