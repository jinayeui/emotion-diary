import styled from 'styled-components';
import { getImage, getColor } from '../util/getEmotion';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function DiaryItem({ id, emotionId, createdDate, content }) {
	const navi = useNavigate();

	return (
		<Item onClick={() => navi(`/diary/${id}`)}>
			{/*
			💡 왜 $ 접두사?
			styled-components v5.1+에서는:
			$로 시작하는 prop = 스타일링 전용, DOM에 전달 안 됨
			$ 없는 prop = DOM에 전달됨 (React 경고 발생)
			*/}
			<ImageWrap $emotionId={emotionId}>
				<Img src={getImage(emotionId)} alt="감정이미지" />
			</ImageWrap>
			<InfoWrap>
				<CreatedDate>
					{new Date(createdDate).toLocaleDateString()}
				</CreatedDate>
				<Content>{content}</Content>
				<StyledButton
					text={'수정하기'}
					onClick={(e) => {
						e.stopPropagation(); // 이벤트 버블링 방지
						navi(`/edit/${id}`);
					}}
				/>
			</InfoWrap>
		</Item>
	);
}

const Item = styled.li`
	width: 100%;
	display: flex;
	gap: 15px;
	box-sizing: border-box;
	padding: 20px 0;
	border-bottom: 1px solid rgb(236, 236, 236);
	cursor: pointer;
`;

const ImageWrap = styled.div`
	width: 30%;
	height: 100px;
	border-radius: 6px;
	overflow: hidden;
	background-color: ${(props) => getColor(props.$emotionId)};
`;

const Img = styled.img`
	height: 100%;
	object-fit: contain;
`;

const InfoWrap = styled.div`
	width: 70%;
`;

const CreatedDate = styled.span`
	font-size: 15px;
	font-weight: bold;
	margin: 5px 0;
	display: inline-block;
`;

const Content = styled.p`
	font-size: 18px;
	max-width: 50%;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	line-height: 22px;
`;

const StyledButton = styled(Button)`
	min-width: 70px;
	position: absolute;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
	font-size: 16px;
`;