import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './UserFollowerBox.css';
import UserFollowerCard from './UserFollowerCard';
import { addFollowers } from './actions/action';

class UserFollowerBox extends Component {
    constructor() {
        super();
        this.addMoreFollowers = this.addMoreFollowers.bind(this);
    }

    addMoreFollowers() {
        axios.get(`https://api.github.com/users/${this.props.user.login}/followers?per_page=100&page=${this.props.page}`)
            .then(res => {
                this.props.addFollowers(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        let followerCards, addMoreButton;
        if (this.props.followersTotal === 0) {
            followerCards = (
                <div>
                    <p>No followers found.</p>
                </div>
            )
        } else {
            followerCards = this.props.followers.map(val => {
                return <UserFollowerCard key={val.id}
                                         name={val.login}
                                         url={val.html_url}
                                         picture={val.avatar_url}/>
            })
        }
        if (this.props.followers.length < this.props.followersTotal) {
            addMoreButton = (
                <div className="add-more-btn col-xs-4 col-xs-offset-4 col-md-4 col-md-offset-1">
                    <button className="btn btn-primary" onClick={this.addMoreFollowers}>
                        Show more followers
                    </button>
                </div>
            )
        }
        return (
            <div className="col-xs-12">
                <div className="col-xs-12">
                    <h2><small>Followers</small></h2>
                    <hr />
                </div>
                <div className="col-xs-12">
                    {followerCards}
                </div>
                {addMoreButton}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        followersTotal: state.followersTotal,
        followers: state.followers,
        page: state.page
    };
}

export default connect(mapStateToProps, { addFollowers })(UserFollowerBox);
