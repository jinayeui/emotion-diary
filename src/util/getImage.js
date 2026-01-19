import emotion1 from '../assets/images/emotion1.png';
import emotion2 from '../assets/images/emotion2.png';
import emotion3 from '../assets/images/emotion3.png';
import emotion4 from '../assets/images/emotion4.png';
import emotion5 from '../assets/images/emotion5.png';

export function getImage(img) {
	switch (img) {
		case 'emotion1':
			return emotion1;
		case 'emotion2':
			return emotion2;
		case 'emotion3':
			return emotion3;
		case 'emotion4':
			return emotion4;
		case 'emotion5':
			return emotion5;
		default:
			return null;
	}
}