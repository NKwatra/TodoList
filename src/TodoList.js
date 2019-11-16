import React from 'react';
import Todo from "./Todo"

const TodoList = ({todos, onClickTodo}) => 
{
	console.log(onClickTodo)
	return (todos.map((todo, index) => (<Todo {...todo} onClick={() => onClickTodo(index)} key={index} />)));
}

export default TodoList