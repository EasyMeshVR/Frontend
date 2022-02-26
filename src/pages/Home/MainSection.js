import React from 'react';
import mainSectionStyles from './MainSection.module.css';

const MainSection = () => {
	return (
		<section className={mainSectionStyles.Hero}>
			<div className={mainSectionStyles.HeroInner}>
				<div className={mainSectionStyles.HeroCopy}>
					<h1 className={`${mainSectionStyles.HeroTitle} ${mainSectionStyles.mt0}`}>
						EasyMeshVR
					</h1>
					<p className={mainSectionStyles.HeroParagraph}>
						Design and edit STL meshes within virtual reality, 
						collaborate with others, and download/upload your STL models using our
						website or within our VR application.
					</p>
					<div className={mainSectionStyles.HeroCta}>
						<a 
							className={`${mainSectionStyles.Button} ${mainSectionStyles.ButtonShadow}`} 
							href="/"
						>
							Learn more
						</a>
						<a 
							className={`${mainSectionStyles.Button} ${mainSectionStyles.ButtonPrimary} ${mainSectionStyles.ButtonShadow}`} 
							href="/"
						>
							Download App
						</a>
					</div>
				</div>
				<iframe 
					className={mainSectionStyles.DeviceMockup}
					width="560" 
					height="315" 
					src="https://www.youtube.com/embed/i0Ctz1MZ3yk" 
					title="YouTube video player" 
					frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
					allowfullscreen
				>
				</iframe>
			</div>
		</section>
	)
};

export default MainSection;
