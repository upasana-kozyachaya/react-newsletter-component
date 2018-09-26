import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  background-color: #fff;
  opacity: .3;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.4em;
  box-sizing: border-box;
  margin: 0 0 15px;
`

const Input = (props) => (
  <div>
    <label className='form-label'>{props.label}</label>
    <StyledInput
      width={props.width}
      className={props.className}
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.changeFunc}
      placeholder={props.placeholder} />
    </div>
)

Input.propTypes = {
  inputType: PropTypes.oneOf(['text', 'email', 'number']).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  changeFunc: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  placeholder: PropTypes.string,
}

export default Input;
