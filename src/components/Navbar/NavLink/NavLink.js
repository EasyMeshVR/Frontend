import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';

const NavLink = ({ to, text, imgSrc, classes }) => {
	return (
		<Link className={`${classes} NavLink`} to={to}>
			{text}
			{imgSrc ? <img src={imgSrc} alt="logo"/> : <></>}
		</Link>
	)
};

export default NavLink;
