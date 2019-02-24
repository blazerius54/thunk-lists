import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { HeaderWrapper, HeaderNav, NavList, NavItem } from './styled';
import { navigation } from '../../utils/consts';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderNav>
          <NavList>
            {navigation.map(({ title, link }) => (
              <NavItem
                key={title}
                active={this.props.location.pathname.split('/')[1] === link.split('/')[1]}
              >
                <Link to={link}>
                  <button>{title}</button>
                </Link>
              </NavItem>
            ))}
          </NavList>
        </HeaderNav>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);
