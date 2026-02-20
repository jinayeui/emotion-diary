import styled from 'styled-components';

export default function Header({ title, leftEl, rightEl }) {
	return (
		<>
			<HeaderTag>
				<Inner>
					{leftEl}
					<Title>{title}</Title>
					{rightEl}
				</Inner>
			</HeaderTag>
		</>
	);
}

const HeaderTag = styled.header`
	height: 70px;
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
	font-weight: bold;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;