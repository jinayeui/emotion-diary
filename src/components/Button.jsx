import styled from 'styled-components';

export default function Button({ text, type, ariaLabel, onClick }) {
	return (
		<>
			<ButtonTag
				type="button"
				$type={type}
				aria-label={ariaLabel}
				onClick={onClick}
			>
				{text}
			</ButtonTag>
			{/* <button
				className={`${styles.btn} ${type ? styles[`btn_${type}`] : ''}`}
				type="button"
				aria-label={ariaLabel}
				onClick={onClick}
			>
				{text}
			</button> */}
		</>
	);
}

const ButtonTag = styled.button`
	padding: 12px 20px;
	border-radius: 6px;
	background-color: ${(props) => {
		if (props.$type === 'negative') return 'rgba(253, 86, 95)';
		if (props.$type === 'positive') return 'rgb(100, 201, 100)';
		return 'rgb(236, 236, 236)';
	}};
	color: ${(props) => (props.$type ? '#fff' : '#111')};
	font-size: 18px;
	font-weight: 500;
`;