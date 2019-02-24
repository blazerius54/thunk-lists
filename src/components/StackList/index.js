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
  HeaderButtons,
} from '../CommonStyled';
import LoaderComponent from '../LoaderComponent';

class StackList extends React.Component {
  componentDidMount() {
    this.props.sendStackOverflowRequest();
  }

  render() {
    const { sofQuestions, loading, toggleModal } = this.props;
    return (
      <ContentListWrapper>
        {loading && <LoaderComponent />}
        {sofQuestions.length > 0 &&
          sofQuestions.map(
            ({ owner, title, link, creation_date, tags, question_id }) => (
              <SinglePost key={question_id}>
                <PostHeader>
                  <PostOwner>
                    {owner.profile_image && (
                      <OwnerAvatar>
                        <img src={owner.profile_image} alt="avatar" />
                      </OwnerAvatar>
                    )}
                    {owner.display_name}
                  </PostOwner>
                  <HeaderButtons>
                      <a target="_blank" rel="noopener noreferrer" href={link}>
                        <button>
                        link
                        </button>
                      </a>
                    <button onClick={() => toggleModal(question_id)}>
                      details
                    </button>
                  </HeaderButtons>
                </PostHeader>
                <PostContent>{title}</PostContent>
                {tags && (
                  <TagsContainer>
                    {tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </TagsContainer>
                )}
              </SinglePost>
            ),
          )}
      </ContentListWrapper>
    );
  }
}
StackList.propTypes = {
  sofQuestions: PropTypes.array.isRequired,
  sendStackOverflowRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default StackList;
