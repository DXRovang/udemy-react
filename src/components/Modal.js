function Modal(props){

// function cancelHandler(){

// }

function confirmHandler(){
  props.cancelHandler()
}

  return(
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={props.cancelHandler}>Cancel</button>
      <button className='btn' onClick={confirmHandler}>Confirm</button>

    </div>
  )
}
export default Modal