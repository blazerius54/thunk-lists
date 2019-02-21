import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { myThunkActionCreator } from './actions';
class DataContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        data
        <button onClick={this.props.myThunkActionCreator}>click</button>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  foo: state.appReducer.foo,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { myThunkActionCreator },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataContainer);
