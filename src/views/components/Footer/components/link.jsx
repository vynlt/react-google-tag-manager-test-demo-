import React from 'react';
import classnames from 'classnames';
import './style.scss';

const Link = (props) =>(
	<a
	className={classnames({ 'selected': props.filter === props.visibilityFilter ? true : false, 'todo-app-link': true })}
	style={{ cursor: 'pointer' }}
	onClick={() => props.setFilter(props.filter)}
	>
	{props.children}
	</a>
	)
export default Link;