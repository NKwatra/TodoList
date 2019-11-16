import React from "react";

const Todo = (props) => {
	const backgroundClass = props.done ? "bg-success" : "bg-danger"
	return (
		<div className={`${backgroundClass} todo-item rounded color-white`} onClick={props.onClick}>
			{props.task}
		</div>);
}

export default Todo;