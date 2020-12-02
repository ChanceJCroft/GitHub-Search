import React from 'react';
import PropTypes from 'prop-types';


const Navbar = ({ icon, title }) => {
//Do not need to run the render() command if it is a function and not a state
        return (
            <div>
                <h1>
                    <i className={icon} />{title}
                </h1>
            </div>
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
