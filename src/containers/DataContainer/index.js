import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendStackOverflowRequest, sendGithubRequest } from './actions';
import { navigation } from '../../utils/consts';
import StackList from '../../components/StackList';
import { MainWrapper } from './styled';
import GhList from '../../components/GhList';

class DataContainer extends Component {
  componentDidMount() {
    if (this.props.match.url === '/') {
      this.props.history.push(navigation[0].link);
    }
  }

  render() {
    const {
      sofQuestions,
      ghRepos,
      match,
      sendStackOverflowRequest,
      sendGithubRequest,
    } = this.props;
    const GH_ACTIVE_COMPONENT = navigation[0].link === match.url;
    const SOF_ACTIVE_COMPONENT = navigation[1].link === match.url;

    return (
      <MainWrapper>
        {GH_ACTIVE_COMPONENT && (
          <GhList ghRepos={ghRepos} sendGithubRequest={sendGithubRequest} />
        )}
        {SOF_ACTIVE_COMPONENT && (
          <StackList
            sofQuestions={sofQuestions}
            sendStackOverflowRequest={sendStackOverflowRequest}
          />
        )}
      </MainWrapper>
    );
  }
}

const mapStateToProps = state => ({
  sofQuestions: state.appReducer.sofQuestions,
  ghRepos: state.appReducer.ghRepos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendStackOverflowRequest, sendGithubRequest }, dispatch);

DataContainer.propTypes = {
  sendGithubRequest: PropTypes.func.isRequired,
  sendStackOverflowRequest: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  sofQuestions: PropTypes.array.isRequired,
  ghRepos: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataContainer);
