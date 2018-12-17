import React from 'react';
import TodoItem from './components/todoItem.jsx';
import './style.scss';

const TodoList = (props) => (
		<ul className="todo-app-todo-list">
		{props.filteredTodos.map(todo =>
			<TodoItem key={todo.id} todo={todo} 
			onComplete={props.onComplete} 
			onDelete={props.onDelete} 
			onEdit={props.onEdit}
			/>
			)}
		</ul>
	)
export default TodoList;