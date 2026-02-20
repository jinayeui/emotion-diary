import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';

const getMonthlyData = (pivotDate, data) => {
	const beginTime = new Date(
		pivotDate.getFullYear(),
		pivotDate.getMonth(),
		1,
		0,
		0,
		0,
	).getTime();
	const endTime = new Date(
		pivotDate.getFullYear(),
		pivotDate.getMonth() + 1,
		0, // 일자를 0으로 설정하면 전달 마지막 날을 가리킴
		23,
		59,
		59,
	).getTime();

	return data.filter(
		(item) => beginTime <= item.createdDate && item.createdDate <= endTime,
	);
};

// 일기 리스트
export default function Home() {
	const data = useContext(DiaryStateContext);
	const [pivotDate, setPivotDate] = useState(new Date());

	const diaryData = getMonthlyData(pivotDate, data);

	// 한달 증가
	const increaseMonth = () => {
		setPivotDate(
			new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1),
		);
	};

	// 한달 감소
	const decreaseMonth = () => {
		setPivotDate(
			new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1),
		);
	};

	return (
		<>
			<Header
				title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
				leftEl={
					<Button
						text={'<'}
						ariaLabel={'지난달 보기'}
						onClick={decreaseMonth}
					/>
				}
				rightEl={
					<Button
						text={'>'}
						ariaLabel={'다음달 보기'}
						onClick={increaseMonth}
					/>
				}
			/>
			<main id="container">
				<DiaryList data={diaryData} />
			</main>
		</>
	);
}