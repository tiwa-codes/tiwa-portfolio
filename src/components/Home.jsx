import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Timeline from './Timeline';
import BackgroundEffects from './BackgroundEffects';
import Footer from './Footer';

const Home = () => {
	return (
		<div className='area relative z-0 bg-black w-screen min-h-screen'>
			<BackgroundEffects />
			<Hero />
			<Skills />
			<Timeline />
			<Footer/>
		</div>	
	);
}

export default Home;