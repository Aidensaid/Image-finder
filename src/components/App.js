import React from 'react';
import unsplash from '../api/unsplash';
// import SearchBar from './SearchBar';
// import ImageList from './ImageList';
// import LoginForm from './LoginForm';
// import Unify from './Unify'
// import EggList from './EggList.js'
import Table from './Table.js'
// import Beast from './Beast.js'

const users = [
  { id: 15, name: 'Alyson Balistreri', favoriteColor: 'green' },
  { id: 120, name: 'Arvilla Halvorson', favoriteColor: 'red' },
  { id: 33, name: 'Coty Goyette', favoriteColor: 'blue' },
  { id: 85, name: 'Maci Herman', favoriteColor: 'red' },
  { id: 1, name: 'Cecil Green', favoriteColor: 'red' },
  { id: 42, name: 'Elna Terry', favoriteColor: 'green' }
];

class App extends React.Component {
  state = { images: [] };

  // onSearchSubmit = async (term) => {
  //   const response = await unsplash.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //   });
  //   this.setState({ images: response.data.results })
  // }

  render() {
    return <div className="ui container" style={{ marginTop: '10px' }} >
      <>
        {/* <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} /> */}
        {/* <LoginForm /> */}
        {/* <Unify /> */}
        {/* <EggList /> */}
        {/* <EggList eggs={['cadbury', 'skittles']} /> */}
        <Table users={users} />
      </>
    </div>
  }
}

export default App