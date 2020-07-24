import React from 'react';

class SelectableTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      15: { color: 'green', isSelected: false },
      120: { color: 'red', isSelected: false },
      33: { color: 'blue', isSelected: false },
      85: { color: 'red', isSelected: false },
      1: { color: 'red', isSelected: false },
      42: { color: 'green', isSelected: false }
    }

    this.handleSelect = this.handleSelect.bind()
  }

  handleSelect = (event) => {
    let checked = event.target.name
    this.setState(prevState => ({ [checked]: { color: prevState[checked].color, isSelected: !prevState[checked].isSelected } }))
  }



  render() {
    return (
      <div>
        <table className="ui collapsible table">
          <th>Name
          {this.props.users.map((user) => <tr>{user.name}</tr>)}
          </th>
          <th>Favourite color
          {this.props.users.map((user) => <tr>{user.favoriteColor}</tr>)}
          </th>
          <th>Selected?
          {this.props.users.map((user) => <tr><input onClick={this.handleSelect} name={user.id} type="checkbox"></input></tr>)}
          </th>
        </table>
        <div className="colors">
          {(this.state[15].isSelected && !this.state[42].isSelected) ? <div>{this.state[15].color}</div> : null}
          {(this.state[120].isSelected && !this.state[85].isSelected && !this.state[1].isSelected) ? <div>{this.state[120].color}</div> : null}
          {(this.state[33].isSelected) ? <div>{this.state[33].color}</div> : null}
          {(this.state[85].isSelected && !this.state[1].isSelected) ? <div>{this.state[85].color}</div> : null}
          {(this.state[1].isSelected) ? <div>{this.state[1].color}</div> : null}
          {(this.state[42].isSelected) ? <div>{this.state[42].color}</div> : null}
        </div>
      </div>
    );
  };
}

export default SelectableTable