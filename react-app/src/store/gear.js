const SET_GEAR_CATEGORIES = "gear/setGearCategories"
const SET_GEAR_ITEMS ="gear/setGearItems"

const setGearCategories = (categories) =>{
    return {
        type: SET_GEAR_CATEGORIES,
        payload:categories
    }
}

const setGearItems = (gear) => {
    return {
        type: SET_GEAR_ITEMS,
        payload: gear
    }
}

export const getCategories = () => async (dispatch) => {
    const response = await fetch("/api/gear/categories")

    if(response.ok){
        const categories = await response.json()
        dispatch(setGearCategories(categories))
    }
}

export const getGearItems = (id) => async (dispatch) => {
    const response = await fetch ("/api/gear/items", {
        method:"POST",
        body: JSON.stringify({id})
    })

    if(response.ok){
        const gear = await response.json()
        dispatch(setGearItems(gear))
    }
}

const initialState = {}

const gearReducer = (state = initialState, action) => {
    let newState;

    switch (action.type){
        case SET_GEAR_CATEGORIES:
            newState = Object.assign({}, state);
            newState.categories = action.payload
            return newState
        case SET_GEAR_ITEMS:
            newState = Object.assign({}, state);
            newState.items = action.payload
            return newState
        default:
            return state
    }
}

export default gearReducer