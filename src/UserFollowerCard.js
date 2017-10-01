import React, { Component } from 'react';
import './UserFollowerCard.css';

class UserFollowerCard extends Component {
	render() {
		return (
			<div className="col-xs-12 col-sm-4 col-sm-offset-1 follower-card">
				<div className="col-xs-2">
					<img className="img-circle img-followers" src={this.props.picture} alt={this.props.name}/>
				</div>
				<div className="col-xs-6 col-xs-offset-2 follower-name">
					<a className="card-link" href={this.props.url}>{this.props.name}</a>
				</div>
			</div>
		)
	}
}

export default UserFollowerCard;