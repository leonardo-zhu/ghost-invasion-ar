import {useState, useEffect} from 'react';

type Options = {
	delay?: number;
	start?: boolean;
};

const useTypeWriter = (text: string, typingSpeed = 60, options?: Options) => {
	const {delay, start = true} = options || {};
	const [displayedText, setDisplayedText] = useState('');

	useEffect(() => {
		if (!start) {
			setDisplayedText('');
			return;
		}

		setDisplayedText(''); // Reset displayed text when text changes
		const characters = text.split('');
		const timeouts: NodeJS.Timeout[] = [];

		const startTyping = () => {
			characters.forEach((char, index) => {
				const timeout = setTimeout(() => {
					setDisplayedText((prev) => prev + char);
				}, index * typingSpeed);
				timeouts.push(timeout);
			});
		};

		let delayTimeout: NodeJS.Timeout | undefined;
		if (delay) {
			delayTimeout = setTimeout(startTyping, delay);
		} else {
			startTyping();
		}

		return () => {
			timeouts.forEach(clearTimeout);
			if (delayTimeout) clearTimeout(delayTimeout);
		};
	}, [text, typingSpeed, delay, start]);

	return displayedText;
};

export default useTypeWriter;
