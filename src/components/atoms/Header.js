import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div `
  font-size: 2.6em;
  line-height: 2em;
  color: #b6fdbf;
  padding: 0 10px;
  `

const Header = ({text}) => (
    <StyledDiv>{text}</StyledDiv>
)

export default Header;
