import styled from 'styled-components';
import { getColor, getImage } from '../util/getEmotion';
import { emotionList } from '../util/constants';

export default function Viewer({ emotionId, content }) {
const emotionName = emotionList.find(
		(item) => item.emotionId === emotionId
	)?.emotionName;

	return (
		<>
			<Section>
				<SectionTitle>Today's emotion</SectionTitle>
				<EmotionWrap $emotionId={emotionId}>
					<Img src={getImage(emotionId)} alt="감정이미지" />
					<Name>{emotionName}</Name>
				</EmotionWrap>
			</Section>
			<Section>
				<SectionTitle>Today's diary</SectionTitle>
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

const SectionTitle = styled.h3`
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
	overflow: hidden;
	background-color: ${(props) => getColor(props.$emotionId)}
`;

const Img = styled.img`
	margin-top: -20px;
`;

const Name = styled.span`
	color: #fff;
	font-size: 15px;
	position: absolute;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
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