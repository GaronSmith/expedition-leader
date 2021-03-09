const SET_GROUPS = 'groups/setGroups'
const SET_PENDING_GROUPS = 'groups/setPendingGroups'

const setGroups = (groups) => {
    return {
        action: SET_GROUPS,
        payload:groups
    }
}

const setPendingGroups = (groups) => {
    return {
        action: SET_PENDING_GROUPS,
        payload: groups
    }
}

const getCurrentGroups = () => async (dispatch) => {
    const response = await fetch('/api/groups')

    if(response.ok){
        const groups = await response.json()
        dispatch(setGroups(groups))
    }   
}

const getPendingGroups = () => async (dispatch) => {
    const response = await fetch("/api/groups/pending")

    if (response.ok) {
        const groups = await response.json()
        dispatch(setPendingGroups(groups))
    }
}

const initialState = {}

const groupReducer = (state = initialState, action ) => {

    let newState;

    switch (action.type){
        case SET_GROUPS:
            newState = Object.assign({}, state);
            newState.myGroups = action.payload;
            return newState
        case SET_PENDING_GROUPS:
            newState = Object.assign({}, state);
            newState.pendingGroups = action.payload;
            return newState
        default:
            return state
    }
}