import React from 'react';
import TodoTextInput from '../TodoTextInput';

const Header = (props) => (
  <header className="todo-app-header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) 
          props.onSave(text);
      }}
      placeholder="What needs to be done?"
    />
  </header>
)
export default Header;