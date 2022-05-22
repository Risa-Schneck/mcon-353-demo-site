import {Todo} from "../todo/todo";
import {HashRouter, Routes, Route} from "react-router-dom";
import {Header} from "../header/header";
import {Home} from "../home/home";
import {Chat} from "../Chat/chat";
import React from 'react';
import { TodoProvider } from "./todoContext";





function App() {
  
  return(
    <div>
      <TodoProvider>
     
        <HashRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/todo" element={<Todo />} />
            <Route path="/chat"  element={<Chat />} />
          </Routes>
        </HashRouter>
      </TodoProvider>
    </div>
  )
  
}

export default App;