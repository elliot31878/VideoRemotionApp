import {
	Video,
	Sequence,
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Audio,
} from 'remotion';

import {footage} from '../../constants';
import music from '../../assets/musics/music_captive.mp3';
import {useVideoInfo} from '../../hooks/useVideoInfo';

export const MyVideo = () => {
	const frame = useCurrentFrame();
	const {height, width, fps} = useVideoConfig();
	const progress = spring({
		frame,
		fps,
		config: {
			mass: 4,
			damping: 1000,
		},
	});
	const size = height * 1.5;
	return (
		<AbsoluteFill
			style={{
				width: '100%',
				height: '100%',
				background: 'black',
			}}
		>
			<div
				style={{
					height: size,
					width: size,
					left: -(size - width) / 2,
					top: -(size - height) / 2,
					position: 'absolute',
					overflow: 'hidden',
					transform: `scale(${progress})`,
					opacity: progress,
				}}
			>
				<Audio src={music} />
				{footage.map((value, index) => {
					const video = require('../../assets/footage/' + value.video);

					const {duration} = useVideoInfo(video, index);

					if (index !== 0) {
						value.from = footage[index - 1].time;
						value.time = footage[index - 1].time + duration;
					} else {
						value.time = duration;
					}

					return (
						<Sequence key={index} from={value.from}>
							<AbsoluteFill
								key={index}
								style={{
									width: '100%',
									zIndex: index,
									height: '100%',
									backgroundColor: index !== 2 ? 'black' : 'transparent',
								}}
							>
								<Video
									key={index}
									src={video}
									muted
									style={{width: '100%', height: '100%', zIndex: index}}
								/>
							</AbsoluteFill>
						</Sequence>
					);
				})}
			</div>
		</AbsoluteFill>
	);
};
