import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUser, setFollowers, resetUser } from './actions/action';
import './MiniSearchBar.css';

class MiniSearchBar extends Component {
	constructor() {
		super();
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
		var userData;
		axios.get(`https://api.github.com/users/${this.state.username}`)
				.then ( res => {
					userData = res.data;
					return axios.get(`https://api.github.com/users/${this.state.username}/followers?per_page=100`)
				})
				.then (followerRes => {
					this.props.setUser(userData);
					this.props.setFollowers(followerRes.data);
					this.setState({
						username: "",
					});
					this.input.reset();
				})
				.catch( error => {
					this.props.resetUser();
				})
	}

	render() {
		return (
			<div className="form mini-searchbar-container col-xs-4 pull-right"> 
				<form onSubmit={this.submitSearch} ref={(input) => {this.input = input}}>
					<div className="input-group">
						<input type="text" 
						       name="username"
						       className="form-control" 
						       placeholder="Search Github User" 
						       onChange={this.changeText}/>
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

export default connect(undefined, { setUser, setFollowers, resetUser } )(MiniSearchBar);