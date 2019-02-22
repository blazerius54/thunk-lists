import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { myThunkActionCreator } from './actions';
import { navigation } from '../../utils/consts';
import StackList from '../../components/StackList';

class DataContainer extends Component {
  componentDidMount() {
    if (this.props.match.url === '/') {
      this.props.history.push(navigation[0].link);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.myThunkActionCreator}>click</button>
        <StackList/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  foo: state.appReducer.foo,
  sofQuestions: state.appReducer.sofQuestions,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ myThunkActionCreator }, dispatch);

DataContainer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  sofQuestions: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataContainer);
