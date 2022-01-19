import React from 'react';
import MainSection from './MainSection';
import FeaturesSection from './FeaturesSection';
import homePageStyles from './HomePage.module.css';

const Home = () => {
	return (
		<div className={homePageStyles.Home}>
			<MainSection />
        	<FeaturesSection /> 
		</div>
	)
};

export default Home;
