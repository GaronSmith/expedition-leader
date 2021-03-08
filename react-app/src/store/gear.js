const SET_GEAR_CATEGORIES = "gear/setGearCategories"

const setGearCategories = (categories) =>{
    return {
        type: SET_GEAR_CATEGORIES,
        payload:categories
    }
}

export const getCategories = () => async (dispatch) => {
    const response = await fetch("api/gear/categories")

    if(response.ok){
        const categories = await response.json()
        dispatch(setGearCategories(categories))
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
        default:
            return state
    }
}

export default gearReducer