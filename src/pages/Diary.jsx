import styled from 'styled-components';
import { useParams } from 'react-router-dom';

// 일기 상세 조회
export default function Diary() {
	const params = useParams();
	console.log(params);

	return (
		<>
			<h3>Diary</h3>
			<p>{params.id}번째 일기입니다😊</p>
		</>
	);
}