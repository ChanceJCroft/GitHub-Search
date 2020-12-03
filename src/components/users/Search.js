import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    }

    onChange = (e) => {
        //the event sets the name and value based on what was pressed
        this.setState({ [e.target.name]: e.target.value })
    }
    //should use arrow functions, it is cleaner and simpler when using "this"
    onSubmit = (e) => {
        e.preventDefault();
        //passing in the TEXT of the search bar up through PROPS. searchUsers defined in App.js
        this.props.searchUsers(this.state.text);
        
        //changes the text to be blank after submission 
        this.setState({ text: '' });
    }

    render() {
        const { showClear, clearUsers } = this.props;

        return (
            <div>
                {/* The form calls the onSubmit function, and the onSubmit function passess in the searchUsers function */}
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users" value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {/* if this.props.showClear is true, then show the button */}
                {showClear && 
                    <button 
                    className="btn btn-light btn-block" 
                    onClick={clearUsers}>
                        Clear
                    </button>}
            </div>
        )
    }
}

export default Search
