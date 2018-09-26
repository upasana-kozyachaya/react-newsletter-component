import React from 'react';
import styled from 'styled-components';

const StyledButtonInput = styled.button`
  text-transform: uppercase;
  border: red;
  text-align: center;
  width: 100%;
  color: #fff;
  background-color: #ED1F34;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  padding: 9px 16px;
`

const Button = (props) => (
  <StyledButtonInput {...props}>{props.children}</StyledButtonInput>
)

export default Button;
