import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row} from 'react-styled-flexboxgrid';
import Label from '../atoms/Label';
import Header from '../atoms/Header';

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

class FinalTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
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
            <Row center='xs' start='md'>
              <Col xs={12} lg={12}>
                <StyledMediaQuery>
                  <Label  fontWeight='normal' fontSize='1em' text='Look out for the latest news on your favorite shows.'/>
                </StyledMediaQuery>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      </Row>
    )
  }
}

export default FinalTemplate;
