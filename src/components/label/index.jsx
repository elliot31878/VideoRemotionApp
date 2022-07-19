export const Label = ({progress, textColor, backgroundColor, font, text}) => {
	return (
		<div
			style={{
				width: '100%',
				height: 'fit-content',

				display: 'flex',
				justifyContent: 'center',
				padding: 30,
				fontSize: '3.55rem',
				transform: `scale(${progress})`,
				fontStyle: 'bold',
				zIndex: 100,
				color: textColor,
				fontFamily: font,
			}}
		>
			<span
				style={{
					width: 'fit-content',
					padding: 10,
					height: 'fit-content',
					background: backgroundColor,
				}}
			>
				{text}
			</span>
		</div>
	);
};
