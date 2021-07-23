import Names from '../../assets/data.json'
import { NameState } from '../../types'
import { DISLIKE_NAME, LIKE_NAME } from '../actions/name';
const initialState = {
    boyNames: Names.names.boyNames,
    girlNames: Names.names.girlNames,
    likedNames: [],
    dislikedNames: []
}

export default (state :NameState = initialState, action :any) => {
    switch (action.type) {
        case LIKE_NAME:
            return {
                ...state, 
                likedNames: state.likedNames.concat(action.name)
            }
            break;
        case DISLIKE_NAME:
            return {
                ...state, 
                dislikedNames: state.dislikedNames.concat(action.name)
            }
            break;
        default:
            return state
    }
}