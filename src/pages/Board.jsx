import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';
import { Container, Header, Nav, Footer } from '../styles/styledComponent/Board.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faSearch, faPencil } from '@fortawesome/free-solid-svg-icons';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';

function Board() {
  const [state, setState] = useState('');
  const [value, setValue] = useState('');

  const stateValueHandle = (props) => {
    let v = props;
    if (state === props) v = '';
    setState(v);
  };
  return (
    <Container className='container'>
      <Header>
        <p>Board</p>
        <div className='iconBox'>
          <FontAwesomeIcon className='icon' icon={faSearch} onClick={() => stateValueHandle('search')} />
          <FontAwesomeIcon className='icon' icon={faBell} />
          <FontAwesomeIcon className='icon' icon={faBars} onClick={() => stateValueHandle('menu')} />
        </div>
      </Header>
      <div>{state === 'search' && <TextField value={value} onChange={(e) => setValue(e.target.value)} />}</div>
      <Nav></Nav>
      <TodoList searchValue={value} />
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
          }}>
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
