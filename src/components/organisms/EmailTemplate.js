import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Col, Row} from 'react-styled-flexboxgrid';
import Checkbox from '../atoms/CheckBox';
import Label from '../atoms/Label';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Header from '../atoms/Header';
import ErrorDiv from '../atoms/ErrorDiv';

const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/; // anything@anything.anything
    return re.test(email);
  }

const StyledMediaQuery = styled.div `
  @media (max-width: 48rem) {
    text-align: center;
    font-size: 0.8em
  }

  @media (min-width: 48rem) and (max-width: 64rem) {
    text-align: center;
    font-size: 1em
  }
`

class EmailTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      isChecked: false,
      isError: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleCheckbox (value) {
    this.setState({
      isChecked: value,
    })
  }

  handleButtonClick () {
    if (this.state.isChecked && validateEmail(this.state.email)) {
      this.setState({
        isError: false,
      })

      this.props.handleClick(this.state.email);

    } else {
      this.setState({
        isError: true,
      })
    }
  }

  render() {
    const {isError} = this.state;

    return (<Row middle='md'>
      <Col xs={12} md={5} lg={4}>
        <Row center='xs' end='md'>
          <StyledMediaQuery>
            <Header text={this.props.headerText}></Header>
          </StyledMediaQuery>
        </Row>
      </Col>
      <Col xs={12} md={7} lg={8}>
        <Row>
          <Col xs={12}>
            <Row center='xs' start='md'>
              <Col xs={12} lg={12}>
                <StyledMediaQuery>
                  <Label fontWeight='bold' fontSize='1.2em' text={this.props.labelText}/>
                </StyledMediaQuery>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row start='md' center='sm'>
              <Col xs={12} sm={8} md={8}>
                <Input inputType={'email'} title={'Email'} name={'email'} changeFunc={this.handleInputChange} content={this.state.email} placeholder={'Email Address'}/>
              </Col>
              <Col xs={12} sm={2} md={2}>
                <Button onClick={this.handleButtonClick}>Next</Button>
              </Col>
              <Col xs={false} sm={false} md={2}>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {isError &&
              <Row start='xs' center='sm'>
                <Col xs={12} sm={10} md={12}>
                  <ErrorDiv text={'* Please enter a valid email and agree to the terms'} />
                </Col>
              </Row>
            }
            <Row center='sm' start='xs'>
              <Col xs={11} sm={10} md={12}>
                <Checkbox checkboxLabel='I agree to receive information from Discovery Communications in accordance with the following Privacy Policy'
                  onCheckboxClick={this.handleCheckbox}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>)
  }
}

EmailTemplate.propTypes = {
  headerText: PropTypes.string,
  labelText: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
}

export default EmailTemplate;
