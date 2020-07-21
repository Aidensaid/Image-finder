import React from 'react';

const SelectableTable = (props) => {
  const renderedNamesList = props.users.map((user) => {
    return <tr>{user.name}</tr>
  })
  const renderedColorsList = props.users.map((user) => {
    return <tr>{user.favoriteColor}</tr>
  })
  return (
    <div>
      <table className="ui collapsible table">
        <th>Name
          {renderedNamesList}
        </th>
        <th>Favourite color
        {renderedColorsList}
        </th>
      </table>
      <div className="colors">
        {/* Print unique colors here */}
      </div>
    </div>
  );
};

export default SelectableTable