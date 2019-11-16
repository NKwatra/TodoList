import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from "./AddTodo"
import VisibleTodoList from "./containers/VisibleTodoList"
import {Provider} from "react-redux";
import store from "./redux/store"
import TasksFilter from "./TasksFilter"

function App() {
  return (
    <Provider store={store} >
    <div className="container mt-5">
      <div className="row">
        <div className="col-8 offset-2">
          <AddTodo />
          <VisibleTodoList/>
          <TasksFilter/>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
