import mailIcon from '/envelope-solid.svg'
import phoneIcon from '/phone-solid.svg'
import locationIcon from '/location-dot-solid.svg'


function PersonInfoContent({ generalFormContent }) {

  const { fullName, email, phoneNumber, homeAddress } = generalFormContent

  return (
    <>
      <h1>{fullName ? fullName : 'N/A'}</h1>
      <div>
        <img src={mailIcon} alt="Email Icon" />
        <p>{email ? email : 'N/A'}</p>
      </div>
      <div>
        <img src={phoneIcon} alt="Phone Icon" />
        <p>{phoneNumber ? phoneNumber : 'N/A'}</p>
      </div>
      <div>
        <img src={locationIcon} alt="Location Icon" />
        <p>{homeAddress ? homeAddress : 'N/A'}</p>
      </div>
    </>
  )
}

export default PersonInfoContent