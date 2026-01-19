import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useReducer, useRef, useContext, createContext } from 'react';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
// import { getImage } from './util/getImage';
import Header from './components/Header';

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

// 초기 일기 데이터 (앱이 처음 실행될 때 보여줄 샘플 데이터)
const mockData = [
	{
		id: 1,
		createdDate: new Date().getTime(),
		emotionId: 1,
		content: '1번 일기 내용',
	},
];

// 상태 변경을 처리하는 함수 (state: 현재 상태, action: 어떤 동작을 할지)
const reducer = (state, action) => {
	switch (action.type) {
		// 새 일기 추가: 기존 배열 앞에 새 일기 추가
		case 'CREATE':
			return [action.data, ...state];
		// 일기 수정: 배열을 순회하며 id가 같은 항목만 새 데이터로 교체
		case 'UPDATE':
			return state.map((s) =>
				// s.id와 action.data.id가 같으면 새 데이터(action.data)로 교체, 다르면 기존 데이터(s) 유지
				String(s.id) === String(action.data.id) ? action.data : s
			);
		// 일기 삭제: 배열에서 해당 id를 가진 항목만 제거
		case 'DELETE':
			// s.id가 삭제할 id(action.id)와 다른 것만 남김
			return state.filter((s) => String(s.id) !== String(action.id));
		default:
			return state;
	}
};

function App() {
	// useReducer로 상태 관리 시작 (data: 현재 일기 목록 배열, dispatch: 상태 변경을 요청하는 함수)
	const [data, dispatch] = useReducer(reducer, mockData);
	const idRef = useRef(2);

	// 일기 생성 함수
	const onCreate = (createdDate, emotionId, content) => {
		dispatch({
			type: 'CREATE', // reducer에게 "CREATE" 작업임을 알림
			data: {
				id: idRef.current++,
				createdDate,
				emotionId,
				content,
			},
		});
	};

	// 일기 수정 함수
	const onUpdate = (id, createdDate, emotionId, content) => {
		dispatch({
			type: 'UPDATE', // reducer에게 "UPDATE" 작업임을 알림
			data: {
				id: id,
				createdDate,
				emotionId,
				content,
			},
		});
	};

	// 일기 삭제 함수
	const onDelete = (id) => {
		dispatch({
			type: 'DELETE', // reducer에게 "DELETE" 작업임을 알림
			id,
		});
	};

	return (
		<div id="wrap">
			<DiaryStateContext.Provider value={data}>
				<DiaryDispatchContext.Provider
					value={{ onCreate, onUpdate, onDelete }}
				>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/diary/:id" element={<Diary />}></Route>
						<Route path="/new" element={<New />}></Route>
						<Route path="/edit/:id" element={<Edit />}></Route>
						<Route path="/*" element={<NotFound />}></Route>
					</Routes>
				</DiaryDispatchContext.Provider>
			</DiaryStateContext.Provider>

			<nav>
				<Link to={'/'}>Home</Link>
				<Link to={'/diary'}>Diary</Link>
			</nav>
		</div>
	);
}

export default App;