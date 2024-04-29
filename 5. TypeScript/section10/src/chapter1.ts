/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
	title: string;
	tags: string[];
	content: string;
	thumbnailURL?: string;
}

type Partial<T> = {
	[key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
	title: '제목 나중에 짓자!',
	content: '초안...',
};

/**
 * Required<T>
 * -> 필수적인, 필수의
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
	// required 타입 표시 : -?
	[key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
	title: '김태용의 타입스크립트',
	tags: ['ts'],
	content: '',
	thumbnailURL: 'https://...',
};

/**
 * Readonly<T>
 * -> 읽기 전용의, 수정 불가
 * -> 특정 객체 타입의 모든 프로퍼티를 읽기 전용으로 바꿔주는 타입
 */

type Readonly<T> = {
	readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
	title: '보호된 게시글 입니다.',
	tags: [],
	content: '',
};
