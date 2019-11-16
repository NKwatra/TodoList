import React, {useState} from "react";
import {TODO_TASK, TODO_COMPLETED, addTodoAction} from "./redux/actions";
import {connect} from "react-redux";


const AddTodo = (props) => {
		const [text, updateText] = useState("")
		return (
			<form onSubmit ={e => {
				e.preventDefault();
				props.addTodo(text)
				updateText("")
					}}>
			<div className="row form-group">
				<div className="col-8">
					<input type="text" className="form-control" value={text}
					onChange= {e => updateText(e.target.value)} />
				</div>
				<div className="col-4">
					<button className="btn btn-primary color-white" type="submit">Add Todo</button>
				</div>
			</div>
			</form>
			);
}

const mapDispatchToProps = dispatch => (
	{
		addTodo : text => dispatch(addTodoAction({
			[TODO_TASK] : text,
			[TODO_COMPLETED] : false
		}))
	});

export default connect(null, mapDispatchToProps)(AddTodo);