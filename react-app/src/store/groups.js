const SET_GROUPS = 'groups/setGroups'
const SET_PENDING_GROUPS = 'groups/setPendingGroups'
const SET_GROUP_MEMBERS = 'groups/setGroupMembers'

const setGroups = (groups) => {
    return {
        type: SET_GROUPS,
        payload:groups
    }
}

const setPendingGroups = (groups) => {
    return {
        action: SET_PENDING_GROUPS,
        payload: groups
    }
}

const setGroupMembers = (members) => {
    return {
        type: SET_GROUP_MEMBERS,
        payload: members
    }
}

export const getCurrentGroups = () => async (dispatch) => {
    const response = await fetch('/api/group/')

    if(response.ok){
        const groups = await response.json()
        dispatch(setGroups(groups))
    }   
}

export const getPendingGroups = () => async (dispatch) => {
    const response = await fetch("/api/groups/pending")

    if (response.ok) {
        const groups = await response.json()
        dispatch(setPendingGroups(groups))
    }
}

export const getGroupMembers = (id) => async (dispatch) => {
    const response = await fetch("/api/group/members", {
        method:'POST',
        body:JSON.stringify({id})
    })

    if(response.ok){
        const members = await response.json()
        dispatch(setGroupMembers(members))
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
        case SET_GROUP_MEMBERS:
            newState = Object.assign({}, state);
            newState.groupMembers = action.payload
            return newState
        default:
            return state
    }
}

export default groupReducer