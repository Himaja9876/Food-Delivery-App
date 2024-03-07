import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, MainContainer, CreateContainer} from "./components";
import { AnimatePresence} from 'framer-motion'

const App = () => {
  return (
    <AnimatePresence> {/* means that the animations are present in this dvision - top level */}
    <div className = "w-screen h-auto flex flex-col bg-gray-400"> 
    
    <Header/>
    
    <main className = "mt-24 w-full h-8">
      <Routes>
        <Route path = "/*" element = {<MainContainer/>}/>    {/* for any path url*/}
        <Route path = "/CreateItem" element = {<CreateContainer/>}/>
      </Routes> 
    </main>

    </div> 
    </AnimatePresence>
  )
}

export default App