import React from 'react';
import NavLink from './NavLink/NavLink';
import logoImg from '../../resources/images/logo.svg';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="Navbar">
			<div className="NavLinkDiv">
			    <NavLink to="/" classes='NavLinkLarge NavLinkBold' imgSrc={logoImg} text="EasyMeshVR" />
			    <NavLink to="/download" classes="NavLinkRegular" text="Download" />
			    <NavLink to="/upload" classes="NavLinkRegular" text="Upload" />
			</div>
			<div className="NavLinkDiv">
			    <NavLink to="/about" classes="NavLinkRegular" text="About Us" />
			</div>
		</nav>
	)
};

export default Navbar;
