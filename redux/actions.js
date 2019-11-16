export const ADD_TODO = 'addTodo';
export const TOGGLE_TODO = 'toggleTodo';
export const CHANGE_FILTER = "visibilityFilter";
export const TODO_COMPLETED = "done",
export const TODO_TASK ="task"
export const VISIBILITY_FILTER = "visibilityFilter"
export const TODOS = "todos";
export const VISIBILITY_COMPLETED = "completed";
export const VISIBILITY_INCOMPLETE = "incomplete";
export const VISIBILITY_ALL = "all";

export const addTodoAction = todo => { type : ADD_TODO, payload: todo}
export const toggleTodoAction = index => {type: TOGGLE_TODO, payload: index}
export const changeVisibilityAction = visibility => {type : CHANGE_FILTER, payload : visibility}