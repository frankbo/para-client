import * as fetch from 'isomorphic-fetch';
import Action = Redux.Action;

const initialState = {
    email : '',
    tags : ['']
};

const UPDATE_TAGS = 'UPDATE_TAGS'

const conf = (inTags: Array<string>) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({tags: inTags})
    };
};

export const submitTags = (email: string, tags: Array<string>) => {
    return (dispatch) => {
        return fetch(`localhost:7070/tags/${email}`, conf(tags))
            .then(data => dispatch({ type: UPDATE_TAGS, tags }));
    }
};

export default function userReducer(state = initialState, action: Action) {
    switch (action.type) {
        case UPDATE_TAGS: action
        default: return state;
    }
}