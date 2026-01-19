import styled from 'styled-components';
import Button from './Button';

export default function Header({ title, leftChild, rightChild }) {
	return (
		<>
			<HeaderTag>
				<Inner>
					{leftChild}
					<Title>{title}</Title>
					{rightChild}
				</Inner>
			</HeaderTag>
		</>
	);
}

const HeaderTag = styled.header`
	height: 65px;
	border-bottom: 1px solid rgb(226, 226, 226);
	padding: 0 20px;
	box-sizing: border-box;
`;

const Inner = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 22px;
	font-weight: 600;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;