const SET_GROUPS = 'groups/setGroups'
const SET_PENDING_GROUPS = 'groups/setPendingGroups'
const SET_GROUP_MEMBERS = 'groups/setGroupMembers'
const REMOVE_GROUP_MEMBER = 'groups/removeMember'
const ADD_TRIPS = "groups/addTrips"

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

const removeMember = (id) => {
    return {
        type: REMOVE_GROUP_MEMBER,
        payload: id
    }
}

const addTrips = (trips) => {
    return {
        type: ADD_TRIPS,
        payload:trips
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

export const addGroupMember = (groupId, userId) => async (dispatch) => {
    const response = await fetch("/api/group/addmember", {
        method: 'POST',
        body: JSON.stringify({groupId, userId})
    })

    if (response.ok){
        return 
    }
}

export const removeGroupMember = (groupId, userId) => async (dispatch) => {
    const response = await fetch("/api/group/removemember", {
        method:'POST',
        body:JSON.stringify({groupId, userId}),
    })

    dispatch(removeMember(userId))
}

export const getGroupTrips = (groupId) = async (dispatch) => {
    const response = await fetch("/api/trips", {
        method:'POST',
        body:JSON.stringify({groupId}),
    })
    if(response.ok){
        trips = await response.json()
        dispatch(addTrips(trips))
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
        case REMOVE_GROUP_MEMBER:
            newState = Object.assign({}, state);
            console.log('******', newState.groupMembers[action.payload.id])
            delete newState.groupMembers[action.payload]
            return newState
        default:
            return state
    }
}

export default groupReducer