import styled from 'styled-components';

export default function Button({ text, variant, ariaLabel, onClick, className }) {
	return (
		<>
			<ButtonTag
				type="button"
				variant={variant}
				aria-label={ariaLabel}
				onClick={onClick}
				className={className}
			>
				{text}
			</ButtonTag>
			{/* <button
				className={`${styles.btn} ${variant ? styles[`btn_${variant}`] : ''}`}
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
		if (props.variant === 'NEGATIVE') return 'rgba(253, 86, 95)';
		if (props.variant === 'POSITIVE') return 'rgb(100, 201, 100)';
		return 'rgb(236, 236, 236)';
	}};
	color: ${(props) => (props.variant ? '#fff' : '#111')};
	font-size: 18px;
	font-weight: 500;
`;