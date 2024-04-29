/**
 * 인덱스드 엑세스 타입
 */

type Post = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
};
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

// author의 타입이 변하게 되면 일일이 찾아서 바꿔야한다. -> 인덱스드 엑세스 타입 : 객체 티입의 특정 프로퍼트를 뽑아서 사용하는 방법
// 프로퍼트의 타입이 수정되거나 변경되어도 일일이 바꿀 필요가 없다.
// function printAuthorInfo(author: { id: number; name: string }) {
// 인덱스로 들어가는 값은 문자열이 아니라, 타입으로 들어간다. -> author
// function printAuthorInfo(author: Post["author"]) {
// function printAuthorInfo(author: Post["author"]) {
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 베열타입이라면 배열의 요소의 타입을 추출해온다!
const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "김태용",
  },
};

printAuthorInfo(post.author);

// - - - - -

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number

type Tup1 = Tup[1]; // string

type Tup2 = Tup[2]; // boolean

// type Tup3 = Tup[3]; // 존재하지 않기 때문에 에러 발생!

type TupNum = Tup[number]; // 튜플타입 안에 있는 최적의 공통 터입을 추출해온다. -> number | string | boolean
