import {useEffect, useState} from 'react';

export const useVideoInfo = (video) => {
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		var videoElement = document.createElement('video');
		videoElement.preload = 'metadata';
		videoElement.onloadedmetadata = function () {
			setDuration(Math.round(videoElement.duration * 60));
		};
		videoElement.src = video;
	}, [duration]);

	return {
		duration,
	};
};
