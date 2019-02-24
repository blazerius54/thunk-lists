import React from 'react';
import {
  ModalBackground,
  ModalContent,
  ButtonContainer,
  ModalBtn,
} from './styled';

const ModalWindow = ({toggleModal, redirectFromModal}) => (
  <ModalBackground>
    <ModalContent>
      <p>Посмотреть подробную информацию?</p>
      <ButtonContainer>
        <ModalBtn onClick={redirectFromModal}>Да</ModalBtn>
        <ModalBtn onClick={() => toggleModal()}>Нет</ModalBtn>
      </ButtonContainer>
    </ModalContent>
  </ModalBackground>
);

export default ModalWindow;
