import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <input type="text" placeholder="I have to do."></input>
        <button>Will do.</button>
        <ul>
          {this.props.todos.map((task)=><Todo task={task}/>)}
        </ul>
      </div>
    )
  }
}

export default TodoList;
