import { API } from "../../config"

export const register = (user) => {
    // return fetch(`${API}/register`,{
    console.log(API)
    return fetch(`${API}/register`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

// user verification
export const emailConfirmation = (token) => {
    return fetch(`${API}/emailconfirmation/${token}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const signin = (user) => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

// to keep logged in
export const authenticate = (info) => {
    return localStorage.setItem("jwt", JSON.stringify(info))
}

// to check if user is logged in
export const isAuthenticated = () => {
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    }
    return false
}

// to signout
export const signout = () => {
    localStorage.removeItem('jwt')
    return fetch(`${API}/signout`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

// forget password
export const forgetPassword = (email) => {
    return fetch(`${API}/forgetpassword`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(email)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

// reset password
export const resetPassword = (token, password) => {
    return fetch(`${API}/resetpassword/${token}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(password)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

// resend verification
export const resendVerification = (email) => {
    return fetch(`${API}/resendconfirmation`,{
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(email)
    })
        .then(res=>res.json())
        .catch(error=>console.log(error))
}