import type { NextApiRequest, NextApiResponse } from 'next';

type PopularContents = {
	title: string;
	description: string;
};

export default async (
	req: NextApiRequest,
	res: NextApiResponse<PopularContents[]>,
) => {
	await new Promise((resolve) => setTimeout(resolve, 3000));

	res.status(200).json([
		{ title: 'contents 1', description: 'description' },
		{ title: 'contents 2', description: 'description' },
		{ title: 'contents 3', description: 'description' },
	]);
};
