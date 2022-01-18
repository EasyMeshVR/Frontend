import React from 'react';
import MainSection from './MainSection';
import FeaturesSection from './FeaturesSection';
import homePageStyles from './HomePage.module.css';

const Home = () => {
	return (
		<div className={homePageStyles.Home}>
			{/* <div className={homePageStyles.ButtonDiv}>
				<button 
					className={`${homePageStyles.Button} ${homePageStyles.ButtonDark}`}
				>
					Learn More
				</button>
				<button 
					className={`${homePageStyles.Button} ${homePageStyles.ButtonLight}`}
				>
					Download App
				</button>
			</div> */}
            
			<MainSection />
        	<FeaturesSection /> 
		</div>
	)
};

export default Home;
