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
            
            break;
        case DISLIKE_NAME:

            break;
        default:
            return state
    }
}