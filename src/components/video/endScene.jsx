import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import {colors} from '../../constants';
import {Bar} from '../bar';

const TITLE_OFFSET = 50;
const FONT_SIZE = 45;

export const EndScene = ({ranking, title}) => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const moveUp = spring({
		frame,
		fps,
		config: {
			damping: 200,
		},
	});

	const translateY = interpolate(
		moveUp,
		[0, 1],
		[height / 2 - TITLE_OFFSET - FONT_SIZE, 0]
	);

	return (
		<AbsoluteFill style={{backgroundColor: 'transparent', direction: 'rtl'}}>
			<AbsoluteFill
				style={{
					paddingBottom: 100,
					transform: `translateY(${translateY}px)`,
				}}
			>
				<div
					style={{
						fontFamily:
							'---apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
						color: 'white',
						fontSize: `${FONT_SIZE}px`,
						fontWeight: 600,
						textAlign: 'center',

						position: 'absolute',
						top: `${TITLE_OFFSET}px`,
						lineHeight: 1,
						textShadow: '0 0 6px rgba(0, 0, 0, 0.4)',
						paddingLeft: 50,
						paddingRight: 50,
					}}
				>
					{title}
				</div>
				<div style={{height: 290}} />
				<Bar
					color={colors.yellow[0]}
					endWidth={width / 2}
					rank={1}
					value={ranking[0]}
				/>
				<Bar
					color={colors.blue[2]}
					endWidth={width / 2 - 40}
					rank={2}
					value={ranking[1]}
				/>
				<Bar
					color={colors.red[2]}
					endWidth={width / 2 - 80}
					rank={3}
					value={ranking[2]}
				/>
				<Bar
					color={colors.red[0]}
					endWidth={width / 2 - 120}
					rank={4}
					value={ranking[3]}
				/>
				<Bar
					color={colors.gray[1]}
					endWidth={width / 2 - 160}
					rank={5}
					value={ranking[4]}
				/>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
