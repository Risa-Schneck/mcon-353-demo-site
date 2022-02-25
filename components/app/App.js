import {Todo} from "../todo/todo";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from "../header/header";

function App() {
  return(
    <div className = "App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todo" elemtn={<Todo />} />
        </Routes>
      </BrowserRouter>
      <Todo/>
    </div>
  )
  
}

export default App;