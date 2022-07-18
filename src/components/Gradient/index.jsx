import {AbsoluteFill, useCurrentFrame} from 'remotion';

import {colors} from '../../constants';

export const Gradient = ({height}) => {
	const frame = useCurrentFrame();
	const duration = 4 * 30;
	const offset = height * 1.5 * ((frame % duration) / duration);
	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					height: height * 1.5,
					background: `linear-gradient(to bottom, ${colors.blue[0]}, ${colors.blue[0]},
						 ${colors.blue[1]}, ${colors.blue[1]}, ${colors.blue[1]}, ${colors.blue[0]})`,
					transform: `translateY(-${offset}px)`,
				}}
			/>
			<AbsoluteFill
				style={{
					height: height * 1.5,
					top: height * 1.5 - 1,
					background: `linear-gradient(to bottom, ${colors.blue[0]}, ${colors.blue[0]},
						 ${colors.blue[1]}, ${colors.blue[1]}, ${colors.blue[1]}, ${colors.blue[0]})`,
					transform: `translateY(-${offset}px)`,
				}}
			/>
		</AbsoluteFill>
	);
};
