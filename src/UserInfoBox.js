import React from 'react';
import { connect } from 'react-redux';
import './UserInfoBox.css';

const UserInfoBox = props => {
    return (
        <div className="col-xs-12 info-container">
            <div className="col-xs-12 col-sm-3 col-md-2">
                <img className="avatar-picture img-responsive img-circle center-block" src={props.user.avatar_url} alt={props.user.login}/>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-2 text-center">
                <h3 className="username"><a className="username-link" href={props.user.html_url}>{props.user.login}</a></h3>
            </div>

            <div className="hidden-xs hidden-sm col-md-1 col-md-offset-4 text-center">
                <h3><small>Repos</small></h3>
                <h3><small>{props.user.public_repos}</small></h3>
            </div>
            <div className="hidden-xs hidden-sm col-md-1 text-center">
                <h3><small>Followers</small></h3>
                <h3><small>{props.user.followers}</small></h3>
            </div>
            <div className="hidden-xs hidden-sm col-md-1 text-center">
                <h3><small>Following</small></h3>
                <h3><small>{props.user.following}</small></h3>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserInfoBox);
