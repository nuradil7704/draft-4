import {types} from "../types";


export function changeUSerAction () {
    return {
        type: types.NAME_TITLE
    }
}

export function getUserAction (users) {
    return {
        type: types.GET_USER,
        payload: users
    }
}

export function fetchUserAction () {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/`)
        const data = await response.json()

        dispatch(getUserAction(data))
    }
}

export function fetchUserActions (id) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
    }
}