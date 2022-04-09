import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Header, Nav, Main, Footer } from '../styles/styledComponent/AddPost.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { TextField } from '@material-ui/core';
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';

function AddPost() {
  const { search } = useLocation();
  const getId = search?.split('=')[1];

  // 새로운 state 변수를 선언하고, state라고 부른다.
  const [state, setState] = useState({
    id: 0,
    title: '',
    content: '',
  });

  const handleTitle = (event) => {
    setState({ id: 0, title: event.target.value, content: state.content });
    // console.log(event.target.value); // => 현재의 값
    // console.log(state); // => state는 현재의 값을 받아서 업데이트 해주는 후, state 값 조회
  };
  const handleContent = (event) => {
    setState({ id: 0, title: state.title, content: event.target.value });
  };

  const editPost = () => {
    const data = getLocalData();

    if (data) {
      const index = data.findIndex((item) => item.id == getId);
      data[index].title = state.title;
      data[index].content = state.content;
    }

    localStorage.setItem('userTodo', JSON.stringify(data));
  };

  const createPost = () => {
    const prevState = localStorage.getItem('userTodo');
    let list = [state];

    if (prevState && prevState.length > 2) {
      list = JSON.parse(prevState);
      state.id = list[list.length - 1].id + 1;
      list.push(state);
    }
    // localStorage는 String Type만 저장된다.
    localStorage.setItem('userTodo', JSON.stringify(list));
  };

  const handlePost = () => {
    if (state.title === '' || state.content === '') {
      Swal.fire({
        title: 'Error',
        text: '제목과 내용을 모두 입력해주세요.',
        icon: 'error',
      });
      return;
    }

    if (getId) editPost();
    else createPost();
  };

  const getLocalData = () => {
    let localData = JSON.parse(localStorage.getItem('userTodo'));
    if (!localData) localData = [];

    return localData;
  };
  // CREATE A TASK 버튼을 누르면 input 값 저장되는 함수

  useEffect(() => {
    // getId 값에 대한 didUpdate
    if (getId) {
      const localData = getLocalData();

      if (localData && localData.length > 0) {
        const findItem = localData.find((item) => item.id == getId);
        setState(findItem);
      }
    }
  }, [getId]);

  return (
    <Container className='container'>
      <Header>
        <Link
          to='/'
          style={{
            color: 'red',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesomeIcon className='icon' icon={faCircleArrowLeft} />
        </Link>
        <p>Add Task</p>
      </Header>
      <Nav></Nav>
      <Main>
        <div>
          <p>Title</p>
          <TextField
            label='제목'
            variant='outlined'
            required
            id='outlined-required'
            inputProps={{
              placeholder: '제목을 입력하세요.',
              style: {
                marginLeft: 10,
                fontSize: 15,
              },
            }}
            value={state.title}
            className='textField'
            // value={state}
            onChange={handleTitle}
          />
        </div>
        <div>
          <p>My Task</p>
          <TextField
            label='내용'
            variant='outlined'
            required
            id='outlined-required'
            multiline
            value={state.content}
            minRows={10}
            inputProps={{
              placeholder: '내용을 입력하세요.',
              style: {
                marginLeft: 10,
                fontSize: 15,
              },
            }}
            className='textField'
            // value={state}
            onChange={handleContent}
          />
        </div>
      </Main>
      <Footer>
        <Button
          variant='contained'
          style={{
            width: '100%',
            height: '100%',
            textDecoration: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          disableElevation
          onClick={handlePost}>
          CREATE A TASK
          <FontAwesomeIcon className='icon' icon={faCirclePlus} />
        </Button>
      </Footer>
    </Container>
  );
}

export default AddPost;
