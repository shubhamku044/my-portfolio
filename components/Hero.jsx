import styles from '../styles/components/hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__container}>
				<div className={`${styles['hero__container-left']}`}>
					<h2>I am shubham</h2>
					<p>I am a frontend developer</p>
					<ul className={`${styles['hero__container-icons']}`}>
						<li>
							<Link href="https://github.com/shubhamku044">
								<a target={'_blank'}>
									<Image
										src="/icons/github.svg"
										objectFit="contain"
										width={28}
										height={28}
									/>
								</a>
							</Link>
						</li>
						<li>
							<Link href="https://www.linkedin.com/in/shubhamku044/">
								<a target={'_blank'}>
									<Image
										src="/icons/linkedin.svg"
										objectFit="contain"
										width={28}
										height={28}
									/>
								</a>
							</Link>
						</li>
						<li>
							<Link href="https://twitter.com/shubhamku044">
								<a target={'_blank'}>
									<Image
										src="/icons/twitter.svg"
										objectFit="contain"
										width={28}
										height={28}
									/>
								</a>
							</Link>
						</li>
						<li>
							<Link href="https://www.instagram.com/thelegitprogrammer/">
								<a target={'_blank'}>
									<Image
										src="/icons/instagram.svg"
										objectFit="contain"
										width={28}
										height={28}
									/>
								</a>
							</Link>
						</li>
						<li>
							<Link href="https://wa.link/dopzjz">
								<a target={'_blank'}>
									<Image
										src="/icons/whatsapp.svg"
										objectFit="contain"
										width={28}
										height={28}
									/>
								</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={`${styles['hero__container-right']}`}>
					<div className={`${styles['hero__container-img-container']}`}>
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
