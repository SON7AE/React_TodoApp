import { Container } from './styles/styledComponent/Main.styled';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <Container className='container'>
      <TodoContainer></TodoContainer>
    </Container>
  );
}
export default App;
