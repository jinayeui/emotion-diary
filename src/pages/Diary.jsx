import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryStateContext } from '../App';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';

// timestamp를 YYYY-MM-DD 형식 문자열로 변환
const getStringedDate = (targetDate) => {
	const year = targetDate.getFullYear();
	const month = String(targetDate.getMonth() + 1).padStart(2, '0');
	const date = String(targetDate.getDate()).padStart(2, '0');
	return `${year}-${month}-${date}`;
};

// 일기 상세 조회
export default function Diary() {
	const navi = useNavigate();
	const params = useParams();
	const data = useContext(DiaryStateContext);

	//console.log(data[params.id - 1].id);
	const selectedDiary = data.find(
		(item) => String(item.id) === String(params.id),
	);
	const timeStamp = new Date(Number(selectedDiary?.createdDate));

	return (
		<>
			<Header
				title={`${getStringedDate(timeStamp)} 일기`}
				leftEl={
					<Button
						text={'<'}
						ariaLabel={'뒤로 가기'}
						onClick={() => navi(-1)}
					/>
				}
				rightEl={
					<Button
						text={'수정하기'}
						onClick={() => navi(`/edit/${params.id}`)}
					/>
				}
			/>
			<main id="container">
				<Viewer {...selectedDiary} />
			</main>
		</>
	);
}