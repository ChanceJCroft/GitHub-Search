import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

//destructure the props so that you can keep the code clean below
const Users = ({ users, loading }) => {
    if(loading){
      return <Spinner />
    } else {
        return (
            <div style={userStyle}>
              {/*this pulls the array of users from App.js, from its STATE to these PROPS */}
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
} 
}


Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '0.5rem'
}

export default Users

