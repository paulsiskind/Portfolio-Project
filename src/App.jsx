
import { useState } from 'react';
import './App.css'
import { Navbar } from "./components/sections/Navbar.jsx";
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css"


function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOepn, setMenuOpen] = useState(false)

  return ( 
  <>
   {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
    > 
      <Navbar menuOepn={menuOepn} setMenuOpen={setMenuOpen}/>
      <Navbar menuOepn={menuOepn} setMenuOpen={setMenuOpen}/>
    </div>
    </>
  );
  
}

export default App
