'use client';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export const Header = () => {
	return (
		<Box bgColor='#001253' textAlign='center' p='30px'>
			<Link href='./contact'>
				<StarIcon color='#ffffff' />
			</Link>
		</Box>
	);
};
