import {connect} from "react-redux";
import {VISIBILITY_COMPLETED, VISIBILITY_INCOMPLETE, VISIBILITY_ALL, toggleTodoAction} from "../redux/actions"
import TodoList from "../TodoList"

const mapStateToProps = ({todos, visibilityFilter}) => {
	let props = {
		todos : (visibilityFilter === VISIBILITY_ALL)? todos : (
			todos.filter((todo) => {
				if(visibilityFilter === VISIBILITY_COMPLETED)
					return todo.done;
				else
					return !todo.done;
			}))
	}
	return props
}

const mapDispatchtoProps = dispatch => ({
	onClickTodo : index => dispatch(toggleTodoAction(index))
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchtoProps)(TodoList)

export default VisibleTodoList;