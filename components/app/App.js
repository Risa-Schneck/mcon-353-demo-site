import {Todo} from "../todo/todo";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from "../header/header";
import {Home} from "../home/home";

function App() {
  return(
    <div className = "App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App;