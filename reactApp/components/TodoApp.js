import React from "react";
import TodoList from "./TodoList";
import InputLine from "./InputLine";
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

    addTodo(stringTask){
      let newTask = {
        taskText: stringTask,
        completed: false
      }
      dummyData.push(newTask);
      this.setState({
        todos: dummyData
      });
    }

    render(){
      return(
        <div>
        <InputLine submit={(task) => this.addTodo(task)}/>
        <TodoList todos={this.state.todos}/>
        </div>
      )
    }
  }

export default TodoApp;
