import React from 'react';
import TodoPage from '../pages/todo';

class Todo extends React.Component {
  render() {
    return (
      <TodoPage
        items={[
          {
            text: 'hola',
            id: 123,
            isChecked: false
          },
          {
            text: 'chau',
            id: 124,
            isChecked: true
          }
        ]}
      />
    );
  }
}

export default Todo;
