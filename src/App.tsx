import React from 'react';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import { ITodo } from './types/data';
import { TodoList } from './components/TodoList';
import { useAppSelector, useAppDispatch } from './hooks';
import { addNewTodo } from './store/todoSlice';

const App: React.FC = () => {

  const [value, setValue] = useState('');

  const list = useAppSelector(state => state.todo.list);

  let dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }

  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.key === 'Enter') dispatch(addNewTodo(value));
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(addNewTodo(value))
  }

  console.log(list)

  return (
    <div>
      <div>
        <input type='text' value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}/>
        <button onClick={handleClick}>Add</button>
      </div>
      <TodoList status={false} list={list}/>
    </div>
  )
}


export {App};