import * as React from 'react';
import {Button} from 'react-bootstrap';
import {EmailField} from '../EmailField/EmailField';
import {SearchList} from '../SearchList/SearchList';
import './App.scss';

interface SearchListState {
    searchTerms:Array<string>,
    email:string
}

export class App extends React.Component<{}, SearchListState> {

    constructor(props:any) {
        super(props);
        this.state = {
            searchTerms: [],
            email: ''
        };

        this.updateSearchList = this.updateSearchList.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
    }

    updateSearchList(searchTerms:Array<string>) {
        const {email} = this.state;
        this.setState({searchTerms, email});
    }

    updateEmail(email:string) {
        const {searchTerms} = this.state;
        this.setState({searchTerms, email});
    }

    submit(email:string, list:Array<string>) {
        console.log(email)
        console.log(list)
    }

    render() {
        const isDisabled:boolean = !(this.state.searchTerms.length > 0 && this.state.email.length > 0);
        const {email, searchTerms} = this.state;
        return (
            <div className='app'>
                <div className='container'>
                    <form noValidate onSubmit={ () => this.submit(email, searchTerms) }>
                        <div className='form-container'>
                            <EmailField label='Your Email' propagateEmail={ this.updateEmail }/>
                            <SearchList propagateTerms={ this.updateSearchList }/>
                            <Button className='submit-btn' type='submit' bsStyle='primary' disabled={isDisabled}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

