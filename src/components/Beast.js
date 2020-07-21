import React from 'react'

// function Leprechaun() {
//   return <div {name = "leprechaun"}></div>
// }

class Beast extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: props.name }
  }

  //name becomes props.name

  handleInput = (event) => {
    this.setState({ name: event.target.value })
    console.log(event.target.value)
  }

  render() {
    return <input name={this.state.name} type="text" id="controlledName" onChange={this.handleInput}></input>
  }
}

export default Beast

//We need a way of updating state now