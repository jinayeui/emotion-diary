import styled from 'styled-components';
import { getColor, getImage } from '../util/getEmotion';

export default function Viewer({ id, createdDate, emotionId, content }) {
	return (
		<>
			<Section>
				<Title>Today's emotion</Title>
				<EmotionWrap $emotionId={emotionId}>
					<Img src={getImage(emotionId)} alt="" />
				</EmotionWrap>
			</Section>
			<Section>
				<Title>Today's diary</Title>
				<ContentWrap>
					<Text>{content}</Text>
				</ContentWrap>
			</Section>
		</>
	);
}

const Section = styled.section`
	&:first-child {
		margin-bottom: 50px;
	}
`;

const Title = styled.h3`
	text-align: center;
	font-size: 20px;
	font-family: 'Nanum Pen Script';
	letter-spacing: 0.02em !important;
`;

const EmotionWrap = styled.div`
	width: 250px;
	height: 250px;
	border-radius: 10px;
	margin: 20px auto 0;
	background-color: ${(props) => getColor(props.$emotionId)}
`;

const Img = styled.img`
	height: 100%;
	object-fit: cover;
`;

const ContentWrap = styled.div`
	width: 100%;
	min-height: 170px;
	box-sizing: border-box;
	padding: 20px;
	background-color: #eee;
	margin-top: 20px;
	border-radius: 8px;
`;

const Text = styled.p`
	font-size: 16px;
	line-height: 20px;
`;