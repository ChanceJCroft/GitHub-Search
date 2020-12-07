import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = ({ icon, title }) => {
//Do not need to run the render() command if it is a function and not a state
        return (
          <nav className='navbar bg-primary'>
            <div>
                <h1>
                    <i className={icon} />{title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                </ul>
            </div>
            </nav>  
        )
}

//setting props to pass into other components as needed
Navbar.defaultProps = {
    title: ' Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
