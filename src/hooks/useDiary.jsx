import { useContext, useState, useEffect } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

export const useDiary = (id) => {
	const navi = useNavigate();
	const data = useContext(DiaryStateContext);
	const [currentData, setCurrentData] = useState(); // 현재 다이어리의 데이터를 저장할 state

	useEffect(() => {
		const currentDiary = data.find(
			(item) => String(item.id) === String(id),
		);

		if (!currentDiary) {
			alert('존재하지 않는 일기입니다.');
			navi('/', { replace: true });
		} else {
			setCurrentData(currentDiary); // 현재 다이어리 데이터 전달
		}
	}, [id]);

	return currentData;
};