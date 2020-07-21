import React from 'react';

export class Unify extends React.Component {
  constructor() {
    super();
    this.state = { united: false }

  }

  componentDidMount() {
    console.log('CDM', this.state.united)
    this.setState({ united: true })
  }

  unite = () => {
    this.setState({ united: true })
  }

  componentDidUpdate() {
    console.log('CDU', this.state.united)
  }

  render() {
    const trueMessage = "Code for Everyone"
    const falseMessage = "Make America Code Again"
    return (
      <div className="status">{this.state.united ? trueMessage : falseMessage}</div>
    )
  }
}

export default Unify