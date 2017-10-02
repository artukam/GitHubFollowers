import React from 'react';
import './UserFollowerCard.css';

const UserFollowerCard = props => {
    return (
        <div className="col-xs-12 col-sm-4 col-sm-offset-1 follower-card">
            <div className="col-xs-2">
                <img className="img-circle img-followers" src={props.picture} alt={props.name}/>
            </div>
            <div className="col-xs-6 col-xs-offset-2 follower-name">
                <a className="card-link" href={props.url}>{props.name}</a>
            </div>
        </div>
    )
}

export default UserFollowerCard;
