import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Container, Header, Nav, Main, Footer } from '../styles/styledComponent/AddPost.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';

function AddPost() {
  // 새로운 state 변수를 선언하고, state라고 부른다.
  const [state, setState] = useState({
    id: 0,
    title: '',
    content: '',
  });

  const handleTitle = (event) => {
    setState({ id: 0, title: event.target.value, content: state.content });
    console.log(event.target.value); // => 현재의 값
    console.log(state); // => state는 현재의 값을 받아서 업데이트 해주는 것
  };
  const handleContent = (event) => {
    setState({ id: 0, title: state.title, content: event.target.value });
  };
  // Create a task 버튼을 누르면 input 값 저장되는 함수
  const createPost = () => {
    console.log('클릭 되었습니다.');
    const prevString = localStorage.getItem('userTodo');

    let list = [state];
    if (prevString) {
      list = JSON.parse(prevString);
      state.id = list[list.length - 1].id + 1;
      list.push(state);
    }
    // localStorage는 String Type만 저장된다.
    localStorage.setItem('userTodo', JSON.stringify(list));
  };

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
          }}
        >
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
            rows={10}
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
        <Link
          to='/'
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
          <Button variant='contained' disableElevation onClick={createPost}>
            CREATE A TASK
            <FontAwesomeIcon className='icon' icon={faCirclePlus} />
          </Button>
        </Link>
      </Footer>
    </Container>
  );
}

export default AddPost;
