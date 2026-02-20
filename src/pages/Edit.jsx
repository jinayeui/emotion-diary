import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext, DiaryDispatchContext } from '../App';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

// 기존 일기 수정
export default function Edit() {
	const params = useParams();
	const navi = useNavigate();
	const data = useContext(DiaryStateContext);
	const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
	const [currentData, setCurrentData] = useState(); // 현재 다이어리의 데이터를 저장할 state

	useEffect(() => {
		const currentDiary = data.find(
			(item) => String(item.id) === String(params.id),
		);

		if (!currentDiary) {
			alert('존재하지 않는 일기입니다.');
			navi('/', { replace: true });
		} else {
			setCurrentData(currentDiary); // 현재 다이어리 데이터 전달
		}
	}, [params.id]);

	const deleteDiary = () => {
		if (window.confirm('삭제하겠습니까?')) {
			onDelete(params.id);
			navi('/', { replace: true });
		}
	};

	const onSubmit = (input) => {
		if (window.confirm('일기를 정말 수정할까요?')) {
			onUpdate(params.id, input.createdDate, input.emotionId, input.content);
			navi('/', { replace: true });
		}
	};

	return (
		<>
			<Header
				title={'일기 수정하기'}
				leftEl={
					<Button
						text={'<'}
						ariaLabel={'뒤로가기'}
						onClick={() => navi('/', { replace: true })}
					/>
				}
				rightEl={
					<Button
						text={'삭제하기'}
						variant={'NEGATIVE'}
						onClick={deleteDiary}
					/>
				}
			/>
			<main id="container">
				{currentData && <Editor initData={currentData} onSubmit={onSubmit} />}
			</main>
		</>
	);
}