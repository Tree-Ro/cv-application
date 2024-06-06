function EducationContent({educationFormContent}) {

  const educations = educationFormContent

  return (
    <>
    {educations.map((education)=> {
      return(
      <div className='education'>
        <div>
          <p className='education-duration'>{education.dateFrom + ' - ' + education.dateUntil}</p>
          <p className='education-location'>{education.homeAddress}</p>
        </div>

        <div>
        <h2 className='education-title'><b>{education.titleOfStudy}</b></h2>
        <h3 className='education-school-name'>{education.schoolName}</h3>
        </div>
      </div>
    )})}
    </>
  )

}

export default EducationContent