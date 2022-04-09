import { Container } from '../styles/styledComponent/TodoList.styed';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faFolderOpen, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TodoList({ searchValue }) {
  const [state, setState] = useState([]);
  // const [modifiedState, setModifiedState] = useState(false);
  const navigate = useNavigate();

  const filterHandle = () => {
    const list = state.filter((item) => item.title.includes(searchValue));
    // filter => 만족하는 조건의 요소만 새로운 배열로 리턴하는 메소드임
    setState(list);
  };

  const getLocalData = () => {
    const data = JSON.parse(localStorage.getItem('userTodo'));

    return data;
  };

  useEffect(() => {
    // componentDidMount
    const savedLocalData = getLocalData();
    if (savedLocalData) setState(savedLocalData);
  }, []);

  useEffect(() => {
    if (searchValue) filterHandle();
    else {
      const data = getLocalData();
      setState(data);
    }
  }, [searchValue]);

  const removeHandle = (id) => {
    const filterData = state.filter((item) => item.id !== id); // 새로운 배열을 리턴해서 괜찮긴 함
    // state를 직접 컨트롤 하면 좋지 않은 참조 개새끼
    // 전달받은 id와 비교하려는 id가 일치하지 않는 것만 state에 재할당
    setState(filterData);
    localStorage.setItem('userTodo', JSON.stringify(filterData));
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
