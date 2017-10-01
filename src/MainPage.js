import React, { Component } from 'react';
import './MainPage.css';
import Logo from './img/GitHubFollowersLogo.png';
import MainSearchBar from './MainSearchBar.js';

class MainPage extends Component {
	render() {
		return (
			<div className="main-container col-xs-8 col-xs-offset-2">
				<img className="img-responsive center-block" src={Logo} alt="GitHub Followers"/>
				<MainSearchBar />
			</div>
		)
	}
}

export default MainPage;
