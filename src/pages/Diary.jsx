import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import { useDiary } from '../hooks/useDiary';
import { getStringedDate } from '../util/getStringedDate';
import Loading from '../components/Loading';

// 일기 상세 조회
export default function Diary() {
	const navi = useNavigate();
	const params = useParams();

	/**
	 * ** 순서 중요
	 * 1. useDiary 커스텀 훅을 사용하여 현재 일기의 데이터를 가져옴
	 * 2. 일기가 존재하지 않을 경우, 로딩 화면을 보여줌
	 * 3. 일기가 존재할 경우, 가져온 데이터에서 날짜 데이터 디스트럭처링(구조분해할당)
	 */
	const selectedDiary = useDiary(params.id);
	if (!selectedDiary) return <Loading text={'일기를 불러오는 중입니다...'} />;
	const { createdDate } = selectedDiary;

	return (
		<>
			<Header
				title={`${getStringedDate(new Date(createdDate))} 일기`}
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