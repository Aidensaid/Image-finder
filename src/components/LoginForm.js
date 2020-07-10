import React from 'react';

class LoginForm extends React.Component {
  state = { email: 'ai.loughlin@gmail.com', invalidEmail: false, password: '', confirmPassword: '' }

  onUserInput = (event) => {
    event.preventDefault()
    if (event.target.id === 'email') {
      this.setState({ email: event.target.value })
    }
    if (event.target.id === 'password') {
      this.setState({ password: event.target.value })
    }
    console.log('state.password', this.state.password)

    if (event.target.id === 'confirmPassword') {
      this.setState({ confirmPassword: event.target.value })
    }
    console.log('state.confpword', this.state.confirmPassword)
    console.log(event.target)
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const isInValidEmail = !this.state.email.includes('@')
    if (isInValidEmail) {
      this.setState({ invalidEmail: true })
    } else {
      this.setState({ invalidEmail: false })
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label for="email">Email:</label>
          <input onChange={(event) => this.onUserInput(event)} type="email" id="email"></input>
          <label for="password">Password:</label>
          <input onChange={(event) => this.onUserInput(event)} type="password" id="password"></input>
          <label for="confirmation">Confirmation:</label>
          <input onChange={(event) => this.onUserInput(event)} type="password" id="confirmPassword"></input>
          <button formNoValidate>Submit</button>
        </form>
        <span>{this.state.invalidEmail ? 'Enter a valid email' : ''}</span>
        <div>{this.state.password === this.state.confirmPassword ? '' : 'Passwords must match'}</div>
      </>
    )
  }
}

const LoginFormFunctional = () => {

  const onFormSubmit = (event) => {
    event.preventDefault()
    console.log('hello')
    console.log('log', event.target.value)
    const email = document.querySelector('#email')
    const isValidEmail = email.target.value.includes('@') && email !== ''
    if (isValidEmail) {
      return <span>Please enter a valid email</span>
    }
  }

  return (
    <form className="ui form">
      <label for="email">Email:</label>
      <input type="email" id="email"></input>
      <label for="password">Password:</label>
      <input type="password" id="password"></input>
      <label for="confirmation">Confirmation:</label>
      <input type="password" id="confirmation"></input>
      <button onSubmit={() => console.log('hello')}>Submit</button>
    </form>
  );
};

export default LoginForm