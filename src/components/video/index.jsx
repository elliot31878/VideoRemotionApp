import {
	Video,
	Sequence,
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Audio,
} from 'remotion';

import {Gradient} from '../../components/gradient';
import {Card} from '../../components/card';
import {footage} from '../../constants';
import musicAmbient from '../../assets/musics/music_captive.mp3';
import musicRock from '../../assets/musics/music_rock.mp3';
import {useVideoInfo} from '../../hooks/useVideoInfo';
import {Label} from '../../components/label';
import {EndScene} from './endScene';

import {
	startText,
	middleText,
	information,
	endtext,
	colors,
	mainFont,
	secondaryFont,
	musicCategory,
} from '../../constants';

export const MyVideo = () => {
	const frame = useCurrentFrame();
	const {height, fps} = useVideoConfig();
	const progress = spring({
		frame,
		fps,
		config: {
			mass: 4,
			damping: 1000,
		},
	});

	const renderComponents = (index) => {
		switch (index) {
			case 0:
				return (
					<Label
						progress={progress}
						backgroundColor={colors.yellow[1]}
						textColor={colors.gray[1]}
						font={mainFont}
						text={startText}
					/>
				);

			case footage.length - 1:
				return (
					<EndScene
						title={endtext}
						ranking={[
							middleText[0].main,
							middleText[1].main,
							middleText[2].main,
							middleText[3].main,
							middleText[4].main,
						]}
					/>
				);
		}
	};
	return (
		<AbsoluteFill
			style={{
				width: '100%',
				height: '100%',
				background: 'black',
			}}
		>
			<Gradient height={height} />

			<div
				style={{
					height: '100%',
					width: '100%',

					position: 'absolute',
					overflow: 'hidden',
				}}
			>
				<Audio src={musicCategory === 'ambient' ? musicAmbient : musicRock} />
				{footage.map((value, index) => {
					const video = require('../../assets/footage/' + value.video);

					const {duration} = useVideoInfo(video, index);

					if (index !== 0) {
						value.from = footage[index - 1].time;
						value.time = footage[index - 1].time + duration;
					} else {
						value.time = duration;
					}
					const opacity = frame >= value.time ? 1 : frame / value.time;
					return (
						<>
							<Sequence
								key={index}
								from={value.from}
								style={{zIndex: 102}}
								durationInFrames={duration !== 0 ? duration : 1}
							>
								{renderComponents(index)}
							</Sequence>
							<Sequence key={index} from={1} durationInFrames={500}>
								<Card
									progress={progress}
									colors={colors}
									mainFont={mainFont}
									secondaryFont={secondaryFont}
									text={information[0]}
									secondaryText={information[1]}
								/>
							</Sequence>
							<Sequence key={index} from={value.from}>
								<AbsoluteFill
									key={index}
									style={{
										width: '100%',
										opacity: index === 0 || index === 2 ? opacity : 1,

										zIndex: index,
										background: index !== 0 ? 'black' : 'transparent',
										height: '100%',
									}}
								>
									<Video
										key={index}
										src={video}
										muted
										style={{
											width:
												index === footage.length - 1 ? 'fit-content' : '100%',
											height: '100%',
											margin: index === footage.length - 1 ? 50 : 0,
											padding: index === footage.length - 1 ? 50 : 0,

											borderRadius: index === footage.length - 1 ? '250px' : 0,
											zIndex: index,
										}}
									/>
								</AbsoluteFill>
							</Sequence>
						</>
					);
				})}
			</div>
		</AbsoluteFill>
	);
};
