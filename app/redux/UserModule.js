import fetch from 'isomorphic-fetch';

const UPDATE_TAGS = 'UPDATE_TAGS';

const initialState = {
    email : '',
    tags : []
};

export const submitTags = (email, tags) => {
    const conf = (inTags) => {
        return {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({tags: inTags})
        };
    };

    return (dispatch) => {
        return fetch(`localhost:7070/tags/${email}`, conf(tags))
            .then(data => {
                console.log(data);
                return dispatch({ type: UPDATE_TAGS, tags });
            })
            .catch(console.log);
    }
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TAGS:
            return action.tags;
        default:
            return state;
    }
}
