import emotion1 from '../assets/images/emotion1.png';
import emotion2 from '../assets/images/emotion2.png';
import emotion3 from '../assets/images/emotion3.png';
import emotion4 from '../assets/images/emotion4.png';
import emotion5 from '../assets/images/emotion5.png';

export const getImage = (id) => {
	switch (id) {
		case 'emotion_1':
			return emotion1;
		case 'emotion_2':
			return emotion2;
		case 'emotion_3':
			return emotion3;
		case 'emotion_4':
			return emotion4;
		case 'emotion_5':
			return emotion5;
		default:
			return null;
	}
};

export const getColor = (id) => {
	switch (id) {
		case 'emotion_1':
			return 'rgb(100,201,100)';
		case 'emotion_2':
			return 'rgb(157,215,114)';
		case 'emotion_3':
			return 'rgb(253,206,23)';
		case 'emotion_4':
			return 'rgb(253,132,70)';
		case 'emotion_5':
			return 'rgb(253,86,95)';
		default:
			return 'rgb(236, 236, 236)';
	}
};