import React, {useState, useContext} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import "./todo.css";
import { MyContext } from '../app/todoContext';



export const Todo =() => {
    
      const[inputText, setInputText] = useState('');
      const{todos, setTodos} = useContext(MyContext);

      function addTodo() {
        const newTodos = [...todos, {text:inputText, checked:false}];
        setTodos(newTodos);
      }

      function deleteTodo(deletedTodo) {
        setTodos(todos.filter(todo => todo.text !== deletedTodo))
      }

      function checkOffTodo(completedTodo) {
        completedTodo.checked = (!completedTodo.checked);
      }

      return (
        <div className = "todoList">
          <h1>Todo List</h1><div>
          <input 
            type="text"
            onChange={(event) => setInputText(event.target.value)}
            placeholder="add item" />
          <button onClick={addTodo}>Add</button>
          {todos.map((todo)  => (<TodoItem text={todo.text} checkOffTodo={checkOffTodo} deleteTodo={deleteTodo} />))}
        </div></div>
      );
};


const TodoItem = (props) => {
  return (<div className = {props.checked ? 'completed' : 'notCompleted'}>


<Grid container spacing={1} className="grid">

<Grid item xs={0}>
    
    <input type = "Checkbox" name="text" onChange ={() => props.checkOffTodo(props)}></input>
    
  </Grid>

  <Grid item xs={3} className="todoText">
    {props.todo.text}
    </Grid>

    <Grid item xs={1}>
      <button onClick={() => props.deleteTodo(props.text)}><DeleteIcon/></button>
    </Grid>
    </Grid>
    </div>);}