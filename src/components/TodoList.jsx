import { Container } from '../styles/styledComponent/TodoList.styed';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faFolderOpen, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TodoList() {
  const [state, setState] = useState([]);
  // const [modifiedState, setModifiedState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // componentDidMount
    const savedLocalData = JSON.parse(localStorage.getItem('userTodo'));
    if (savedLocalData) setState(savedLocalData);
  }, []);

  const removeHandle = (id) => {
    // 전달받은 id와 비교하려는 id가 일치하지 않는 것만 state에 재할당
    setState(state.filter((item) => item.id !== id));
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
                <div>
                  <FontAwesomeIcon className='todoIcon' icon={faFileLines} />
                  {item.title}
                </div>
                <Button
                  sx={{
                    fontSize: '20px',
                    minWidth: 45,
                    ml: 2,
                  }}
                  onClick={() => navigate(`/addpost?id=${item.id}`)}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
                <Button
                  sx={{
                    color: '#DA2600',
                    fontSize: '20px',
                    minWidth: 45,
                    mr: 1,
                  }}
                  onClick={() => removeHandle(item.id)}>
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
