import {useState, useEffect} from 'react';

const useTypeWriter = (text: string, typingSpeed = 60, delay?: number) => {
	const [displayedText, setDisplayedText] = useState('');

	useEffect(() => {
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
	}, [text, typingSpeed, delay]);

	return displayedText;
};

export default useTypeWriter;
