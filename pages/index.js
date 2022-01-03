import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				<Hero />
			</main>
		</div>
	);
}
