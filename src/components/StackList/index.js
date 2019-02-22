import React from 'react';
import PropTypes from 'prop-types';
import { StackListWrapper, SinglePost, PostOwner, PostContent, PostHeader } from './styled';

const StackList = ({ sofQuestions }) => (
  <StackListWrapper>
    {sofQuestions.length > 0 &&
      sofQuestions.map(({ owner, title, creation_date }) => (
        <SinglePost key={creation_date}>
          <PostHeader>
            <PostOwner>{owner.display_name}</PostOwner>
            <button><a>stack</a></button>
          </PostHeader>
          <PostContent>{title}</PostContent>
        </SinglePost>
      ))}
  </StackListWrapper>
);

StackList.propTypes = {
  sofQuestions: PropTypes.array.isRequired,
};

export default StackList;
