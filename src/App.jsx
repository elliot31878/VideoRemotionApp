import {Composition} from 'remotion';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
