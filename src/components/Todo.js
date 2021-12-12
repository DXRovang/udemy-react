import Modal from './Modal'

function Todo(props) {

  function deleteHandler(){
    // console.log('clicked')
    // console.log(props.text)
    // {Modal}
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}
export default Todo;
