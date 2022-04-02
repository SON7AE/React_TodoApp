import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';
import { Container, Header, Nav, Footer } from '../styles/styledComponent/Board.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faSearch, faPencil } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';

function Board() {
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
        <Link
          to='/addpost'
          style={{
            width: '100%',
            height: '100%',
            textDecoration: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button variant='contained' disableElevation>
            ADD A TASK
            <FontAwesomeIcon className='icon' icon={faPencil} />
          </Button>
        </Link>
      </Footer>
    </Container>
  );
}

export default Board;
