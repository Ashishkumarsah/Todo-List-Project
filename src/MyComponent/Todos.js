import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    let myStyle={
     minHeight:"70vh"
    }
  return (
    <div className='container my-3' style={myStyle}>
      <h1 className='text-center my-3 ' >Todos List</h1>
    
      {props.todos.length===0  ?  
      
      <div class="alert alert-danger" role="alert">
        No todos to display . Empty Todos List.
      </div>
      
    
      :  

     props.todos.map((todo)=>{
            return < TodoItem todo={todo} key={todo.Sno} onDelete={props.onDelete}/>
    
    })}
    
    

    </div>
  )
}

export default Todos
