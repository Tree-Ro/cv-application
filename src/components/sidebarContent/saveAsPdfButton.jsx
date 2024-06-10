import savePageAsPDF from '../../scripts/savePageAsPDF';

export default function SavePageAsPDFButton({}) {

  function handleClick() {
    if (confirm('This functionality is not working correctly right now, are you sure you want to save the page as a PDF?')) savePageAsPDF()
  }

  return(
    <button className='save-button' onClick={handleClick}>Save page as PDF</button>
  )
}