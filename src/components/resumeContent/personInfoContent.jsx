import mailIcon from '/envelope-solid.svg'
import phoneIcon from '/phone-solid.svg'
import locationIcon from '/location-dot-solid.svg'


function PersonInfoContent({ generalFormContent }) {

  const {
    'Full Name': name,
    'Email': email,
    'Phone Number': phoneNumber,
    'Home Address': homeAddress
  } = generalFormContent

  return (
    <>
      <h1>{name}</h1>
      <div>
        <img src={mailIcon} alt="Email Icon" />
        <p>{email}</p>
      </div>
      <div>
        <img src={phoneIcon} alt="Phone Icon" />
        <p>{phoneNumber}</p>
      </div>
      <div>
        <img src={locationIcon} alt="Location Icon" />
        <p>{homeAddress}</p>
      </div>
    </>
  )
}

export default PersonInfoContent