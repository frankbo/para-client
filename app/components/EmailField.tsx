import * as React from 'react';
import * as R from 'ramda';
import { FormGroup, InputGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { renderIf } from '../lib/renderIf'

interface EmailFieldState { email: string }
export interface EmailFieldProps {
    label?: string,
    propagateEmail: (email: string) => any
}

export class EmailField extends React.Component<EmailFieldProps, EmailFieldState> {
    constructor(props: EmailFieldProps) {
        super(props);
        this.state = { email: '' };
        this.validateEmail = this.validateEmail.bind(this);
    }

    public validateEmail(event: any) {
        const email: string = event.target.value;
        const mailParts: Array<string> = R.split('@', email);
        const partsNotEmpty = R.all((ele: string) => ele.length > 0)(mailParts);

        if (mailParts.length === 2 && partsNotEmpty) {
            this.setState({email}, () => this.props.propagateEmail(email));
        } else {
            this.setState({email: ''});
        }
    }

    public render() {
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

    public static defaultProps: EmailFieldProps = {
        label: 'Mail',
        propagateEmail: () => {}
    };
}
