import { useState } from 'react'
import FormButton from './formButton' 
import FormField from './formField'
import AddedItems from './addedItems'

import generateUniqueId from '../../scripts/generateUniqueId'

function Form({ svgIcon, formData, setResumeContent, resumeContent }) {
  const [isOpened, setIsOpened] = useState(false)
  const [inputValues, setInputValues] = useState({})

  function handleClick() {
    setIsOpened(!isOpened)
  }

  function addResumeContent(newContent) {
    const id = generateUniqueId(); 
    const newResumeContent = [...resumeContent];

    newResumeContent.push({ ...newContent, id });
    setResumeContent(newResumeContent);
  
    setInputValues({});
  }

  return (
    <div className='form'>
      <div className='form-header' onClick={handleClick}>
        <img src={svgIcon} alt={`${formData.title} icon`}></img>
        <h2>{formData.title}</h2>
      </div>
      {isOpened &&
        <>
          {formData.title !== 'General' && 
              <AddedItems resumeContent={resumeContent} setResumeContent={setResumeContent}/>
          }
          {formData.fields.map((field) => (
            <FormField 
              key={field.title}
              title={field.title}
              type={field.type}
              placeholder={field.placeholder}
              maxLength={field.maxLength}

              inputValues={inputValues}
              setInputValues={setInputValues}
            />
          ))}
          <FormButton 
            title='Add'

            callback={formData.title === 'General' ? setResumeContent : addResumeContent} 
            formContent={inputValues} 
          />
          <FormButton 
            title='Clear' 

            callback={setInputValues} 
            formContent={[]} 
          />
        </>
      }
    </div>

  )
}

export default Form