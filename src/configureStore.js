import { createStore, compose, applyMiddleware } from 'redux';
import createReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

export default function configureStore() {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(
    createReducer(),
    // persistedState,
    // composeEnhancers(),
    applyMiddleware(
      thunkMiddleware, // позволяет нам отправлять функции
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
