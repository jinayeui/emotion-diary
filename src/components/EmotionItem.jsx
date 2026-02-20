import styled from 'styled-components';
import { getImage, getColor } from '../util/getEmotion';

export default function EmotionItem({
	emotionId,
	emotionName,
	isChecked,
	onChange,
}) {
	return (
		<Item>
			<input
				required
				hidden
				type="radio"
				name="emotion"
				id={emotionId}
				value={emotionId}
				checked={isChecked}
				onChange={onChange}
			/>
			<Label htmlFor={emotionId} $emotionId={emotionId}>
				<ImageWrap>
					<img src={getImage(emotionId)} alt="감정이미지" />
				</ImageWrap>
				{emotionName}
			</Label>
		</Item>
	);
}

const Item = styled.li`
	flex: 1;
	border-radius: 5px;
	overflow: hidden;
`;

const Label = styled.label`
	width: 100%;
	height: 124px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 16px;
	cursor: pointer;
	background-color: rgb(236, 236, 236);

	input:checked + & {
		background-color: ${(props) => getColor(props.$emotionId)};
		color: #fff;
	}
`;

const ImageWrap = styled.div`
	width: 45%;
	margin-bottom: 12px;
`;