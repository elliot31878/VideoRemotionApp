import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const BAR_HEIGHT = 160;

const TOTAL_RANKS = 5;

export const Bar = ({endWidth, color, value, rank}) => {
	const frame = useCurrentFrame();
	const {fps, width} = useVideoConfig();
	const opacity = interpolate(
		frame - (TOTAL_RANKS - rank) * 3 - 10,
		[0, 12],
		[0, 1]
	);
	const animatedWidthProgress = spring({
		frame: frame - 60 - rank * 3,
		fps,
		config: {
			damping: 200,
		},
	});
	const animatedWidth = interpolate(
		animatedWidthProgress,
		[0, 1],
		[BAR_HEIGHT, endWidth + 100]
	);
	const left = interpolate(
		animatedWidthProgress,
		[0, 1],
		[width / 2 - BAR_HEIGHT / 2, -80]
	);
	const labelProgress = spring({
		frame: frame - 90 - rank * 20,
		fps,
		config: {
			damping: 200,
			mass: 0.6,
		},
	});
	return (
		<div
			style={{
				width: 2000,
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				color: 'white',
				fontSize: '28px',
				fontFamily: 'Arial, Helvetica, sans-serif',
				fontWeight: 'bold',
				lineHeight: 1.4,
				textShadow: '0 0 6px rgba(0, 0, 0, 0.4)',
			}}
		>
			<div
				style={{
					height: `${BAR_HEIGHT}px`,
					backgroundColor: `${color}`,
					borderRadius: `${BAR_HEIGHT / 2}px`,
					marginTop: '10px',
					boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)',
					opacity,

					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: animatedWidth,
					marginRight: left,
				}}
				endWidth={endWidth}
				color={color}
			>
				{animatedWidth > 450 ? value : rank}
			</div>

			<div
				style={{
					opacity: labelProgress,
					transform: `translateY(${interpolate(
						labelProgress,
						[0, 1],
						[40, 0]
					)}px)`,
				}}
			/>
		</div>
	);
};
