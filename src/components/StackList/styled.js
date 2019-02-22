import styled from 'styled-components';

export const StackListWrapper = styled.div`
  width: 100%;
  background: #f2f2f2;
  padding: 10px 15px;;
`;

export const SinglePost = styled.div`
  border-bottom: 1px solid #d0d0d0;
  padding: 20px 10px;
`;

export const PostOwner = styled.p`
  color: #676565;
  margin-right: 10px;
`;

export const PostContent = styled.p`
  font-weight: 600;
`;

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  
  button {
    background: #d2d2d2;
    border-radius: 5px;
    color: #6977c3;
  }
`;