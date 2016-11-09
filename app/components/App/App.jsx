import React from 'react';
import {Button} from 'react-bootstrap';
import {EmailField} from '../EmailField/EmailField';
import {SearchList} from '../SearchList/SearchList';
import {submitTags} from "../../redux/UserModule";
import {connect} from 'react-redux';
import './App.scss';


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerms: [],
            email: ''
        };

        this.updateSearchList = this.updateSearchList.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
    }

    updateSearchList(searchTerms) {
        const {email} = this.state;
        this.setState({searchTerms, email});
    }

    updateEmail(email) {
        const {searchTerms} = this.state;
        this.setState({searchTerms, email});
    }

    submit(email, list) { this.props.dispatch(submitTags(email, list)) }

    render() {
        const isDisabled = !(this.state.searchTerms.length > 0 && this.state.email.length > 0);
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

App.propTypes = {
    dispatch: React.PropTypes.func
};

export default connect()(App);
