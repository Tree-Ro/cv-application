import PersonInfoContent from './resumeContent/personInfoContent'
import EducationContent from './resumeContent/educationContent'
import ExperiencesContent from './resumeContent/experiencesContent'

function Resume({ forms }) {

  const [general, education, experience] = forms

  return (
    <div className='resume-wrapper'>
      <header className='general-content'>
        <PersonInfoContent generalFormContent={general}/>
      </header>
      <section className='education'>
        <h2>Education</h2>
        <EducationContent educationFormContent={education}/>
      </section>
      <section className='experiences'>
        <h2>Experiences</h2>
        <ExperiencesContent experienceFormContent={experience}/>
      </section>
    </div>
  )
}

export default Resume