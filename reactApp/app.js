import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [{taskText: 'Wash clothes.', completed: false}, {taskText: 'Call Family.', completed: true}, {taskText: 'Complete Homework.', completed: false}];

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
          {dummyData.map((task)=><Todo task={task}/>)}
        </ul>
      </div>
    )
  }
}

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

ReactDOM.render(<TodoList />,
   document.getElementById('root'));
