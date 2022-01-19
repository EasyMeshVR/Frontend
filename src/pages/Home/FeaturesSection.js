import React from 'react';
import featuresSectionStyles from './FeaturesSection.module.css';
import cubeImage from '../../resources/images/cube.png';
import multiplayerImage from '../../resources/images/multiplayer.png';
import cloudImage from '../../resources/images/cloud.png';

const FeaturesSection = () => {
	return (
		<section className={featuresSectionStyles.Features}>
			<div className={featuresSectionStyles.Container}>
				<div className={`${featuresSectionStyles.SectionInner} ${featuresSectionStyles.HasBottomDivider}`}>
					<h2 className={`${featuresSectionStyles.SectionTitle} ${featuresSectionStyles.mt0}`}>
						EasyMeshVR Features
					</h2>
					<div className={featuresSectionStyles.FeaturesWrap}>
						<div className={featuresSectionStyles.Feature}>
							<div className={featuresSectionStyles.FeatureInner}>
								<div className={featuresSectionStyles.FeatureIconDiv}>
									<img className={featuresSectionStyles.FeatureIconImg} src={cubeImage} alt="A cube" />
								</div>
								<h3 className={`${featuresSectionStyles.FeatureTitle} ${featuresSectionStyles.mt24}`}>
									Design & Edit Organic Meshes
								</h3>
								<p className={`${featuresSectionStyles.TextSM} ${featuresSectionStyles.mb0}`}>
									Design and edit organic meshes using intuitive controls and the immersive features of virtual reality.
								</p>
							</div>
						</div>
						<div className={featuresSectionStyles.Feature}>
							<div className={featuresSectionStyles.FeatureInner}>
								<div className={featuresSectionStyles.FeatureIconDiv}>
									<img className={featuresSectionStyles.FeatureIconImg} src={multiplayerImage} alt="Multiplayer" />
								</div>
								<h3 className={`${featuresSectionStyles.FeatureTitle} ${featuresSectionStyles.mt24}`}>
									Collaborate With Others
								</h3>
								<p className={`${featuresSectionStyles.TextSM} ${featuresSectionStyles.mb0}`}>
									Collaborate with others within virtual reality using our multiplayer servers.
								</p>
							</div>
						</div>
						<div className={featuresSectionStyles.Feature}>
							<div className={featuresSectionStyles.FeatureInner}>
								<div className={featuresSectionStyles.FeatureIconDiv}>
									<img className={featuresSectionStyles.FeatureIconImg} src={cloudImage} alt="A cloud with an upload arrow" />
								</div>
								<h3 className={`${featuresSectionStyles.FeatureTitle} ${featuresSectionStyles.mt24}`}>
									Save Your Work To The Cloud
								</h3>
								<p className={`${featuresSectionStyles.TextSM} ${featuresSectionStyles.mb0}`}>
									Easily upload your creations to our temporary cloud storage service and download them on other
									devices for future use.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};

export default FeaturesSection;
