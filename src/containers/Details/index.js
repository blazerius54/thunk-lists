import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment/moment';
import { sendGhDetailsRequest } from './actions';
import { toggleModal } from '../DataContainer/actions';
import {
  ContentListWrapper,
  SinglePost,
  SinglePostWrapper,
  PostContent,
  PostOwner,
  OwnerAvatar,
  PostHeader,
  HeaderButtons,
  PostRow,
  RowProp,
  RowValue,
  SinglePostDetails,
} from '../../components/CommonStyled';

class Details extends React.Component {
  componentDidMount() {
    if (this.props.showModal) {
      this.props.toggleModal(this.props.repoFullName);
    }
    this.props.sendGhDetailsRequest(this.props.repoFullName);
  }

  render() {
    const { ghRepoDetails } = this.props;
    return (
      <SinglePostWrapper>
        {ghRepoDetails &&
          ghRepoDetails.owner && (
          <SinglePostDetails>
            <PostHeader>
              {ghRepoDetails.owner &&
                  ghRepoDetails.owner.avatar_url && (
                <OwnerAvatar>
                  <img src={ghRepoDetails.owner.avatar_url} alt="avatar" />
                </OwnerAvatar>
              )}
              <HeaderButtons>
                  <button>
                    <a target="_blank" href={ghRepoDetails.svn_url}>
                      repo link
                  </a>
                  </button>
              </HeaderButtons>
            </PostHeader>
            <PostRow>
              <RowProp>User:</RowProp>
              <RowValue>{ghRepoDetails.owner.login}</RowValue>
            </PostRow>
            <PostRow>
              <RowProp>Repo`s name::</RowProp>
              <RowValue>{ghRepoDetails.name}</RowValue>
            </PostRow>
            <PostRow>
              <RowProp>Forks:</RowProp>
              <RowValue>{ghRepoDetails.forks}</RowValue>
            </PostRow>
            <PostRow>
              <RowProp>Created:</RowProp>
              <RowValue>
                {moment(ghRepoDetails.created_at).format('DD.MM.YYYY')}
              </RowValue>
            </PostRow>
            <PostRow>
              <RowProp>Total issues:</RowProp>
              <RowValue>{ghRepoDetails.open_issues_count}</RowValue>
            </PostRow>
          </SinglePostDetails>
        )}
      </SinglePostWrapper>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.detailsReducer.loading,
  ghRepoDetails: state.detailsReducer.ghRepoDetails,
  repoFullName: state.globalReducer.repoFullName,
  showModal: state.appReducer.showModal,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendGhDetailsRequest, toggleModal }, dispatch);

Details.propTypes = {
  loading: PropTypes.bool.isRequired,
  repoFullName: PropTypes.string.isRequired,
  ghRepoDetails: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
