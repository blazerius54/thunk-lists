import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendGhDetailsRequest, sendSofDetailsRequest } from './actions';
import { toggleModal } from '../DataContainer/actions';
import { SinglePostWrapper } from '../../components/CommonStyled';
import GhDetails from '../../components/GhDetails';
import SofDetails from '../../components/SofDetails';

class Details extends React.Component {
  componentDidMount() {
    const {
      showModal,
      toggleModal,
      sendGhDetailsRequest,
      sendSofDetailsRequest,
      urlRequest,
      match,
    } = this.props;
    if (showModal) {
      toggleModal(urlRequest);
    }
    if (match.params.dataType === 'gh') {
      sendGhDetailsRequest(urlRequest);
    }

    if (match.params.dataType === 'sf') {
      sendSofDetailsRequest(urlRequest);
    }
  }

  render() {
    const { ghRepoDetails, sofDetails } = this.props;
    return (
      <SinglePostWrapper>
        {ghRepoDetails &&
          ghRepoDetails.owner && <GhDetails ghRepoDetails={ghRepoDetails} />}
        {sofDetails &&
          sofDetails.owner && <SofDetails sofDetails={sofDetails} />}
      </SinglePostWrapper>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.detailsReducer.loading,
  ghRepoDetails: state.detailsReducer.ghRepoDetails,
  sofDetails: state.detailsReducer.sofDetails,
  urlRequest: state.globalReducer.urlRequest,
  showModal: state.appReducer.showModal,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { sendGhDetailsRequest, toggleModal, sendSofDetailsRequest },
    dispatch,
  );

Details.propTypes = {
  sendGhDetailsRequest: PropTypes.func.isRequired,
  sendSofDetailsRequest: PropTypes.func.isRequired,
  urlRequest: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  ghRepoDetails: PropTypes.object,
  sofDetails: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
