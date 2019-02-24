import styled, { keyframes } from 'styled-components';

export const ContentListWrapper = styled.div`
  width: 100%;
  background: #f2f2f2;
  padding: 10px 15px;
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

export const RowValue = styled(PostContent)``;

export const SinglePostWrapper = styled.div`
  width: 400px;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
`;

export const SinglePost = styled.div`
  border-bottom: 1px solid #d0d0d0;
  padding: 20px 10px;
  width: 100%;
`;

export const SinglePostDetails = styled(SinglePost)`
  border: none;
`;

export const PostRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RowProp = styled.p``;

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const HeaderButtons = styled.div`
  button {
    align-self: center;
    cursor: pointer;
    background: #d2d2d2;
    border-radius: 5px;
    color: #6977c3;

    &:last-of-type {
      margin-left: 5px;
    }
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

const leaves = keyframes` 
  0% {
    transform: scale(1.0);
}
  100% {
    transform: scale(1.1);
}`;

export const Loader = styled.p`
  text-align: center;
  margin-top: 40px;
  animation: ${leaves} 0.5s infinite alternate;
`;
