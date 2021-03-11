import axios from 'axios'

const SET_GEAR_CATEGORIES = "gear/setGearCategories"
const SET_GEAR_ITEMS ="gear/setGearItems"
const APPEND_GEAR_ITEM = "gear/appendItem"
const DELETE_GEAR_ITEM = "gear/deleteItem"

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

const appendItem = (item) =>{
    return {
        type: APPEND_GEAR_ITEM,
        payload: item
    }
}

const deleteItem = (group, id) => {
    return {
        type: DELETE_GEAR_ITEM,
        group: group,
        payload: id
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

export const deleteGearItem = (group, id) => async (dispatch) => {
    const response = await fetch(`/api/gear/items/${id}`, {
        method: "DELETE",
    })

    dispatch(deleteItem(group,id))
}

export const createGearItem = (obj) => async (dispatch) =>{
    const formData = new FormData();
    formData.append("id", obj.name)
    formData.append("owner_id", obj.ownerId)
    formData.append("name", obj.name)
    formData.append("category_id", obj.categoryId)
    formData.append("manufacturer", obj.manufacturer)
    formData.append("status", obj.status)
    formData.append("purchase_date", obj.purchaseDate)
    formData.append("cost", obj.cost)
    formData.append("quantity", obj.quantity)
    if (obj.imageFile) formData.append("image_file", obj.imageFile)

    const response = await axios.post("/api/gear/items/new", formData,{
        headers:{
            "content-type":"multipart/form-data"
        },
    }) 
        dispatch(appendItem(response.data))
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
            console.log("hit")
            return newState
        case APPEND_GEAR_ITEM:
            newState = Object.assign({}, state);
            if (newState.items[action.payload.category_id]){
                const arr = [...newState.items[action.payload.category_id], action.payload]
                newState.items[action.payload.category_id] = arr
            } else{
                newState.items[action.payload.category_id] = [action.payload]
            }
            return newState
        case DELETE_GEAR_ITEM:
            newState = Object.assign({}, state);
            newState.items[action.group] = newState.items[action.group].filter(el => el.id !== action.payload)
            return newState
        default:
            return state
    }
}

export default gearReducer