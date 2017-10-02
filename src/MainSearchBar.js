import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUser, setFollowers, resetUser } from './actions/action';
import './MainSearchBar.css';

class MainSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        }
        this.changeText = this.changeText.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
    }

    changeText(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitSearch(e) {
        e.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.username}`)
            .then ( res => {
                this.props.setUser(res.data);
                return axios.get(`https://api.github.com/users/${this.state.username}/followers?per_page=100`)
            })
            .then (followerRes => {
                this.props.setFollowers(followerRes.data);
                this.props.history.push("/search");
            })
            .catch( error => {
                this.props.resetUser();
                this.props.history.push("/search");
            })
    }

    render() {
        return (
            <div className="form col-xs-6 col-xs-offset-3"> 
                <form onSubmit={this.submitSearch}>
                    <div className="input-group">
                        <input type="text" name="username" className="form-control" placeholder="Search Github User" onChange={this.changeText}/>
                        <div className="input-group-btn">
                            <button type="submit" className="btn btn-danger">
                                <span className="glyphicon glyphicon-search" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(undefined, { setUser, setFollowers, resetUser } )(withRouter(MainSearchBar));
