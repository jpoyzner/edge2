export default store => next => action => {
  next(action);
	switch (action.type) {
  	case 'GETLOGS':
  		fetch('/logs/' + action.query)
  			.then((res) => res.json())
  			.then((response) => {
  				console.log('Success:', JSON.stringify(response));
  				next({type: 'GOTLOGS', data: response});
  			})
				.catch((error) => console.error('Error:', error));	      

    	break
	}
};