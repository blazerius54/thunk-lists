import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  sendStackOverflowRequest,
  sendGithubRequest,
  toggleModal,
} from './actions';
import { navigation } from '../../utils/consts';
import StackList from '../../components/StackList';
import { MainWrapper } from './styled';
import GhList from '../../components/GhList';
import ModalWindow from '../../components/ModalWindow';

class DataContainer extends Component {
  componentDidMount() {
    if (this.props.match.url === '/') {
      this.props.history.push(navigation[0].link);
    }
  }

  redirectFromModal = () => {
    this.props.history.push(`${this.props.match.params.dataType}/details`);
    // this.props.toggleModal();
  };

  render() {
    const {
      sofQuestions,
      ghRepos,
      match,
      sendStackOverflowRequest,
      sendGithubRequest,
      loading,
      showModal,
      toggleModal,
    } = this.props;
    const GH_ACTIVE_COMPONENT = navigation[0].link === match.url;
    const SOF_ACTIVE_COMPONENT = navigation[1].link === match.url;

    return (
      <MainWrapper>
        {GH_ACTIVE_COMPONENT && (
          <GhList
            ghRepos={ghRepos}
            sendGithubRequest={sendGithubRequest}
            loading={loading}
            toggleModal={toggleModal}
          />
        )}
        {SOF_ACTIVE_COMPONENT && (
          <StackList
            sofQuestions={sofQuestions}
            sendStackOverflowRequest={sendStackOverflowRequest}
            loading={loading}
          />
        )}
        {showModal && (
          <ModalWindow
            toggleModal={toggleModal}
            redirectFromModal={this.redirectFromModal}
          />
        )}
      </MainWrapper>
    );
  }
}

const mapStateToProps = state => ({
  sofQuestions: state.appReducer.sofQuestions,
  ghRepos: state.appReducer.ghRepos,
  loading: state.appReducer.loading,
  showModal: state.appReducer.showModal,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { sendStackOverflowRequest, sendGithubRequest, toggleModal },
    dispatch,
  );

DataContainer.propTypes = {
  sendGithubRequest: PropTypes.func.isRequired,
  sendStackOverflowRequest: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  sofQuestions: PropTypes.array.isRequired,
  ghRepos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataContainer);
