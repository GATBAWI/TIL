// import { useState } from 'react'
import './App.css';
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from './components/Footer.jsx';
// function Header() {
//   return (
//     <header>
//       <h1>HEADER</h1>
//     </header>
//   );
// }

// 컴포넌트는 대문자로 시작한다. 소문자라면 html 태그인지 아닌지 알기 어렵다!
// const Header = () => {
//   return (
//     <header>
//       <h1>HEADER</h1>
//     </header>
//   );
// }

// 컴포넌트
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Body />
    <Footer />
    </>
  )
}

export default App
