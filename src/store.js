import { createStore } from 'Redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;