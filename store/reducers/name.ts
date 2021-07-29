import Names from "../../assets/data.json";
import { NameState } from "../../types";
import { DISLIKE_NAME, LIKE_NAME } from "../actions/name";
const initialState = {
	names: {boyNames: Names.boyNames, girlNames: Names.girlNames},
	likedNames: [],
	dislikedNames: [],
};

export default (state: NameState = initialState, action: any) => {
	let genderToFilter
	switch (action.type) {
		case LIKE_NAME:
			if(action.name.gender === 'girl'){
				genderToFilter = state.names.girlNames
			} else {
				genderToFilter = state.names.boyNames
			}
			return {
				...state,
				// names: genderToFilter.filter(name => name.id != action.name.id),
				likedNames: state.likedNames.concat(action.name),
			};
		case DISLIKE_NAME:
			if(action.name.gender === 'girl'){
				genderToFilter = state.names.girlNames
			} else {
				genderToFilter = state.names.boyNames
			}
			return {
				...state,
				// names: genderToFilter.filter(name => name.id != action.name.id),
				dislikedNames: state.likedNames.concat(action.name),
			};
		default:
			return state;
	}
};
