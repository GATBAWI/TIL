import axios from 'axios';

// axios 공식문서에서 제공하는 instance create
function create(baseURL, options) {
	// const instance = axios.create({
	// 	baseURL,
	// 	...options,
	// });
	const instance = axios.create(Object.assign({ baseURL }, options));
	return instance;
}

// export const posts = create('http://localhost:5000/posts/');
// Vite 공식문서 env 설명!
export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);
// development : http://localhost:5000/posts/
// production : http://localhost:5001/posts/
