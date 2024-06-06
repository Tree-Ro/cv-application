import PersonInfoContent from './resumeContent/personInfoContent'
import EducationContent from './resumeContent/educationContent'
import ExperiencesContent from './resumeContent/experiencesContent'

function Resume({}) {


  return (
    <div className='resume-wrapper'>
      <header className='general-content'>
        <PersonInfoContent generalFormContent={{}}/>
      </header>
      <section className='education'>
        <EducationContent educationFormContent={[]}/>
      </section>
      <section className='experiences'>
        <ExperiencesContent/>
      </section>
    </div>
  )
}

export default Resume