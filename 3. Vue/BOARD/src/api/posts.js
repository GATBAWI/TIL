// axios
// import axios from 'axios';

// . 붙이면 해당 디렉토리의 index.js 파일을 가지고 온다.
import { posts } from '.';

// const posts = [
// 	{ id: 1, title: '제목1', content: '내용1', createdAt: '2024-01-01' },
// 	{ id: 2, title: '제목2', content: '내용2', createdAt: '2024-01-02' },
// 	{ id: 3, title: '제목3', content: '내용3', createdAt: '2024-01-03' },
// 	{ id: 4, title: '제목4', content: '내용4', createdAt: '2024-01-04' },
// 	{ id: 5, title: '제목5', content: '내용5', createdAt: '2024-01-05' },
// ];

export function getPosts(params) {
	return posts.get('/', { params });
}

export function getPostById(id) {
	// const numberId = parseInt(id);
	// return posts.find(item => item.id === numberId);
	return posts.get(`/${id}`);
}

export function createPost(data) {
	return posts.post('/', data);
}

// export function updatePost(id, data) {
// 	return posts.put(`/${id}`, data);
// }

export function updatePost(id, data) {
	return posts.patch(`/${id}`, data);
}

export function deletePost(id) {
	return posts.delete(`/${id}`);
}
