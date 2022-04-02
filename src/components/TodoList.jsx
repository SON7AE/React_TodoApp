import { Container } from '../styles/styledComponent/TodoList.styed';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TodoList() {
  const [state, setState] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('userTodo'));
    if (local) setState(local);
  }, []);

  const removeHandle = () => {
    // remove handle
  };

  return (
    <Container>
      {state.length === 0 ? (
        <p>목록이 비어있어요. &nbsp;</p>
      ) : (
        <ul>
          {state.map((item, index) => {
            return (
              <li key={index}>
                {item.title}
                <Button onClick={() => navigate(`/addpost?id=${item.id}`)}>edit</Button>
                <Button
                  sx={{
                    color: 'red',
                  }}
                  onClick={() => removeHandle()}
                >
                  remove
                </Button>
              </li>
            );
          })}
        </ul>
      )}
      <FontAwesomeIcon className='icon' icon={faFolderOpen} />
    </Container>
  );
}

export default TodoList;
