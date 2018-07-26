import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['Wash clothes.', 'Call Family.', 'Complete Homework.'];

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ul>{dummyData.map((task)=><Todo task={task}/>)}</ul>
    )
  }
}

class Todo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <li><button>X</button>{this.props.task}</li>
    )
  }
}

ReactDOM.render(<TodoList />,
   document.getElementById('root'));
