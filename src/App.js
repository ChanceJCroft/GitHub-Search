import './App.css';
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  }


  /* anything in componentDidMount will fire right when the app turns on */
  async componentDidMount() {
    //change loading to 'true' while awaiting axios response
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUBT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUBT_CLIENT_SECRET}`);
    //once you have the axios response, set the users to that data and loading to false
    this.setState({ users: res.data, loading: false });
  }

  render() {
      return (
      <div>
      <nav className="navbar bg-primary">
        {/* Run the NavBar component in a NavBar div */}
        <Navbar className="navbar bg-primary"/>
      </nav>
      <div className="container">
        <Search />
        {/* Place the users below in a separate container div - CSS applied to container */}
        {/* pass in the loading and users as props through state */}
        <Users loading={this.state.loading} users={this.state.users} />
        </div>  
      </div>
    );
  }
}

export default App;
