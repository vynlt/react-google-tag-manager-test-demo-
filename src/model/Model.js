import Utils from '../utils/utils';

const utils = new Utils();

class Model {

	constructor(modelName){
		this.modelName = modelName;
		this.todos = utils.store(modelName);
	}


	inform = () => {
		utils.store(this.modelName, this.todos);
	}

	addTodo = (text) => {
		this.todos = this.todos.concat({
			id: this.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
			text: text,
			completed: false
		});

		this.inform();
	}

	destroy = (todo) => {
		this.todos = this.todos.filter(function (candidate) {
			return candidate !== todo;
		});

		this.inform();
	}

	isEmpty = () => {
		if(this.todos.length === 0){
			return true;
		}
		else{
			return false;
		}
	}

}

export default Model;