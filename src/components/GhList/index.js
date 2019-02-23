import React from 'react';
import PropTypes from 'prop-types';
import {
  ContentListWrapper,
  SinglePost,
  PostContent,
  PostOwner,
  OwnerAvatar,
  PostHeader,
} from '../CommonStyled';

class GhList extends React.Component {
  componentDidMount() {
    this.props.sendGithubRequest();
  }

  render() {
    const { ghRepos } = this.props;
    return (
      <ContentListWrapper>
        {ghRepos.length > 0 &&
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
                <button>
                  <a target="_blank" href={html_url}>
                    watch
                  </a>
                </button>
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
};

export default GhList;
