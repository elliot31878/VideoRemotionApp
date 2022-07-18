import {useEffect, useState} from 'react';
import {fps} from '../constants';
export const useVideoInfo = (video) => {
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		var videoElement = document.createElement('video');
		videoElement.preload = 'metadata';
		videoElement.onloadedmetadata = function () {
			setDuration(Math.round(videoElement.duration * fps));
		};
		videoElement.src = video;
	}, [duration]);

	return {
		duration,
	};
};
