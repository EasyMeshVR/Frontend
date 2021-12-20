import React, { useState } from 'react';
import NavLink from './NavLink/NavLink';
import logoImg from '../../resources/images/logo.svg';
import './Navbar.css';

const Navbar = () => {
	const [menuToggled, setMenuToggled] = useState(false);

	const renderNavLinks = () => (
		<>
			<NavLink to="/download" classes="NavLinkRegular" text="Download" />
		    <NavLink to="/upload" classes="NavLinkRegular" text="Upload" />
		    <NavLink to="/about" classes="NavLinkRegular" text="About" />
		</>
	);

	const renderHamburgerMenuLinks = () => (
		(menuToggled ? 
			<div className="HamburgerMenuLinksDiv">
				{renderNavLinks()}
			</div> :
			<></>
		)
	);

	return (
		<nav className="Navbar">
			<div className="BrandNameDiv">
			    <NavLink to="/" classes='NavLinkLarge NavLinkBold' imgSrc={logoImg} text="EasyMeshVR" />
			</div>
			<div className="NavLinkDiv">
				{renderNavLinks()}
			</div>
			<div className="HamburgerMenuDiv">
	            <a 
					href="#" 
					onClick={() => setMenuToggled(!menuToggled)} 
					className="MenuToggleButton"
				>
	                <span className="MenuBar"></span>
	                <span className="MenuBar"></span>
	                <span className="MenuBar"></span>
	            </a>
				{renderHamburgerMenuLinks()}
			</div>
		</nav>
	)
};

export default Navbar;
