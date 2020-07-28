import React from 'react'

// const SearchBar = () => {
//   return <div className="ui segment">
//     <form className="ui form">
//       <div className="field">
//         <label>Search</label>
//         <input type="text" onFocus={() => this.onFocus} />
//       </div>
//     </form>
//   </div>
// }

class AutoComplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showOptions: false }
    // this.onFocus = this.onFocus.bind()
  }

  // componentDidMount() {
  //   this.onFocus()
  // }

  // onFocus = () => {
  //   this.setState({ showOptions: true })
  // }

  render() {
    return (
      <>
        <div className="ui segment">
          <form className="ui form">
            <div className="field">
              <label>Search</label>
              <input type="text" onFocus={() => this.setState({ showOptions: true })} onBlur={() => this.setState({ showOptions: false })} />
            </div>
          </form>
        </div>
        {/* <div>{<SearchBar onFocus={this.onFocus} />}</div> */}
        <div>{(this.state.showOptions) ? this.props.options.map((option) => <li>{option.value}</li>) : null}</div>
      </>
    )
  }
}

export default AutoComplete