import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div `
  font-size: .8em;
  line-height: 1.2;
  color: red;
  `

const ErrorDiv = ({text}) => (
    <StyledDiv>{text}</StyledDiv>
)

export default ErrorDiv;
