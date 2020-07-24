import React from 'react';



class SelectableTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      15: { color: 'green', isSelected: false },
      120: { color: 'red', isSelected: false },
      33: { color: 'blue', isSelected: false },
      85: { color: 'red', isSelected: false },
      1: { color: 'green', isSelected: false },
      42: { color: 'green', isSelected: false }
    }

    this.handleSelect = this.handleSelect.bind()
  }

  handleSelect = (event) => {
    let checked = event.target.name
    this.setState({ [event.target.name]: { color: this.state[checked].color, isSelected: true, } })
    console.log(this.state[checked])
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
          {(this.state[15].isSelected) ? <div>{this.state[15].color}</div> : null}
          {/* To do, work out how to render colors */}
          {/* Print unique colors here */}
        </div>
      </div>
    );
  };
}


export default SelectableTable