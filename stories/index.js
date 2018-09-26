import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Footer from '../src/components/Footer';
import Checkbox from '../src/components/atoms/CheckBox';
import Label from '../src/components/atoms/Button';
import Button from '../src/components/atoms/Button';
import Header from '../src/components/atoms/Header';
import Input from '../src/components/atoms/Input';
import ErrorDiv from '../src/components/atoms/ErrorDiv';

storiesOf('Label', module)
.add('font-weight: bold, font-size: 1.2em', () => (
    <Label fontWeight='bold' fontSize='1.2em' text='SIGN UP FOR THE TLC NEWSLETTER' />
  ))
.add('font-weight: normal, font-size: 1em ', () => (
  <Label fontWeight='normal' fontSize='1em' text='Thank you for signing up!'/>
))

storiesOf('Button', module)
.add('button', () => (
  <Button onClick={action('Button Clicked')}>Next</Button>
))

storiesOf('Header', module)
.add('Header', () => (
  <Header text='Congratulations!'></Header>
))

storiesOf('Input', module)
.add('Input', () => (
  <Input inputType={'email'} title={'Email'} name={'email'} changeFunc={action('Input Changed')} placeholder={'Email Address'}/>
))

storiesOf('Checkbox', module)
.add('renders checked', () => (
  <Checkbox
    checkboxLabel='I agree to receive information from Discovery Communications in accordance with the following Privacy Policy'
    isChecked={true} onCheckboxClick={action('clicked')} />
))
.add('renders with variable text', () => (
  <Checkbox
    checkboxLabel='Lorem ipsum dolor sit amet'
    onCheckboxClick={action('checkbox clicked')} />
))

storiesOf('ErrorDiv', module)
.add('ErrorDiv', () => (
  <ErrorDiv text='Please enter a valid Email' />
))

storiesOf('Footer', module)
.add('render', () => (
    <Footer onClick={action('clicked')}>Hello Button</Footer>
  ))
