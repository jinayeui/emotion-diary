// timestamp를 YYYY-MM-DD 형식 문자열로 변환
export const getStringedDate = (targetDate) => {
	const year = targetDate.getFullYear();
	const month = String(targetDate.getMonth() + 1).padStart(2, '0');
	const date = String(targetDate.getDate()).padStart(2, '0');
	return `${year}-${month}-${date}`;
};