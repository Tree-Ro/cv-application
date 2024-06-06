import Sidebar from './components/sidebar'
import Form from './components/sidebarContent/form'
import FormField from './components/sidebarContent/formField'

import Resume from './components/resume'

import personIcon from '../public/user-solid.svg'
import educationIcon from '../public/book-solid.svg'
import workIcon from '../public/briefcase-solid.svg'

function App() {

  return (
    <>    
    <Sidebar>
      <Form title='General' svgIcon={personIcon}>
        <FormField title='Full Name' type='text' placeholder='ex. John Doe'/>
        <FormField title='Email' type='email' placeholder='ex. john.doe@gmail.com' maxLength={25}/>
        <FormField title='Phone Number' type='number' placeholder='ex. 333-5555-22'/>
        <FormField title='Home Address' placeholder='15th Example Street'/>
      </Form>
      <Form title='Education' svgIcon={educationIcon}>
        <FormField title='School Name' placeholder='ex. Lund University'/>
        <FormField title='Title of Study' placeholder='ex. Computer Science'/>
        <FormField title='Date From' type='date'/>
        <FormField title='Date Until' type='date'/>
      </Form>
      <Form title='Experiences' svgIcon={workIcon}>
        <FormField title='Company Name'/>
        <FormField title='Position Title'/>
        <FormField title='Location'/>
        <FormField title='Responsibilities' type='textarea'/>
        <FormField title='Date From' type='date'/>
        <FormField title='Date Until' type='date'/>
      </Form>
    </Sidebar>
    <Resume/>
    </>
  )
}

export default App
