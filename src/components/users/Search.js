import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => {
        //the event sets the name and value based on what was pressed
        this.setState({ [e.target.name]: e.target.value })
    }
    //should use arrow functions, it is cleaner and simpler when using "this"
    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users" value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}

export default Search
