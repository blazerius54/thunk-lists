import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import DataContainer from './containers/DataContainer';
import Header from './components/Header';
import configureStore from './configureStore';
import Details from './containers/Details';

const history = createHistory();
const initialState = {};
const store = configureStore(initialState, history);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={history}>
            <React.Fragment>
              <Header />
              <Switch>
                <Route exact path="/:dataType?" component={DataContainer} />
                <Route exact path="/:dataType/details" component={Details} />
              </Switch>
            </React.Fragment>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
