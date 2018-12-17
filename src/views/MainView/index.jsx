import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from './actions.js';
import { createSelector } from 'reselect';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/index.js';


const MainView = ({filteredTodos, todosCount, completedCount, visibilityFilter, actions, model, }) => 
  (
    <div className="todo-app-main-view">
      <Header onSave={actions.addTodo} />
      <section className="main">
        {
          !!todosCount && 
          <span>
            <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
            />
            <label onClick={actions.completeAllTodos}/>
          </span>
        }
      <TodoList filteredTodos={filteredTodos} 
      onComplete={actions.completeTodo} 
      onDelete={actions.deleteTodo} 
      onEdit={actions.editTodo}
      />
        {
          !!todosCount &&
          <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
          actions={actions}
          visibilityFilter={visibilityFilter}
          setFilter={actions.setVisibilityFilter}
          />
        }
      </section>
    </div>
  )

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos
      case SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + visibilityFilter)
    }
  }
)
const getCompletedTodoCount = createSelector(
  [getTodos],
  todos => (
    todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )
  )
)

const mapStateToProps = (state, ownProps)=>  ({
  filteredTodos: getVisibleTodos(state),
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state),
  visibilityFilter: state.visibilityFilter,
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);

