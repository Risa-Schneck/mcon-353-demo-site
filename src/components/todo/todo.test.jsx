import { render, screen } from '@testing-library/react';
import {Todo} from './todo';


describe('Todo component', () => {
    
    test("Typing a title and clicking add causes a new todo item to be added to the list", () => {
        render(<Todo />);
        const inputEl = screen.getByPlaceholderText("add item");
        console.log(inputEl);

    });
});