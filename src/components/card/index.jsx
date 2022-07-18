export const Card = ({
	progress,
	colors,
	mainFont,
	secondaryFont,
	text,
	secondaryText,
}) => {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',

				transform: `scale(${progress})`,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					boxShadow: `0 14px 28px ${colors.gray[1]}, 0 10px 10px ${colors.gray[1]}`,
					display: 'grid',
					fontFamily: 'Trebuchet MS, sans-serif',
					margin: '20px auto',
					width: '850px',
					height: '500px',
					gridTemplateColumns: 'repeat(12, 1fr)',
					gridTemplateRows: 'repeat(4, 1fr)',
				}}
			>
				<div
					style={{
						backgroundColor: colors.blue[0],
						gridColumn: '8 / span 5',
						gridRow: '1 / span 4',
					}}
					class="blue"
				></div>
				<div
					style={{
						backgroundColor: colors.yellow[1],
						gridColumn: '1 / span 7',
						gridRow: '1 / span 4',
					}}
					class="yellow"
				></div>
				<div
					class="pink"
					style={{
						backgroundColor: colors.red[2],
						clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
						gridRow: '1 / span 3',
						gridColumn: '1 / span 11',
						position: 'relative',
						zIndex: 2,
					}}
				></div>
				<div
					class="dots"
					style={{
						gridColumn: ' 1 / span 12',
						gridRow: '3 / span 2',
						margin: '0 0 15px 20px',
						zIndex: 1,
					}}
				></div>
				<div
					class="personal-intro"
					style={{
						background: 'black',
						color: colors.gray[2],
						display: 'flex',
						flexDirection: 'column',
						gridColumn: '4 / span 6',
						gridRow: '2 / span 2',
						justifyContent: 'center',
						textAlign: 'center',
						zIndex: 3,
					}}
				>
					<p
						style={{
							letterSpacing: '1px',
							fontFamily: mainFont,
							textTransform: 'uppercase',
							fontSize: '20px',
						}}
					>
						{text}
					</p>
					<p
						style={{
							letterSpacing: '1px',
							textTransform: 'uppercase',
							fontSize: '18px',
							fontFamily: secondaryFont,
							marginTop: '2px',
						}}
					>
						{secondaryText}
					</p>
				</div>
			</div>
		</div>
	);
};
