function ExperiencesContent({ experienceFormContent }) {

  const experiences = experienceFormContent 
  console.log(experiences)

  return (
    <>
      {experiences.map((experience)=> {
        const { companyName, positionTitle, location, responsibilities, dateFrom, dateUntil, id } = experience

        return (
          <div key={id} className='experiences'>
            <div>
              <p>{dateFrom ? dateFrom : 'N/A' + ' - ' + dateUntil ? dateUntil : 'N/A'}</p>
              <p>{location ? location : 'N/A'}</p>
            </div>

            <div>
              <h2><b>{positionTitle ? positionTitle : 'N/A'}</b></h2>
              <h3>{companyName ? companyName : 'N/A'}</h3>
              <p>{responsibilities ? responsibilities : 'N/A'}</p>
            </div>
          </div>
        )
      })}
    </>
  )

}

export default ExperiencesContent