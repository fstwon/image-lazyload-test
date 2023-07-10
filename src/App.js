import './App.scss';
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { ScrollEventContainer, IntersectionObserverContainer } from './pages/index';
import { useLayoutEffect, useRef } from 'react';
import { setImageObserver } from './components';


/**
 * @description
 * 
 * 1. Test case
 *  a. entries가 정확히 어떤 값인지 확인
 *  b. callback 함수가 언제 호출되는지
 *  c. Scroll Event vs Intersection Observer API 이미지 로드 성능 비교
 *  d. IO API를 사용했을때 첫 렌더 시 로드가 되는지
 *  e. 가로 스크롤도 동작하는지 
 * 2. imageLoader 컴포넌트 
 * 3. elementPositionManager 컴포넌트
 */

function App() {
  const ref = useRef();

  useLayoutEffect(() => {
    setImageObserver();
  }, []);

  return (
    <div className="app" ref={ref} >
      <header className="app-header co-layout" >
        <h2 className="header-title app" >Lazy load test</h2>
        <nav className="header-nav app" >
          <span className="nav-link-layout main" >
            <Link to="/io" >Intersection Observer</Link>
          </span>
          <span className="nav-link-layout main" >
            <Link to="/se" >Scroll Event</Link>
          </span>
        </nav>
      </header>
      <main className="app-main" >
        <Switch >
          <Route path="/se" render={(props) => <ScrollEventContainer {...props} />} />
          <Route path="/io" render={(props) => <IntersectionObserverContainer {...props} />} />
        </Switch>
      </main>
    </div>
  );
};

export default App;

