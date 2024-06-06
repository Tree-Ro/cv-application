import { useState } from 'react'

import Sidebar from './components/sidebar'
import Form from './components/sidebarContent/form'
import JsonFormData from './data/formQuestions.json'

import Resume from './components/resume'

import personIcon from '../public/user-solid.svg'
import educationIcon from '../public/book-solid.svg'
import workIcon from '../public/briefcase-solid.svg'

function App() {

  const [generalFormContent, setGeneralFormContent] = useState({fullName:null,email:null,phoneNumber:null,homeAddress:null})
  const [educationFormContent, setEducationFormContent] = useState([{schoolName:null,titleOfStudy:null,dateFrom:null,dateUntil:null}])
  const [experienceFormContent, setExperienceFormContent] = useState([{companyName:null,positionTitle:null,location:null,responsibilities:null,dateFrom:null,dateUntil:null}])

  const generalFormQuestions = JsonFormData[0]
  const educationFormQuestions = JsonFormData[1]
  const experiencesFormQuestions = JsonFormData[2]

  return (
    <>    
    <Sidebar>
      <Form svgIcon={personIcon} formData={generalFormQuestions}/>
      <Form svgIcon={educationIcon} formData={educationFormQuestions}/>
      <Form svgIcon={workIcon} formData={experiencesFormQuestions}/>
    </Sidebar>
    <Resume/>
     </> 
  )
}

export default App
