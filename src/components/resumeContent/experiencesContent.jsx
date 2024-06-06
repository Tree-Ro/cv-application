function ExperiencesContent({experienceFormContent=[]}) {

  const experiences = experienceFormContent


  return (
    <>
      {experiences.map((experience)=> {
        return (
          <div className='experiences'>
            <div>
              <p>{experience.dateFrom + ' - ' + experience.dateUntil}</p>
              <p>{experience.location}</p>
            </div>

            <div>
              <h2><b>{experience.positionTitle}</b></h2>
              <h3>{experience.companyName}</h3>
              <p>{experience.responsibilities}</p>
            </div>
          </div>
        )
      })}
    </>
  )

}

export default ExperiencesContent