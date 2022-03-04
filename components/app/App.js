import {Todo} from "../todo/todo";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from "../header/header";
import {Home} from "../home/home";
import React from 'react';
import {useState} from 'react';

export const MyContext = React.createContext();

function App() {
  const[todos, setTodos] = useState([]);
  return(
    <div>
      <MyContext.Provider value={{todos, setTodos}}>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
  
}

export default App;