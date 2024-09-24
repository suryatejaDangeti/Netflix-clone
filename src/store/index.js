import { compose, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { rootReducer } from './reducers';

const middleware = [logger];

const composedEnchancers = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnchancers)
