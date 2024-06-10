export default function SavePageAsPDFButton({}) {

  function handleClick() {
    if (!confirm('This functionality is broken right now, are you sure?')) return

    window.print();
  }

  return(
    <button className='save-button' onClick={handleClick}>Save as PDF</button>
  )
}