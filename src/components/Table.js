import React from 'react';


class SelectableTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: ''
    }
    this.handleSelect = this.handleSelect.bind()
  }

  handleSelect = (event) => {
    console.log(event.target.name)
  }

  render() {
    return (
      <div>
        <table className="ui collapsible table">
          <th>Name
           {this.props.users.map((user) => <td>{user.name}</td>)}
          </th>
          <th>Favourite color
            {this.props.users.map((user) => <td>{user.favoriteColor}</td>)}
          </th>
          <th>Selected?
            {this.props.users.map((user) => <input onClick={this.handleSelect} name={user.id} type="checkbox"></input>)}
          </th>
        </table>
        <div className="colors">
          {/* Print unique colors here */}
        </div>
      </div>
    );
  };
}


export default SelectableTable