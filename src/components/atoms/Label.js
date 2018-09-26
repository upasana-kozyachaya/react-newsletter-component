import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.span`
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  line-height: 1.1em;
  color: #94AEBF;
  padding: .5em;
  display: inline-block;
`

const Label = (props) => (
    <StyledDiv {...props}>{props.text}</StyledDiv>
)

export default Label;
