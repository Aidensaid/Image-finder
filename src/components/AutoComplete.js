import React from 'react'

class AutoComplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = { color: 'red' }
  }

  render() {
    return (
      <div>{this.props.options.map((option) => <li>{option.value}</li>)}</div>
    )
  }
}

export default AutoComplete