import React from 'react';
import R from 'ramda';
import {FormGroup, InputGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import renderIf from '../lib/renderIf'

class EmailField extends React.Component {

  constructor(...args) {
    super(...args);
    this.validateEmail = this.validateEmail.bind(this);
    this.state = {
      email: ''
    }
  }

  validateEmail(event) {
    const email = event.target.value;
    const mailParts = R.split('@', email);
    const partsNotEmpty = R.all((ele) => ele.length > 0)(mailParts);

    if (mailParts.length === 2 && partsNotEmpty) {
      this.setState({email})
    } else {
      this.setState({email : ''})
    }
  }

  render() {
    const {label} = this.props;
    return (
        <div className="email-field">
          <FormGroup controlId="formBasicText">
            <ControlLabel>{label}</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl
                  onChange={this.validateEmail}
                  type="text"
                  placeholder="Enter email"/>
            </InputGroup>
            {renderIf(!Boolean(this.state.email), <HelpBlock>Please insert a valid email.</HelpBlock>)}
          </FormGroup>
        </div>
    )
  }
}

EmailField.propTypes = {
  label: React.PropTypes.string
};
EmailField.defaultProps = {
  label: "Mail"
};
export default EmailField