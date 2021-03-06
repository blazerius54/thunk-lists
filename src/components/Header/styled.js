import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: #000000;
  display: flex;
  justify-content: center;
`;

export const HeaderNav = styled.nav``;

export const NavList = styled.ul`
  padding: 0;
`;

export const NavItem = styled.li`
  display: inline;

  button {
      color: ${props => (props.active ? '#ff5984' : '#fff')};

    &:hover {
      cursor: pointer;
    }

    a {
      font-weight: 600;
    }
  }
`;
