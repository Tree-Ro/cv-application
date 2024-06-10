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
        <EducationContent educationFormContent={education}/>
      </section>
      <section className='experiences'>
        <ExperiencesContent experienceFormContent={experience}/>
      </section>
    </div>
  )
}

export default Resume