import Names from "../../assets/data.json";
import { NameState } from "../../types";
import { DISLIKE_NAME, LIKE_NAME } from "../actions/name";
const initialState = {
	names: Names.names,
	likedNames: [],
	dislikedNames: [],
	lastIndex: { boy: 0, girl: 0 },
};

export default (state: NameState = initialState, action: any) => {
	switch (action.type) {
		case LIKE_NAME:
			return {
				...state,
				likedNames: state.likedNames.concat(action.name),
				lastIndex: state.lastIndex[action.gender] = action.name.id 

			};
		case DISLIKE_NAME:
			return {
				...state,
				dislikedNames: state.dislikedNames.concat(action.name),
			};
		default:
			return state;
	}
};
