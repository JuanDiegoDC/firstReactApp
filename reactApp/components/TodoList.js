import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <ul>
          {this.props.todos.map((task)=><Todo task={task}/>)}
        </ul>
      </div>
    )
  }
}

export default TodoList;
