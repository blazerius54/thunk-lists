import React from 'react';
import PropTypes from 'prop-types';
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

class GhList extends React.Component {
  componentDidMount() {
    this.props.sendGithubRequest();
  }

  render() {
    const { ghRepos, loading, toggleModal } = this.props;
    return (
      <ContentListWrapper>
        {loading && <LoaderComponent />}
        {!loading &&
          ghRepos.length > 0 &&
          ghRepos.map(({ owner, description, full_name, html_url, id }) => (
            <SinglePost key={id}>
              <PostHeader>
                <PostOwner>
                  {owner.avatar_url && (
                    <OwnerAvatar>
                      <img src={owner.avatar_url} alt="avatar" />
                    </OwnerAvatar>
                  )}
                  {full_name}
                </PostOwner>
                <HeaderButtons>
                  <button>
                    <a target="_blank" href={html_url}>
                      link
                    </a>
                  </button>
                  <button onClick={() => toggleModal(full_name)}>
                    details
                  </button>
                </HeaderButtons>
              </PostHeader>
              <PostContent>{description}</PostContent>
            </SinglePost>
          ))}
      </ContentListWrapper>
    );
  }
}

GhList.propTypes = {
  ghRepos: PropTypes.array.isRequired,
  sendGithubRequest: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default GhList;
