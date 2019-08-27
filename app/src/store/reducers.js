import counterActions from './counteractions';
import logActions from './logactions';

const reducers = [
	counterActions,
	logActions,
];

export default (state, action) => {
 const newState = { ...state };
 for (const reducer of reducers) {
   const reducedState = reducer(newState, action);
   if (reducedState) {
     return reducedState;
   }
 }

 return state;
};