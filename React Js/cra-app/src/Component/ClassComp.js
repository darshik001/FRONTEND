import React from "react";
 
 class ClassCopm extends React.Component {
  constructor (props){
    super()
    this.state={
      count:10,
    }
  }
  handalClick (){
    this.setState({
      count: this.state.count +1
    })
  }
render(){
  return(
    <div className="container">
       <h1>class Component Rerndring.... by {this.props.name}</h1>
       
    <h2>Counter:{this.state.count}</h2>
    <button onClick={()=>this.handalClick()}>increment</button>
    </div>
  )
}
 }



 export default ClassCopm;