import React from 'react';
import styled from 'styled-components';
import Wrapper from '@common/Wrapper';

const FooterWrapper = styled.footer`
  width: 100vw;
  padding: 10px;
  background: ${p =>
    p.theme.dark ? p.theme.secondaryColor : p.theme.gradient};

  p {
    font-size: 1rem;
    line-height: 35px;
    color: white;
  }

  a {
    color: ${p =>
      p.theme.dark ? p.theme.primaryColor : p.theme.secondaryColor};
    &:hover {
      color: ${p => p.theme.primaryText};
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Wrapper>
      <p style={{ textAlign: 'center' }}>Made with ❤️ and GatsbyJS;</p>
    </Wrapper>
  </FooterWrapper>
);

export default Footer;
