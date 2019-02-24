import React from 'react';
import {
  OwnerAvatar,
  PostHeader,
  HeaderButtons,
  SinglePostDetails,
  PostRow,
  RowProp,
  RowValue,
} from '../CommonStyled';
import GhDetails from '../GhDetails';
import PropTypes from 'prop-types';

const SofDetails = ({ sofDetails }) => (
  <SinglePostDetails>
    <PostHeader>
      {sofDetails.owner &&
        sofDetails.owner.profile_image && (
        <OwnerAvatar>
          <img src={sofDetails.owner.profile_image} alt="avatar" />
        </OwnerAvatar>
      )}
      <HeaderButtons>
        <button>
          <a target="_blank" rel="noopener noreferrer" href={sofDetails.link}>
            stack link
          </a>
        </button>
      </HeaderButtons>
    </PostHeader>
    <PostRow>
      <RowProp>User:</RowProp>
      <RowValue>{sofDetails.owner.display_name}</RowValue>
    </PostRow>
    <PostRow>
      <RowProp>User reputation:</RowProp>
      <RowValue>{sofDetails.owner.reputation}</RowValue>
    </PostRow>
    <PostRow>
      <RowProp>Total answers:</RowProp>
      <RowValue>{sofDetails.answer_count}</RowValue>
    </PostRow>
    <PostRow>
      <RowProp>Question:</RowProp>
      <RowValue>{sofDetails.title}</RowValue>
    </PostRow>
    <PostRow>
      <RowProp>Score:</RowProp>
      <RowValue>{sofDetails.score}</RowValue>
    </PostRow>
  </SinglePostDetails>
);

GhDetails.propTypes = {
  sofDetails: PropTypes.object.isRequired,
};

export default SofDetails;
