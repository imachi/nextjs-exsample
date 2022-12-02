import { use } from 'react';

type Article = {
	title: string;
	description: string;
};

async function getData() {
	const res = await fetch('http://localhost:3000/api/articles');
	return res.json();
}

export default function Page() {
	const articles: Article[] = use(getData());

	return (
		<div
			style={{
				width: '75vw',
				margin: 'auto',
				backgroundColor: '#FD841F',
				display: 'flex',
				padding: '30px',
			}}
		>
			{articles.map((a) => {
				return (
					<div
						key={a.title}
						style={{
							width: '20%',
							backgroundColor: 'white',
							padding: '20px',
							borderRadius: '10px',
							boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.2)',
							margin: '10px',
						}}
					>
						<h3>{a.title}</h3>
						<p>{a.description}</p>
					</div>
				);
			})}
		</div>
	);
}
