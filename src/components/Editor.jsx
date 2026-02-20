import styled from 'styled-components';
import { css } from 'styled-components';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmotionListContext } from '../App';
import Button from './Button';
import EmotionItem from './EmotionItem';

// timestamp를 YYYY-MM-DD 형식 문자열로 변환
const getStringedDate = (targetDate) => {
	const year = targetDate.getFullYear();
	const month = String(targetDate.getMonth() + 1).padStart(2, '0');
	const date = String(targetDate.getDate()).padStart(2, '0');
	return `${year}-${month}-${date}`;
};

export default function Editor({ onSubmit, initData }) {
	const emotionList = useContext(EmotionListContext);
	const navi = useNavigate();
	const [input, setInput] = useState(
		initData ?? {
			createdDate: new Date().getTime(),
			emotionId: '',
			content: '',
		},
	);

	// 작성완료 버튼 클릭 시 호출
	const submitDiary = () => {
		if (!input.emotionId || !input.content) {
			alert('모든 항목을 입력해주세요.');
			return;
		}
		onSubmit(input);
	};

	const changeInput = (e) => {
		const { name, value } = e.target;

		let nextInput;
		if (name === 'date') {
			// date input: 문자열 → timestamp 변환
			const timestamp = new Date(value).getTime();
			nextInput = { ...input, createdDate: timestamp };
		} else if (name === 'emotion') {
			// emotion radio: emotionId 저장
			nextInput = { ...input, emotionId: value };
		} else if (name === 'content') {
			// textarea: 그대로 저장
			nextInput = { ...input, content: value };
		}

		setInput(nextInput);
	};

	return (
		<>
			<Section>
				<SectionTitle>오늘의 날짜</SectionTitle>
				<DateInput
					required
					type="date"
					name="date"
					value={getStringedDate(new Date(input.createdDate))}
					onChange={changeInput}
				/>
			</Section>
			<Section>
				<SectionTitle>오늘의 기분</SectionTitle>
				<EmotionWrap>
					{emotionList.map((item) => {
						return (
							<EmotionItem
								key={item.emotionId}
								{...item}
								isChecked={input.emotionId === item.emotionId}
								onChange={changeInput}
							/>
						);
					})}
				</EmotionWrap>
			</Section>
			<Section>
				<SectionTitle>오늘의 일기</SectionTitle>
				<Textarea
					placeholder="오늘 하루는 어땠나요?"
					name="content"
					value={input.content}
					onChange={changeInput}
				/>
			</Section>
			<Section>
				<ButtonWrap>
					<Button text={'취소하기'} onClick={() => navi('/', { replace: true })} />
					<Button
						text={'작성완료'}
						variant={'POSITIVE'}
						onClick={submitDiary}
					/>
				</ButtonWrap>
			</Section>
		</>
	);
}

const inputStyle = css`
	background-color: rgba(236, 236, 236);
	border-radius: 5px;
	font-size: 18px;
	padding: 10px 20px;
`;

const Section = styled.section`
	margin-bottom: 40px;

	&:last-child {
		margin-bottom: 0;
	}
`;

const SectionTitle = styled.h2`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 12px;
`;

const DateInput = styled.input`
	${inputStyle}
`;

const EmotionWrap = styled.ul`
	display: flex;
	gap: 10px;
`;

const Textarea = styled.textarea`
	${inputStyle}
	padding: 20px;
	width: 100%;
	min-height: 200px;
	line-height: 24px;
`;

const ButtonWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;