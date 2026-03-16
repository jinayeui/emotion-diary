import styled from 'styled-components';

export default function Loading({ text }) {
	return (
		<LoadingScreen>{text}</LoadingScreen>
	)
}

const LoadingScreen = styled.p`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 20px;
	font-weight: 500;
	color: #ddd;
`;