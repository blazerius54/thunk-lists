import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HeaderWrapper, HeaderNav, NavList, NavItem } from './styled';
import { navigation } from '../../utils/consts';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderNav>
          <NavList>
            {navigation.map(({ title, link }) => (
              <NavItem key={title}>
                <button>
                  <Link to={link}>{title}</Link>
                </button>
                </NavItem>
            ))}
          </NavList>
        </HeaderNav>
      </HeaderWrapper>
    );
  }
}

export default Header;
