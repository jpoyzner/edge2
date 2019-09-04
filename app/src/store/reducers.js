import counterActions from './counteractions';
import logActions from './logactions';
import postsActions from './postsactions';
import todosActions from './todosactions';

const reducers = [
	postsActions,
	counterActions,
	logActions,
	todosActions,
];

export default (state, action) => {
 const newState = { ...state };
 // eslint-disable-next-line
 for (const reducer of reducers) {
   const reducedState = reducer(newState, action);
   if (reducedState) {
     return reducedState;
   }
 }

 return state;
};