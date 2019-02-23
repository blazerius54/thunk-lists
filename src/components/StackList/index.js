import React from 'react';
import PropTypes from 'prop-types';
import { TagsContainer } from './styled';
import {
  ContentListWrapper,
  SinglePost,
  PostContent,
  PostOwner,
  OwnerAvatar,
  PostHeader,
} from '../CommonStyled';

class StackList extends React.Component {
  componentDidMount() {
    this.props.sendStackOverflowRequest();
  }

  render() {
    const { sofQuestions } = this.props;
    return (
      <ContentListWrapper>
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
      </ContentListWrapper>
    );
  }
}
StackList.propTypes = {
  sofQuestions: PropTypes.array.isRequired,
  sendStackOverflowRequest: PropTypes.func.isRequired,
};

export default StackList;
