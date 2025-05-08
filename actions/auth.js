import fetch from 'isomorphic-fetch';
import { API } from '../config';
import cookie from 'js-cookie'
import Router from "next/router";

export const handleResponse = response => {
    if (response.status === 401) {
        signout(() => {
            Router.push({
                pathname: '/signin',
                query: {
                    message: 'Your session is expired. Please signin'
                }
            });
        });
    }
};


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

export const signin = user => {
    return fetch(`${API}/api/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

//set cookie to browser

export const setCookie = (key, value) => {
    if(process.browser){
        cookie.set(key,value, {
            expires: 1
        })
    }
}

export const removeCookie = (key) => {
    if(process.browser){
        cookie.remove(key, {
            expires: 1
        })
    }
}

export const getCookie = (key) => {
    if(process.browser){
       return cookie.get(key)
    }
}

export const setLocalStorage = (key, value) => {
    if(process.browser){
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export const removeLocalStorage = (key) => {
    if(process.browser){
        localStorage.removeItem(key)
    }
}

export const authenticate = (data, next) => {
    setCookie("token", data.token)
    setLocalStorage("user", data.user)
    next()
}

export const signout = (next) => {
    removeCookie("token")
    removeLocalStorage("user")
    next()

    return fetch(`${API}/api/signout`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const isAuth = () => {
    if(process.browser){
        const isCookie =  getCookie("token")
        if(isCookie){
            if(localStorage.getItem("user")){
                return JSON.parse(localStorage.getItem("user"))
            }else {
                return false
            }
        }
    }
}

export const updateUser = (user, next) => {
    if (process.browser) {
        if (localStorage.getItem('user')) {
            let auth = JSON.parse(localStorage.getItem('user'));
            auth = user;
            localStorage.setItem('user', JSON.stringify(auth));
            next();
        }
    }
};



