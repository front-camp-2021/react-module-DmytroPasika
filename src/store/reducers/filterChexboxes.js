import {
    GET_DATA,
} from '../actions/getData.js'
import _ from 'lodash'

export const initialState = {
    brands: [],
    categories: []
}



export default function chexkboxes(state = initialState, action) {
    const cloneState = _.cloneDeep(state)

    switch (action.type) {
        case GET_DATA:
            cloneState.categories = action.data.category
            cloneState.brands = action.data.brands
            return cloneState

        default:
            return state
    }
};



