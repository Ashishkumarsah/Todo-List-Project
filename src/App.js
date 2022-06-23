
import './App.css';
import Header from "./MyComponent/Header";
import AddTodo from './MyComponent/AddTodo';
import Todos from "./MyComponent/Todos";
import Footer from "./MyComponent/Footer";
import React, { useState } from 'react';




function App() {
//ashish 
  const onDelete=(todo)=>{
    console.log("I am on delete",todo)
    setTodos(todos.filter((e)=>{
     return e!==todo;
    }));
  }

  const addTodo=(tittle,desc)=>{
    console.log("I am adding todo list",tittle,desc)
    let Sno;
    if(todos.length === 0){
       Sno = 0;
    }
    else{
       Sno=todos[todos.length-1].Sno+1;
    }
     
    const myTodo={
      Sno: Sno,
      tittle:tittle,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
    
  const [todos, setTodos] = useState([
    {
    Sno:1,
    tittle:"Go to the GYM",
    desc:"Abs is compelsary"
    },
  {
    Sno:2,
    tittle:"Go to the Bank",
    desc:"PanCard is mandetary"
  },
  
  {
    Sno:3,
    tittle:"Go to the Market",
    desc:"Carry the bag"

  }]);



  return (
    <>
    <Header tittle="Todo-list"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
    </>
  );
}

export default App;
