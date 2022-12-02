'use client';
import { Suspense, use } from 'react';

import { Card, CardBody, Text } from '@chakra-ui/react';

import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

type PopularContents = {
	title: string;
	description: string;
};

async function getData() {
	const res = await fetch('http://localhost:3000/api/widgets');

	return res.json();
}

const Contents = () => {
	const contents: PopularContents[] = use(getData());
	return (
		<>
			{contents.map((item) => (
				<Card key={item.title}>
					<CardBody>
						<Text>{item.title}</Text>
					</CardBody>
				</Card>
			))}
		</>
	);
};

export const PopularContents = () => {
	return (
		<Suspense fallback={<Skeleton />}>
			<Contents />
		</Suspense>
	);
};
