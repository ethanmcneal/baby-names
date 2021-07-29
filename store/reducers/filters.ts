import { State } from "react-native-gesture-handler"
import { CLEAR_FILTERS, CREATE_FILTER } from "../actions/filters";

const initialState = {
    filters: {},
}

export default (state: any = initialState, action :any) => {
    switch (action.type) {
        case CREATE_FILTER:
            return {
                ...state,
                filters: action.filters
            }
            case CLEAR_FILTERS: 
            return {
                ...state,
                filters: {},
            }
        default:
            return state
    }
}