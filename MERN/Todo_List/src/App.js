
import './App.css';
import React, { useState} from"react";
function App() {
  const[newTodo, setNewTodo]= useState("");
  const [todos,setTodos] =useState([]);
  const newTodoSubmit=(event)=>{
    event.preventDefault();
    if(newTodo.length==0){
      return;
    }
    const todoItem={
      text: newTodo,
      finished: false
    }
    setTodos([... todos, todoItem])
    setNewTodo("");
  };
  const todoDelete=(id)=>{
    const filteredTodos = todos.filter((todo, i)=>{
      return i!==  id;
    });
    setTodos(filteredTodos);
  }



  const todoFinished= (id)=>{
    const updateTodos = todos.map((todo,i)=>{
      if(id==i){
        todo.finished= ! todo.finished;
      }
      return todo;
    });
    setTodos(updateTodos)
  }
  return (
    <div style={{textAlign:"center"}}>
      <form onSubmit={(event)=>{
        newTodoSubmit(event);
      }}>
        <input onChange={(event)=>{
          setNewTodo(event.target.value);
        }} type="text" value={newTodo}/>
        <div>
        <button>Add</button>
      </div>
      </form>
      {todos.map((todo, i)=>{
        return(
          
          <div key={i}>
            <input onChange={(event)=>{
              todoFinished(i)
            }} checked={todo.finished} type="checkbox"></input>
            <span>{todo.text}</span>
            <button onClick={(event)=>{
              todoDelete(i);
            }}>Delete</button>
            </div>
        )
      })}
    </div>
  );
}

export default App;
