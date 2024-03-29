import "./Header.css";
import { memo } from "react";

function Header() {
  return (
    <div className="Header">
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

// // memo => 컴포넌트를 받아서 새로운 컴포넌트로 반환(최적화해서!)
// const OptimizedHeaderComponent = memo(Header);

// // 최적화된 컴포넌트를 반환!
// export default OptimizedHeaderComponent;

export default memo(Header);
