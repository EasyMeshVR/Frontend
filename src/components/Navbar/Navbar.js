import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="Navbar">
			<div className="NavLeft">
			    <Link className="Link" to="/">EasyMeshVR</Link>
			    <Link className="Link" to="/download">Download</Link>
			    <Link className="Link" to="/upload">Upload</Link>
			</div>
			<div className="NavRight">
				<Link className="Link" to="/about">About Us</Link>
			</div>
		</nav>
	)
};

export default Navbar;
