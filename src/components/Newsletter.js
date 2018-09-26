import React, {Component} from 'react';
import EmailTemplate from './organisms/EmailTemplate';
import NamesTemplate from './organisms/NamesTemplate';
import FinalTemplate from './organisms/FinalTemplate';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailState: true,
      isNamesState: false,
      isFinalState: false,
      email: '',
      firstName: '',
      lastName: '',
    };
    this.onEmailTemplateSubmit = this.onEmailTemplateSubmit.bind(this)
    this.onNamesTemplateSubmit = this.onNamesTemplateSubmit.bind(this)
  }

  onEmailTemplateSubmit(email) {
    this.setState({isEmailState: false, isNamesState: true, isFinalState: false, email});
  }

  onNamesTemplateSubmit(firstName, lastName) {
    this.setState({isEmailState: false, isNamesState: false, isFinalState: true, firstName, lastName},
      () => {
        console.log('Submitting form with this data obj: ', {
          'email': this.state.email,
          'firstName': this.state.firstName,
          'lastName': this.state.lastName,
        });
      });
  }

  render() {
    const {isEmailState, isNamesState, isFinalState} = this.state
    return (<Grid fluid={true} style={{
        padding: '25px',
        backgroundColor: '#131120',
      }}>
      <Row>
        <Col xs={12}>
          {isEmailState && <EmailTemplate handleClick={this.onEmailTemplateSubmit} headerText='Join The List' labelText='SIGN UP FOR THE TLC NEWSLETTER'/>}
          {isNamesState && <NamesTemplate handleClick={this.onNamesTemplateSubmit} headerText='Join The List' labelText='ALMOST DONE! PLEASE ENTER YOUR NAME'/>}
          {isFinalState && <FinalTemplate headerText='Congratulations!' labelText='Thank You For Signing Up!'/>}
        </Col>
      </Row>
    </Grid>)
  }
}
export default Newsletter;
