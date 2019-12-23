import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import { reducer } from './reducers';
import { rootSaga } from './saga';

export default function() {
  const sagaMiddleware = createSagaMiddleware();
  const enchancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

  const store = createStore(
    reducer,
    enchancers,
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
