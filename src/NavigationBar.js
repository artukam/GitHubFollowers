import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import PlainLogo from './img/GitHubFollowersPlainLogo.png';
import MiniSearchBar from './MiniSearchBar';

const NavigationBar = props => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-collapse" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/"><img className="img-responsive img-logo" src={PlainLogo} alt="GitHub Followers"/></Link>
                </div>
                <div className="collapse navbar-collapse" id="menu-collapse">
                    <MiniSearchBar />
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;
