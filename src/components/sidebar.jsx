import SavePageAsPDFButton from './sidebarContent/saveAsPdfButton'

function Sidebar({ children }) {

  return (
    <div className='sidebar'>
      <div className='sidebar-form'>
        {children}
      </div>
      <SavePageAsPDFButton />
    </div>
  )
}

export default Sidebar