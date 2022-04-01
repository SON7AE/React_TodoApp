import TodoList from './TodoList';
import {
  Container,
  Header,
  Nav,
  Footer,
} from '../styles/styledComponent/TodoContainer.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faSearch,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';

function TodoContainer() {
  return (
    <Container className='container'>
      <Header>
        <p>Board</p>
        <div className='iconBox'>
          <FontAwesomeIcon className='icon' icon={faSearch} />
          <FontAwesomeIcon className='icon' icon={faBell} />
          <FontAwesomeIcon className='icon' icon={faBars} />
        </div>
      </Header>
      <Nav></Nav>
      <TodoList></TodoList>
      <Footer>
        <Button variant='contained' disableElevation>
          ADD A TASK
          <FontAwesomeIcon className='icon' icon={faPencil} />
        </Button>
      </Footer>
    </Container>
  );
}

export default TodoContainer;
