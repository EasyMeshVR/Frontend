import { Link } from 'react-router-dom';
import footerStyles from './Footer.module.css';
import logoImg from '../../resources/images/logo.png';

const Footer = () => {
	return (
		<footer className={footerStyles.SiteFooter}>
            <div className={footerStyles.Container}>
                <div className={`${footerStyles.SiteFooterInner} ${footerStyles.HasTopDivider}`}>
                    <div className={footerStyles.FooterBrand}>
                        <Link to="/">
                            <img className={footerStyles.Logo} src={logoImg} alt="Logo" />
                        </Link>
                        <div className={footerStyles.FooterCopyright}>&copy; 2022 EasyMeshVR</div>
                    </div>
                    <ul className={`${footerStyles.FooterLinks} ${footerStyles.ListReset}`}>
                        <li>
                            <a href="/">
                                Download App
                            </a>
                        </li>
						<li>
                            <Link to="/upload">
                                Upload Model
                            </Link>
                        </li>
						<li>
                            <Link to="/download">
                                Download Model
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
	);
};

export default Footer;