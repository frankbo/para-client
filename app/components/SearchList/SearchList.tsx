import * as React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';
import {Button, Label} from 'react-bootstrap';
import './SearchList.scss';

interface SearchListState {
    searchTerms:Array<string>,
    searchTerm:string
}

export interface SearchListProps {
    searchTerms?:Array<string>,
    propagateTerms: (array: Array<string>) => any
}

export class SearchList extends React.Component<SearchListProps, SearchListState> {

    constructor(props: SearchListProps) {
        super(props);
        this.state = {
            searchTerms: props.searchTerms,
            searchTerm: ''
        };
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
        this.addSearchTerm = this.addSearchTerm.bind(this);
    }

    addSearchTerm(searchTerm: string) {
        if (searchTerm.length > 0) {
            const searchTerms:Array<string> = this.state.searchTerms.concat(searchTerm);
            this.setState({searchTerms, searchTerm: ''}, () => this.props.propagateTerms(searchTerms));
        } else {
            //todo show help message
        }
    }

    removeSearchTerm(termToRemove: string) {
        const searchTerms: Array<string> = this.state.searchTerms.filter( term => term !== termToRemove );
        const { searchTerm } = this.state;

        this.setState( { searchTerms, searchTerm }, () => this.props.propagateTerms(searchTerms) )
    }

    updateSearchTerm(event: any) {
        const searchTerm:string = event.target.value;
        const {searchTerms} = this.state;
        this.setState({searchTerms, searchTerm})
    }

    renderList(searchTerms:Array<string>) {
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

    public static defaultProps: SearchListProps = { searchTerms:[], propagateTerms: () => {} };

}