import React from 'react';
import R from 'ramda';
import { FormGroup, InputGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { renderIf } from '../../lib/renderIf'
import './EmailField.scss'


export class EmailField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };
        this.validateEmail = this.validateEmail.bind(this);
    }

    validateEmail(event) {
        const email = event.target.value;
        const mailParts = R.split('@', email);
        const partsNotEmpty = R.all((ele) => ele.length > 0)(mailParts);

        if (mailParts.length === 2 && partsNotEmpty) {
            this.setState({email}, () => this.props.propagateEmail(email));
        } else {
            this.setState({email: ''});
        }
    }

    render() {
        const {label} = this.props;
        const email = this.state.email;
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
                    {renderIf(!Boolean(email), <HelpBlock>Please insert a valid email.</HelpBlock>)}
                </FormGroup>
            </div>
        )
    }

}

EmailField.propTypes = {
    label: React.PropTypes.string,
    propagateEmail: React.PropTypes.func
};

EmailField.defaultProps = {
    label: 'Mail',
    propagateEmail: () => {}
};
