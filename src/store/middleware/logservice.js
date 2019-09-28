export default store => next => async action => {
  next(action);
	switch (action.type) {
  	case 'GETLOGS':
      try {
        const res = await fetch('/logs/' + action.query);
        const response = await res.json();
        next({type: 'GOTLOGS', data: response});
      } catch(err) {
        console.error(err);
      }

    	break;
    default: return false;
	}
};