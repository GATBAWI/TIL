/**
 * 프로미스
 */

// promise는 클래스를 기반으로 타입이 선언되어 있다!
// 타입변수를 통해 비동기 처리의 결과값을 정해줄 수 있지만 (resolve),
// 실패했을 경우 결과값의 타입은 정해줄 수 없다! -> any 타입이기 때문에 타입 줄이기를 통해 처리 가능!
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("...Error!");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    // return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 전체 1",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
