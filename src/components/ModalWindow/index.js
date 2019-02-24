import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalBackground,
  ModalContent,
  ButtonContainer,
  ModalBtn,
} from './styled';

const ModalWindow = ({ toggleModal, redirectFromModal }) => (
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

ModalWindow.propTypes = {
  redirectFromModal: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ModalWindow;
