import {Composition} from 'remotion';
import {MyVideo} from './components/video';
export const App = () => {
	return (
		<>
			<Composition
				id="Video"
				component={MyVideo}
				durationInFrames={4000}
				fps={60}
				width={1920}
				height={1080}
			/>
		</>
	);
};
