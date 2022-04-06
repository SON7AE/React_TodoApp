import { Container } from '../styles/styledComponent/TodoList.styed';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
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
        <>
          <p>목록이 비어있어요. &nbsp;</p>
          <FontAwesomeIcon className='icon' icon={faFolderOpen} />
        </>
      ) : (
        <ul>
          {state.map((item, index) => {
            return (
              <li key={index}>
                <div> {item.title}</div>
                <Button
                  sx={{
                    fontSize: '20px',
                    minWidth: 45,
                    ml: 2,
                  }}
                  onClick={() => navigate(`/addpost?id=${item.id}`)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
                <Button
                  sx={{
                    color: '#DA2600',
                    fontSize: '20px',
                    minWidth: 45,
                    mr: 1,
                  }}
                  onClick={() => removeHandle()}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
}

export default TodoList;
