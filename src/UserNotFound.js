import React from 'react';
import { Link } from 'react-router-dom';
import './UserNotFound.css';
import NoUserPic from './img/UserNotFound.png';

const UserNotFound = props => {
    return (
        <div className="col-xs-4 col-xs-offset-4">
            <img className="center-block img-responsive" src={NoUserPic} alt="User not found" />
            <h3 className="text-center">User not found</h3>
            <Link to="/"><button className="btn btn-danger center-block">Search again</button></Link>
        </div>
    )
}

export default UserNotFound;
