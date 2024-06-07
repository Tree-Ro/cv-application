import { useState } from 'react'

import Sidebar from './components/sidebar'
import Form from './components/sidebarContent/form'
import JsonFormData from './data/formQuestions.json'

import Resume from './components/resume'

import personIcon from '/user-solid.svg'
import educationIcon from '/book-solid.svg'
import workIcon from '/briefcase-solid.svg'

function App() {

  const [generalResumeContent, setGeneralResumeContent] = useState({})
  const [educationResumeContent, setEducationResumeContent] = useState([])
  const [experienceResumeContent, setExperienceResumeContent] = useState([])

  const generalFormQuestions = JsonFormData[0]
  const educationFormQuestions = JsonFormData[1]
  const experiencesFormQuestions = JsonFormData[2]

  return (
    <>    
    <Sidebar>
      <Form svgIcon={personIcon} formData={generalFormQuestions} setResumeContent={setGeneralResumeContent} resumeContent={generalResumeContent}/>
      <Form svgIcon={educationIcon} formData={educationFormQuestions} setResumeContent={setEducationResumeContent} resumeContent={educationResumeContent}/>
      <Form svgIcon={workIcon} formData={experiencesFormQuestions} setResumeContent={setExperienceResumeContent} resumeContent={experienceResumeContent}/>
    </Sidebar>
    <Resume forms={[generalResumeContent, educationResumeContent, experienceResumeContent]}/>
     </> 
  )
}

export default App
