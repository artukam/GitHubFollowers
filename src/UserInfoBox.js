import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserInfoBox.css';

class UserInfoBox extends Component {
	render() {
		return (
			<div className="col-xs-12 info-container">
				<div className="col-xs-12 col-sm-3 col-md-2">
					<img className="avatar-picture img-responsive img-circle center-block" src={this.props.user.avatar_url} alt={this.props.user.login}/>
				</div>
				<div className="col-xs-12 col-sm-3 col-md-2 text-center">
					<h3 className="username"><a className="username-link" href={this.props.user.html_url}>{this.props.user.login}</a></h3>
				</div>

				<div className="hidden-xs hidden-sm col-md-1 col-md-offset-4 text-center">
					<h3><small>Repos</small></h3>
					<h3><small>{this.props.user.public_repos}</small></h3>
				</div>
				<div className="hidden-xs hidden-sm col-md-1 text-center">
					<h3><small>Followers</small></h3>
					<h3><small>{this.props.user.followers}</small></h3>
				</div>
				<div className="hidden-xs hidden-sm col-md-1 text-center">
					<h3><small>Following</small></h3>
					<h3><small>{this.props.user.following}</small></h3>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(UserInfoBox);
