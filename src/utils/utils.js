

class Utils{
	store = (namespace, data) => {
		if (data) {
			return localStorage.setItem(namespace, JSON.stringify(data));
		}

		const store = localStorage.getItem(namespace);
		return (store && JSON.parse(store)) || [];
	};
	getLoginSession = () => 
	{
		return sessionStorage.getItem('namespace');
	};

	addLoginSession = (email) => {
		sessionStorage.setItem('namespace', email);
	};

	destroyLoginSession = () =>{
		sessionStorage.removeItem('namespace');
	};
	
	
	addUser = (email, data) => {
		let newData;
		if(typeof data === 'string' && !localStorage.getItem(email)){
			newData = {password: data};
			localStorage.setItem(email, JSON.stringify(newData));
		}else if(typeof data === 'string' && localStorage.getItem(email)){
			return;
		}
		else{
			newData = {password: JSON.parse(localStorage.getItem(email)).password,
								userProfile: data};
								localStorage.setItem(email, JSON.stringify(newData));
		}
		
	}

	getUserPassword = (email) => {
		return JSON.parse(localStorage.getItem(email)).password;
	}

	getUserProfile = (email) => {

		return JSON.parse(localStorage.getItem(email)).userProfile;
	}

};

export default Utils;