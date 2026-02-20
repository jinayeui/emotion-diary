import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

// 새로운 일기 작성
export default function New() {
	const navi = useNavigate();
	const { onCreate } = useContext(DiaryDispatchContext);

	// 일기 저장 후 홈으로 이동
	const onSubmit = (input) => {
		onCreate(input.createdDate, input.emotionId, input.content);
		navi('/', { replace: true });
	};

	return (
		<>
			<Header
				title={'새 일기 쓰기'}
				leftEl={
					<Button
						text={'<'}
						ariaLabel={'뒤로가기'}
						onClick={() => navi(-1)}
					/>
				}
			/>
			<main id="container">
				<Editor onSubmit={onSubmit} />
			</main>
		</>
	);
}