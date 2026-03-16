import styled from 'styled-components';
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DiaryList({ data }) {
	const navi = useNavigate();
	const [sortType, setSortType] = useState('latest'); // 정렬 방식 상태 (기본: 최신순)

	const changeSortType = (e) => {
		setSortType(e.target.value); // 선택된 select의 value를 sortType에 저장
		/**
		 * ** 정렬 방식 변경 원리
		 * 1. select 요소에서 onChange 이벤트가 발생하면 changeSortType 함수가 호출됨
		 * 2. changeSortType 함수는 이벤트 객체(e)를 받아서, e.target.value를 sortType 상태로 업데이트함
		 * 3. sortType이 변경되면 컴포넌트가 다시 렌더링되고, getSortedDate 함수가 새로운 sortType에 따라 데이터를 정렬하여 반환함
		 * 4. 정렬된 데이터(sortedData)가 화면에 표시됨
		 */
	};

	// 정렬된 데이터를 반환하는 함수
	const getSortedDate = () => {
		// toSorted(): 원본 배열을 변경하지 않고 새로운 정렬된 배열을 반환
		return data.toSorted((a, b) => {
			if (sortType === 'oldest') {
				// 오래된 순(오름차순): 작은 숫자(과거)가 앞으로
				return Number(a.createdDate) - Number(b.createdDate);
			} else {
				// 최신순(내림차순): 큰 숫자(최근)가 앞으로
				return Number(b.createdDate) - Number(a.createdDate);
			}
		});
	};

	const sortedData = getSortedDate();
	/* 

	** 정렬 원리:
	- sort 함수는 비교 함수의 반환값으로 순서를 결정
	- 반환값이 음수(-) → a가 b보다 앞에 위치
	- 반환값이 양수(+) → b가 a보다 앞에 위치
	- 반환값이 0 → 순서 변경 없음

	** 예시:
	최신순일 때: a.createdDate(1000) - b.createdDate(2000) = -1000 (음수)
	→ a가 앞으로 → 작은 숫자(오래된 날짜)가 앞에
	→ 결과: 과거 날짜부터 정렬 (오래된 순)

	오래된 순일 때: b.createdDate(2000) - a.createdDate(1000) = 1000 (양수)
	→ b가 앞으로 → 큰 숫자(최근 날짜)가 앞에
	→ 결과: 최근 날짜부터 정렬 (최신순)
	
	*/

	return (
		<>
			<ListHeader>
				<Select id="select" value={sortType} onChange={changeSortType}>
					<option value={'latest'}>최신순</option>
					<option value={'oldest'}>오래된 순</option>
				</Select>
				<StyledButton
					text={'새 일기 쓰기'}
					variant={'POSITIVE'}
					onClick={() => navi('/new')}
				/>
			</ListHeader>
			<ListContents>
				{data.length === 0 ? (
					<EmptyText>텅..~</EmptyText>
				) : (
					sortedData.map((item) => {
						return <DiaryItem key={item.id} {...item} />; // 모든 속성을 개별 props로 펼쳐서 전달
					})
				)}
			</ListContents>
		</>
	);
}

const ListHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 15px;
`;

const Select = styled.select`
	width: 20%;
	min-width: 100px;
	height: 50px;
	text-align: center;
	background-color: rgb(236, 236, 236);
	border: none;
	border-radius: 5px;
	font-size: 18px;
	cursor: pointer;
`;

const StyledButton = styled(Button)`
	width: 80%;
	height: 50px;
`;

const ListContents = styled.ul`
	margin-top: 10px;
`;

const EmptyText = styled.p`
	font-size: 25px;
	font-weight: bold;
	color: #ddd;
	text-align: center;
	margin-top: 35vh;
`;