import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import DataContainer from './containers/DataContainer';
import Header from './components/Header';
import configureStore from './configureStore';

const history = createHistory();
const initialState = {};
const store = configureStore(initialState, history);
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
              </Switch>
            </React.Fragment>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
