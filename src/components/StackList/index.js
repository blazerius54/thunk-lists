import React from 'react';
import PropTypes from 'prop-types';
import {
  StackListWrapper,
  SinglePost,
  PostOwner,
  PostContent,
  PostHeader,
  OwnerAvatar,
  TagsContainer,
} from './styled';

const StackList = ({ sofQuestions }) => (
  <StackListWrapper>
    {sofQuestions.length > 0 &&
      sofQuestions.map(({ owner, title, link, creation_date, tags }) => (
        <SinglePost key={creation_date}>
          <PostHeader>
            <PostOwner>
              {owner.profile_image && (
                <OwnerAvatar>
                  <img src={owner.profile_image} alt="avatar" />
                </OwnerAvatar>
              )}
              {owner.display_name}
            </PostOwner>
            <button>
              <a target="_blank" href={link}>
                watch
              </a>
            </button>
          </PostHeader>
          <PostContent>{title}</PostContent>
          {tags && (
            <TagsContainer>
              {tags.map(tag => (
                <span>{tag}</span>
              ))}
            </TagsContainer>
          )}
        </SinglePost>
      ))}
  </StackListWrapper>
);

StackList.propTypes = {
  sofQuestions: PropTypes.array.isRequired,
};

export default StackList;
