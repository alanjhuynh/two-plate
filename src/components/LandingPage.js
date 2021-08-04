import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const LandingPage = (props) => {

    return(
        <div>
            <br></br>
            <h1 className='centered'>LANDING PAGE COMING SOON!</h1>
            <Link to='/dashboard'>
                <h1 className='centered'> DASHBOARD </h1>
            </Link>

        </div>
    )
};

export default LandingPage;