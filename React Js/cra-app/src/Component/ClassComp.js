import React from "react";
 
 class ClassCopm extends React.Component {
  constructor (props){
    super()
  }
render(){
  return(
    <div className="container">
       <h1>class Component Rerndring.... by {this.props.name}</h1>
    </div>
  )
}
 }



 export default ClassCopm;