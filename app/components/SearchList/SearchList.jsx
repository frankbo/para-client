import React from 'react';
import {FormGroup, FormControl, Button, Label} from 'react-bootstrap';
import './SearchList.scss';


export class SearchList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerms: props.searchTerms,
            searchTerm: ''
        };
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
        this.addSearchTerm = this.addSearchTerm.bind(this);
    }

    addSearchTerm(searchTerm) {
        if (searchTerm.length > 0) {
            const searchTerms = this.state.searchTerms.concat(searchTerm);
            this.setState({searchTerms, searchTerm: ''}, () => this.props.propagateTerms(searchTerms));
        } else {
            //todo show help message
        }
    }

    removeSearchTerm(termToRemove) {
        const searchTerms = this.state.searchTerms.filter( term => term !== termToRemove );
        const { searchTerm } = this.state;

        this.setState( { searchTerms, searchTerm }, () => this.props.propagateTerms(searchTerms) )
    }

    updateSearchTerm(event) {
        const searchTerm = event.target.value;
        const {searchTerms} = this.state;
        this.setState({searchTerms, searchTerm})
    }

    renderList(searchTerms){
        return (
            <ul className='tags-list'>
                { searchTerms.map((term, i) => (
                    <li className='tag-item' key={i}>
                        <Button
                            bsStyle='primary'
                            onClick={ () => this.removeSearchTerm(term) }>-</Button>
                        <Label>{ term }</Label>
                    </li>
                )) }
            </ul>
        );
    }

    render() {
        const {searchTerm} = this.state;

        return (
            <div className="search-list">
                { this.renderList(this.state.searchTerms) }
                <FormGroup className='input-tags' controlId="formBasicText">
                    <FormControl
                        type="text"
                        onChange={ this.updateSearchTerm }
                        value={ searchTerm }
                        placeholder="enter search term"/>
                    <Button
                        bsStyle='primary'
                        onClick={ () => this.addSearchTerm(searchTerm) }>+</Button>
                </FormGroup>
            </div>
        )
    }
}

SearchList.propTypes = {
    searchTerms: React.PropTypes.array,
    propagateTerms: React.PropTypes.func
};

SearchList.defaultProps = {
    searchTerms: [],
    propagateTerms: () => {}
};
