import { createStore } from 'redux';
import rootReducer  from '../reducers';

const rootStore = createStore(rootReducer);

export type State = ReturnType<typeof rootStore.getState>
export default rootStore;