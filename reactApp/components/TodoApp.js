import React from "react";
import TodoList from "./TodoList";
const dummyData = [{taskText: 'Wash clothes.', completed: false}, {taskText: 'Call Family.', completed: true}, {taskText: 'Complete Homework.', completed: false}];

class TodoApp extends React.Component{
  constructor(props){
    super(props),
    this.state = {
      todos: []
    }
  }

    componentDidMount(){
      this.setState({
        todos: dummyData
      });
    }

    render(){
      return(
        <TodoList todos={this.state.todos}/>
      )
    }
  }

export default TodoApp;
