import React from 'react';

class Todo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
      if (this.props.task.completed){
        return(<li><button>X</button><strike>{this.props.task.taskText}</strike></li>)
      } else {
      return(<li><button>X</button>{this.props.task.taskText}</li>)
    }
  }
}

export default Todo;
