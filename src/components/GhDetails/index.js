import React from 'react';
import moment from 'moment/moment';
import PropTypes from 'prop-types';
import {
  OwnerAvatar,
  PostHeader,
  HeaderButtons,
  PostRow,
  RowProp,
  RowValue,
  SinglePostDetails,
} from '../CommonStyled';

const GhDetails = ({ ghRepoDetails }) => (
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={ghRepoDetails.svn_url}
          >
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
      <RowProp>Repo`s name:</RowProp>
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
);

GhDetails.propTypes = {
  ghRepoDetails: PropTypes.object.isRequired,
};

export default GhDetails;
