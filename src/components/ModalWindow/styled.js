import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.34);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  width: 400px;
  height: 100px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 0;
  box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const ModalBtn = styled.button``;
