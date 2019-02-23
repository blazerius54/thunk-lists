import styled from 'styled-components';

export const StackListWrapper = styled.div`
  width: 100%;
  background: #f2f2f2;
  padding: 10px 15px;
`;

export const SinglePost = styled.div`
  border-bottom: 1px solid #d0d0d0;
  padding: 20px 10px;
`;

export const PostOwner = styled.div`
  color: #676565;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const PostContent = styled.p`
  font-weight: 600;
`;

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;

  button {
    align-self: center;
    cursor: pointer;
    background: #d2d2d2;
    border-radius: 5px;
    color: #6977c3;
  }
`;

export const OwnerAvatar = styled.div`
  display: flex;
  width: 50px;
  margin: 0 10px 10px 0;
  img {
    max-width: 100%;
    align-self: center;
    border-radius: 100%;
  }
`;

export const TagsContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  span {
    padding: 5px;
    border-radius: 10px;
    margin-right: 10px;
    background: #d2d2d2;
    font-size: 0.7rem;
    align-self: center;
    margin-bottom: 10px;
  }
`;