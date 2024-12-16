import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const signup = user => {
    console.log("User received")
    return fetch(`${API}/api/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            console.log("Response ==> ",response)
            return response.json();
        })
        .catch(err => console.log(err));
};
