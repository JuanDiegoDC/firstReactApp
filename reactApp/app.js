import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));

// const dummyData = [{taskText: 'Wash clothes.', completed: false}, {taskText: 'Call Family.', completed: true}, {taskText: 'Complete Homework.', completed: false}];
//
// class TodoList extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return(
//       <div>
//         <input type="text" placeholder="I have to do."></input>
//         <button>Will do.</button>
//         <ul>
//           {this.props.todos.map((task)=><Todo task={task}/>)}
//         </ul>
//       </div>
//     )
//   }
// }
//
// class Todo extends React.Component{
//   constructor(props){
//     super(props)
//   }
//
//   render(){
//       if (this.props.task.completed){
//         return(<li><button>X</button><strike>{this.props.task.taskText}</strike></li>)
//       } else {
//       return(<li><button>X</button>{this.props.task.taskText}</li>)
//     }
//   }
// }
//
// class TodoApp extends React.Component{
//   constructor(props){
//     super(props),
//     this.state = {
//       todos: []
//     }
//   }
//
//     componentDidMount(){
//       this.setState({
//         todos: dummyData
//       });
//     }
//
//     render(){
//       return(
//         <TodoList todos={this.state.todos}/>
//       )
//     }
//   }
