import { Container } from './styles/styledComponent/Main.styled';
import { Route, Routes } from 'react-router-dom';
import Board from './pages/Board';
import AddPost from './pages/AddPost';

function App() {
  return (
    // Route 컴포넌트에 경로(path)와 컴포넌트(component)를 설정하여 나열해준다.
    // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 를 선언하고
    // Router로 Routes를 감싸고, Routes로 Route들을 감싸준다.
    // 브라우저에서 요청한 경로 Route의 path가 들어있으면 해당 component를 보여준다.
    <Container className='container'>
      <Routes>
        <Route path='/' exact element={<Board />} />
        <Route path='/addpost' element={<AddPost />} />
      </Routes>
    </Container>
  );
}
export default App;
