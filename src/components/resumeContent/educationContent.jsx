function EducationContent({ educationFormContent }) {
  // Ensure educationFormContent is always an array
  const educations = Array.isArray(educationFormContent) ? educationFormContent : [];

  return (
    <>
      {educations.map((education) => {
        const { titleOfStudy, schoolName, dateFrom, dateUntil, homeAddress, id } = education;

        return (
          <div key={id} className='education'>
            <div>
              <p className='education-duration'>
                {dateFrom ? dateFrom : 'N/A'} / {dateUntil ? dateUntil : 'N/A'}
              </p>
              <p className='education-location'>{homeAddress ? homeAddress : 'N/A'}</p>
            </div>

            <div>
              <h3 className='education-title'><b>{titleOfStudy ? titleOfStudy : 'N/A'}</b></h3>
              <h4 className='education-school-name'>{schoolName ? schoolName : 'N/A'}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default EducationContent;
