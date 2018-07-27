import React from 'react';

class InputLine extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <div>
      <input type="text" placeholder="I have to do."></input>
      <button onClick={()=>{this.props.submit("Test Task")}}>Will do.</button>
    </div>
    )
  }
}

export default InputLine;
