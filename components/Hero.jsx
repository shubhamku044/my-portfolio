import Typed from 'react-typed';
import styles from '../styles/components/hero.module.scss';
import Image from 'next/image';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__container}>
				<div className={`${styles['hero__container-left']}`}>
					<h2>I am shubham</h2>
					<p>I am a frontend developer</p>
				</div>
				<div className={`${styles['hero__container-right']}`}>
					<div
						className={`${styles['hero__container-img-container']}`}
					>
						<Image
							src={'/portfolio_img.jpg'}
							layout="fill"
							objectFit="cover"
							className={`${styles['hero__container-img']}`}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
