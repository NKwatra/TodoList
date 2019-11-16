import {ADD_TODO, TOGGLE_TODO, CHANGE_FILTER, TODO_COMPLETED, VISIBILITY_FILTER, TODOS,VISIBILITY_ALL} from "./action"
import {combineReducers} from 'redux';

const todoReducer = (state = [], action) => {
	if(action.type === ADD_TODO)
	{
		return [...state, action.payload]
	} else if (action.type === TOGGLE_TODO)
	{
		return (state.map((todo, index) => {
			if(index === action.payload)
			{
				return {...todo, [TODO_COMPLETED] : !todo[TODO_COMPLETED]}
			}
			return todo;
		}));
	}else
	{
		return state
	}
}

const changeVisibilityFilter = (state = VISIBILITY_ALL , action) => {
	if(action.type === CHANGE_FILTER)
	{
		return action.payload
	}	
	return state
}

export default combineReducers({
	[TODOS] : todoReducer,
	[VISIBILITY_FILTER] : changeVisibilityFilter
})

