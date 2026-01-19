import styled from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

// 일기 리스트
export default function Home() {
	return (
		<>
			<Header
				title={'감정일기장'}
				leftChild={<Button text={'<'} ariaLabel={'뒤로 가기'} />}
				rightChild={<Button text={'>'} ariaLabel={'다음으로 가기'} />}
			></Header>
			<main id="contents">
				<DiaryList />
			</main>
		</>
	);
}