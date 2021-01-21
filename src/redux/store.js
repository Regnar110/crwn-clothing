import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [ // nasze middleware
    logger
];

const store = createStore(rootReducer, applyMiddleware(...middlewares)) // funkcja createStore przyjmuje dwa parametry - obiekt rootReducer oraz funkcję applyMiddleware która przyjmuje jako parametr middleware, w tym przypadku logger który został rozprzestrzeniony z tablicy

export default store;