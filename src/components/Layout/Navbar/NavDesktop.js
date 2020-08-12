import React from 'react';

import { Link as SLink } from 'react-scroll';

import { NavItems, NavItem } from './Navbar.style';

import ToggleSwitch from '@common/ToggleSwitch';

const NavDesktop = () => {
  return (
    <>
      <SLink className="logo" smooth offset={-100} hashSpy={true} to="home">
        {/*<img src={logo} alt="ED. develop" />*/}
        <h3>ED.</h3>
      </SLink>

      <nav>
        <NavItems>
          <NavItem>
            <ToggleSwitch />
          </NavItem>
        </NavItems>
      </nav>
    </>
  );
};

export default NavDesktop;
