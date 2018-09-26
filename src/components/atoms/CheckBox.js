import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  margin-left: 10px;
  color: #888;
  font-size: 0.8em;
`

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: props.isChecked,
    }
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox (e) {
    this.setState({
      isChecked: !this.state.isChecked,
    }, () => {
      this.props.onCheckboxClick(this.state.isChecked);
    });
  }

  render () {
    return (
      <div>
        <input type='checkbox' defaultChecked={this.state.isChecked} onChange={this.handleCheckbox} />
        <StyledLabel>{this.props.checkboxLabel}</StyledLabel>
      </div>
    )
  }
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  checkboxLabel: PropTypes.string,
  onCheckboxClick: PropTypes.func.isRequired,
}

export default Checkbox;
