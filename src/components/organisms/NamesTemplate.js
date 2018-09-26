import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Col, Row} from 'react-styled-flexboxgrid';
import Label from '../atoms/Label';
import Header from '../atoms/Header';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const StyledMediaQuery = styled.div`
  @media (max-width: 48rem) {
    text-align: center;
    font-size: 0.8em
  }

  @media (min-width: 48rem) and (max-width: 64rem) {
    text-align: center;
    font-size: 1em
}
`

class NamesTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({[name]: value});
  }

  handleButtonClick () {
    const {firstName, lastName} = this.state;
    if (firstName && lastName) {
      this.props.handleClick(firstName, lastName);
    }
  }

  render() {
    return (<Row middle='md'>
      <Col xs={12} md={5} lg={4} >
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
        <Row >
          <Col xs={12}>
            <Row center='sm'>
              <Col xs={6} sm={4}>
                <Input inputType={'text'} name={'firstName'} changeFunc={this.handleInputChange} content={this.state.firstName} placeholder={'First Name'}/>
              </Col>
              <Col xs={6} sm={4}>
                <Input inputType={'text'} name={'lastName'} changeFunc={this.handleInputChange} content={this.state.lastName} placeholder={'Last Name'}/>
              </Col>
              <Col xs={12} sm={2}>
                <Button onClick={this.handleButtonClick}>Sign Up</Button>
              </Col>
              <Col xs={false} sm={false} md={2}>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      </Row>
    )
  }
}

NamesTemplate.propTypes = {
  headerText: PropTypes.string,
  labelText: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
}

export default NamesTemplate;
