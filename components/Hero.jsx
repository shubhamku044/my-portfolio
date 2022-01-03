import Typed from 'react-typed';

const Hero = () => {
	return (
		<div className="relative h-screen flex justify-center items-center">
			<video
				className="absolute h-full w-full top-0 left-0 object-cover -z-10"
				autoPlay
				muted
				loop
			>
				<source src="/bg_video_Trim.mp4" />
			</video>
			<div>
				<Typed
					strings={['Hi, There! 👋', "I'm Shubham Kumar..."]}
					typeSpeed={100}
					className="text-4xl font-semibold text-violet-800"
				/>
			</div>
		</div>
	);
};

export default Hero;
