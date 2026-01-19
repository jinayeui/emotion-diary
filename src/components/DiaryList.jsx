import styled from 'styled-components';
import Button from './Button';
import DiaryItem from './DiaryItem';

export default function DiaryList() {
	return (
		<>
			<ListHeader>
				<Select>
					<Option value={'latest'}>최신순</Option>
					<Option value={'oldest'}>오래된 순</Option>
				</Select>
				<Button text={'새 일기 쓰기'} type={'positive'} />
			</ListHeader>
			<DiaryItem />
		</>
	);
}

const ListHeader = styled.div`
	width: 100%;
	display: flex;
	justity-content: space-between;
	align-items: center;
`;

const Select = styled.select``;

const Option = styled.option``;