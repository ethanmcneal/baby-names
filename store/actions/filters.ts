import { Filters } from "../../types"

export const CREATE_FILTER = 'CREATE_FILTER'
export const CLEAR_FILTERS = 'CLEAR_FILTER'

export const createFilter = (filters :Filters) => {
    return{type: CREATE_FILTER, filters: filters}
}

export const clearFilters = () => {
    return {type: CLEAR_FILTERS}
}