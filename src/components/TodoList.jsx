function TodoList(props) {
  return (
    <ul>
      {props.data.map((currentValue) => {
        return <li>{currentValue}</li>;
      })}
    </ul>
  );
}

export default TodoList;
