import mailIcon from '/envelope-solid.svg'
import phoneIcon from '/phone-solid.svg'
import locationIcon from '/location-dot-solid.svg'


function PersonInfoContent({generalFormContent}) {

  const person = generalFormContent

  return (
    <>
      <h1>{person.fullName}</h1>
      <div>
        <img src={mailIcon} alt="" />
        <p>{person.email}</p>
      </div>
      <div>
        <img src={phoneIcon} alt="" />
        <p>{person.phoneNumber}</p>
      </div>
      <div>
        <img src={locationIcon} alt="" />
        <p>{person.homeAddress}</p>
      </div>
    </>
  )
}

export default PersonInfoContent