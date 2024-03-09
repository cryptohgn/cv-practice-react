
import './App.css'
import { CV } from './CV/cv';
import Hero from './components/Hero/Hero';
import Abaut from './components/Abaut/Abaut';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import { useState } from 'react';
 
const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {

  const [showEdu, setShowEdu] = useState(true)
  
  return (
    <>
    <div>
      <Hero hero={hero}/>
    </div>
    <div>
      <Abaut hero={hero}/>
    </div>
    <button onClick={()=> setShowEdu(true)}>Education</button>
    <button onClick={()=> setShowEdu(false)}>Experience</button>
    <div>
      {
        showEdu ? (
      <Education education={education}/> ) 
      : 
      ( <Experience experience={experience}/>)

      }
    </div>
    
    </>
  )
}

export default App
