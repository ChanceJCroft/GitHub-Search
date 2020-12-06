import './App.css';
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import Alert from './components/layout/Alert';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

//uncomment this section below if you want to have it default to showing the first X users
  /* anything in componentDidMount will fire right when the app turns on */
  /* async componentDidMount() {
    //change loading to 'true' while awaiting axios response
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUBT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUBT_CLIENT_SECRET}`);
    //once you have the axios response, set the users to that data and loading to false
    this.setState({ users: res.data, loading: false });
  } */
  
   //search github users
  searchUsers = async text => {

    //dont forget the SEARCH/USERS - messed me up. Not just /users when calling for the search. See Github API information
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUBT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUBT_CLIENT_SECRET}`);
    //once you have the axios response, set the users to that data and loading to false
    //since we are searching for many users through axios, res.data wont work. We need the items from the res.data
    this.setState({ users: res.data.items, loading: false });
  }

  clearUsers = () => {
    //change the state to be empty when cleared
    this.setState({ users: [], loading: false });
  }

  setAlert = (msg, type) => {
    this.setState({ alert: {msg: msg, type: type} });
    setTimeout(() => this.setState({alert: null}), 3000)
  }

  render() {
      const { users, loading } = this.state;


      return (
      <div>
      <nav className="navbar bg-primary">
        {/* Run the NavBar component in a NavBar div */}
        <Navbar className="navbar bg-primary"/>
      </nav>
      <div className="container">
        <Alert alert={this.state.alert} />
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} 
        //if there are any users being shown, showClear is true, otherwise it is false
        showClear={users.length > 0 ? true : false }
        setAlert={this.setAlert}/>
        {/* Place the users below in a separate container div - CSS applied to container */}
        {/* pass in the loading and users as props through state */}
        <Users loading={loading} users={users} />
        </div>  
      </div>
    );
  }
}

export default App;
