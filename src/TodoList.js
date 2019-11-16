import React from 'react';
import Todo from "./Todo"

const TodoList = ({todos, onClickTodo}) => 
{
	return (
		<div className="todo-list">
		{todos.map((todo, index) => (<Todo {...todo} onClick={() => onClickTodo(index)} key={index} />))}
		</div>
		);
}

export default TodoList