import {Composition} from 'remotion';
import {MyVideo} from './components/video';
import {fps, screenSize} from './constants';
export const App = () => {
	return (
		<>
			<Composition
				id="Video"
				component={MyVideo}
				durationInFrames={2000}
				fps={fps}
				width={screenSize[0]}
				height={screenSize[1]}
			/>
		</>
	);
};
