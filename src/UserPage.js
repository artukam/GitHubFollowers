import React from 'react';
import { connect } from 'react-redux';
import './UserPage.css';
import UserInfoBox from './UserInfoBox';
import UserFollowerBox from './UserFollowerBox';
import UserNotFound from './UserNotFound';

const UserPage = props => {
    let userDisplay;
    if (props.searchState) {
        userDisplay = (
            <div className="container-fluid">
                <UserInfoBox />
                <UserFollowerBox />
            </div>
        )
    } else {
        userDisplay = <UserNotFound />
    }
    return (
        <div className="container">
            {userDisplay}
        </div>
    )
}

function mapStatetoProps(state) {
    return {
        searchState: state.searchState
    }
}

export default connect(mapStatetoProps)(UserPage);
