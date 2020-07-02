import React from 'react';
import ReactDOM from 'react-dom';



class SearchBar extends React.Component {
  state = { term: '' };


  render() {
    return <div className="ui segment">
      <form onSubmit={(event) => event.preventDefault()} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input type="text" value={this.state.term} onChange={(event) => this.setState({ term: event.target.value })} />
        </div>
      </form>
    </div>
  }
}

export default SearchBar;