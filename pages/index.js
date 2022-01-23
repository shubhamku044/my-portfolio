import Head from 'next/head';
import Hero from '../components/Hero';
import UnderDevelopment from '../components/UnderDevelopment';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				<Hero />
				<UnderDevelopment />
			</main>
		</div>
	);
}
