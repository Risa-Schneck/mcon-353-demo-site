import React, {useState} from 'react';

export const MyContext = React.createContext();

export const TodoProvider = (props) => {
    const[todos, setTodos] = useState([]);
    return <MyContext.Provider value={{todos, setTodos}}>
        {props.children}
    </MyContext.Provider>
}