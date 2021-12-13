// import { useState } from 'react'

function Backdrop(props){
// const [ closeModal, setCloseModal ] = useState(true)

  return(
    <div className="backdrop" onClick={props.onCancel}></div>
  )

}
export default Backdrop