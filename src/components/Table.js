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
      42: { color: 'green', isSelected: false },
      // 50: { color: 'orange', isSelected: false }
    }
  }

  handleSelect = (event) => {
    let checked = event.target.name
    this.setState(prevState => ({ [checked]: { color: prevState[checked].color, isSelected: !prevState[checked].isSelected } }))
  }

  removeDuplicates(array, property) {
    return array.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[property]).indexOf(obj[property]) === pos;
    });
  }

  returnUniqueColors = () => {
    const usersArray = Object.entries(this.state).map((user) => user[1])
    console.log('users array', usersArray)
    const activeColors = usersArray.filter(user => user.isSelected)
    console.log('active colors', activeColors)
    this.uniqueColors = this.removeDuplicates(activeColors, 'color')
    console.log('unique colors', this.uniqueColors)
    return this.uniqueColors
  }

  componentDidMount() {
    console.log('unique colors CDM', this.uniqueColors)
  }

  componentDidUpdate() {
    // this.returnUniqueColors()
    console.log('state object', this.state)
    console.log('unique colors CDU', this.uniqueColors)
  }

  render() {
    this.returnUniqueColors()
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
          {(this.uniqueColors) ? this.uniqueColors.map((user => <li>{user.color}</li>)) : null}
        </div>
      </div >
    );
  };
}

export default SelectableTable