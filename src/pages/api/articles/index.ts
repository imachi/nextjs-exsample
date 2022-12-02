import type { NextApiRequest, NextApiResponse } from 'next';

type Article = {
	title: string;
	description: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Article[]>) => {
	await new Promise((resolve) => setTimeout(resolve, 3000));

	res.status(200).json([
		{ title: 'article 1', description: 'description' },
		{ title: 'article 2', description: 'description' },
		{ title: 'article 3', description: 'description' },
	]);
};
