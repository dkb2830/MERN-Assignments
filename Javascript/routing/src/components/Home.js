import React from 'react';
import {Link} from '@reach/router';

const Home = props => {
    return(
        <div>
            Welcome!
            <br/>
            <Link to ="/{id}">Number</Link>
        </div>
    )
}

export default Home;