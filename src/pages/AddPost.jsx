import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Nav,
  Main,
  Footer,
} from '../styles/styledComponent/AddPost.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';

function AddPost() {
  return (
    <Container className='container'>
      <Header>
        <Link
          to='/'
          style={{
            color: 'royalblue',
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
            defaultValue='제목을 입력하세요.'
            inputProps={{
              placeholder: 'Placeholder',
              style: {
                marginLeft: 10,
                fontSize: 15,
              },
            }}
            className='textField'
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
            defaultValue='내용을 입력하세요.'
            inputProps={{
              placeholder: 'Placeholder',
              style: {
                marginLeft: 10,
                fontSize: 15,
              },
            }}
            className='textField'
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
          <Button variant='contained' disableElevation>
            CREATE A TASK
            <FontAwesomeIcon className='icon' icon={faCirclePlus} />
          </Button>
        </Link>
      </Footer>
    </Container>
  );
}

export default AddPost;
