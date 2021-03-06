const SET_USER = "session/setUser"
const REMOVE_USER = 'session/removeUser'

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const login = (email, password) => async (dispatch) =>{
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    if(response.ok){
        const user = await response.json()
        dispatch(setUser(user))
    }
    return ;
}



const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {

    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload
            return newState
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state
    }
}

export default sessionReducer