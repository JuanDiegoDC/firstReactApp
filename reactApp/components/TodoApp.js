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
      dummyData.push({
        taskText: stringTask,
        completed: false
      });
      this.setState({
        todos: dummyData
      });
    }

    render(){
      return(
        <div>
        <InputLine submit={() => this.addTodo()}/>
        <TodoList todos={this.state.todos}/>
        </div>
      )
    }
  }

export default TodoApp;
