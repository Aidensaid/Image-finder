import React from 'react'

class AutoComplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showOptions: false,
      searchTerm: ''
    }
  }

  getSuggestions = () => {
    this.array = this.props.options.map(color => color.value)
    this.filteredArray = this.array.filter(color => color[0] === this.state.searchTerm).slice(0, 5)
    console.log(this.filteredArray)
  }

  render() {
    this.getSuggestions()
    // console.log(this.state.searchTerm)
    return (
      <>
        <div className="ui segment">
          <form className="ui form">
            <div className="field">
              <label>Search</label>
              <input type="text" onChange={(event) => this.setState({ searchTerm: event.target.value })} onFocus={() => this.setState({ showOptions: true })} onBlur={() => this.setState({ showOptions: false })} />
            </div>
          </form>
        </div>
        <div>{(this.state.showOptions) ? this.props.options.map((option) => <li>{option.value}</li>) : null}</div>
      </>
    )
  }
}

export default AutoComplete