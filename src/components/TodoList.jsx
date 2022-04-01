import { Container } from '../styles/styledComponent/TodoList.styed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
function TodoList() {
  return (
    <Container>
      <p>목록이 비어있어요.</p>
      <FontAwesomeIcon className='icon' icon={faFolderOpen} />
    </Container>
  );
}

export default TodoList;
