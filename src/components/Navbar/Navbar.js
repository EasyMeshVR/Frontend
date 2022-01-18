import React, { useState } from 'react';
import NavLink from './NavLink/NavLink';
import logoImg from '../../resources/images/logo.svg';
import navbarStyles from './Navbar.module.css';

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
			<div className={navbarStyles.HamburgerMenuLinksDiv}>
				{renderNavLinks()}
			</div> :
			<></>
		)
	);

	return (
		<nav className={navbarStyles.Navbar}>
			<div className={navbarStyles.BrandNameDiv}>
			    <NavLink to="/" classes='NavLinkLarge NavLinkBold' imgSrc={logoImg} text="EasyMeshVR" />
			</div>
			<div className={navbarStyles.NavLinkDiv}>
				{renderNavLinks()}
			</div>
			<div className={navbarStyles.HamburgerMenuDiv}>
	            <button 
					onClick={() => setMenuToggled(!menuToggled)} 
					className={navbarStyles.MenuToggleButton}
				>
	                <span className={navbarStyles.MenuBar}></span>
	                <span className={navbarStyles.MenuBar}></span>
	                <span className={navbarStyles.MenuBar}></span>
	            </button>
				{renderHamburgerMenuLinks()}
			</div>
		</nav>
	)
};

export default Navbar;
