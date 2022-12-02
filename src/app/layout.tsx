import { Header } from 'components/Header';
import { Widget } from 'components/Widget';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body
				style={{
					background: '#3E6D9C',
					margin: '0',
				}}
			>
				<Header />
				<div
					style={{
						display: 'flex',
						height: '80vh',
						width: '95%',
						margin: 'auto',
						marginTop: '20px',
					}}
				>
					<Widget />
					<div>{children}</div>
				</div>
			</body>
		</html>
	);
}
