import React, { useState } from 'react'

const AddTodo = (props ) => {
   const [tittle, setTittl]=useState("");
   const [desc, setDesc]=useState("");

    const submit=(e)=>{
      e.preventDefault();
      if(!tittle || !desc){
        alert("Tittle and description can't be blank")
      }
      props.addTodo(tittle,desc);

    }
  return (
    <div className='container'>
        <h2 className='text-center'>Add Todo List</h2>
        <form onSubmit={submit}>
        <div className="mb-3">
      <label htmlFor="tittle" className="form-label">Todo Tittle</label>
  <input type="text" value={tittle} onChange={(e)=>{setTittl(e.target.value)}} className="form-control" id="tittl" placeholder="add a task"/>
</div>
<div className="mb-3">
  <label htmlFor="desc" className="form-label">Todo Discription</label>
  <textarea className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)} } id="desc" rows="3"></textarea>

</div>
<button className='btn btn-sm btn-success'>Subbmit</button>
</form>
      
    </div>
  )
}

export default AddTodo
  