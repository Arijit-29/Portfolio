import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/About'
import Education from './components/education'
import Skills from './components/skills'
import Projects from './components/projects'
import Footer from './components/footer'
import { useState } from 'react'
import ScrollAnimationWrapper from './components/scroll_animation_wrapper'
function App() {
  const [isDarkMode,setIsDarkMode]=useState(false)
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`${isDarkMode ? 'bg-[#171d32] text-white' : 'bg-gray-100 text-black'} h-auto w-full overflow-hidden transition-colors duration-300`}>
     <Navbar  isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
     <Home  isDarkMode={isDarkMode}/>
     <ScrollAnimationWrapper>
     <About isDarkMode={isDarkMode}/></ScrollAnimationWrapper>
     <ScrollAnimationWrapper>
     <Education/></ScrollAnimationWrapper>
     <ScrollAnimationWrapper>
     <Skills isDarkMode={isDarkMode}/></ScrollAnimationWrapper>
     <ScrollAnimationWrapper>
     <Projects isDarkMode={isDarkMode}/></ScrollAnimationWrapper>
     <ScrollAnimationWrapper>
     <Footer/></ScrollAnimationWrapper>
    </div>
  )
}

export default App
