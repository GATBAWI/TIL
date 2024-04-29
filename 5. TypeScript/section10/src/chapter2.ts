/**
 * Pick<T, K>
 * -> 뽑다, 고르다.
 * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
 */

interface Post {
	title: string;
	tags: string[];
	content: string;
	thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
	[key in K]: T[key];
};

const legacyPost: Pick<Post, 'title' | 'content'> = {
	title: '옛날 글',
	content: '옛날 컨텐츠',
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티만 제거하는 그런 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbnailURL', 'title'>>
// Pick<Post, 'tags' | 'content' | 'thumbnailURL'>

// const noTitlePost: Pick<Post, 'content' | 'tags' | 'thumbnailURL'> = {
const noTitlePost: Omit<Post, 'title'> = {
	// 만약, 골라내야하는 프로퍼티가 많다면 Pick 대신 Omit을 사용하는 것이 편리하다.
	content: '',
	tags: [],
	thumbnailURL: '',
};

/**
 * RECORD<K, V>
 */

// type Thumbnail = {
// type ThumbnailLegacy = {
// 	// 중복코드 문제가 심하다!
// 	large: {
// 		url: string;
// 	};
// 	medium: {
// 		url: string;
// 	};
// 	small: {
// 		url: string;
// 	};
// 	watch: {
// 		url: string;
// 	};
// };

type Record<K extends keyof any, V> = {
	[key in K]: V;
};

type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', { url: string; size: number }>;
// 한 줄만 썼지만, 위의 type과 동일하다!
