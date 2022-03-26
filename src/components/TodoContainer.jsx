import { useState, useEffect } from 'react';
import TodoList from './TodoList';

function TodoContainer() {
  const [state, setState] = useState([]);

  useEffect(() => {
    // componentDidMount에다가 로직을 직접적으로 쓰면 안된다.
    // 기존 라이프사이클 사용을 못함 => hook
    const localListData = JSON.parse(localStorage.getItem('userTodo'));
    setState(localListData);
  }, []);

  function sendInputValue() {
    const list = [...state]; // => depth가 없기 때문에 얕은 복사만 해도 참조가 안된다.
    const inputValue = document.querySelector('input').value;
    console.log(inputValue);
    list.push(inputValue);

    setState(list);
    // localStorage는 String Type만 저장된다.
    localStorage.setItem('userTodo', JSON.stringify(list));
  }

  return (
    <>
      <div className='inputBox'>
        <input type='text' />
        <button onClick={sendInputValue}>ADD TO DO</button>
      </div>
      <TodoList data={state} />
    </>
  );
}

export default TodoContainer;
