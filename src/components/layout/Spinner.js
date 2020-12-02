//need to make sure you import Fragment if you want to use it
import React, {Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = () => 
        <Fragment>
            <img src={spinner} alt="Loading..." style={{ width: '250px', margin: 'auto', display: 'block' }} />
        </Fragment>

export default Spinner
