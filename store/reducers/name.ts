import Names from "../../assets/data.json";
import { NameState } from "../../types";
import { DISLIKE_NAME, LIKE_NAME } from "../actions/name";
const initialState = {
	boyNames: Names.names.boyNames,
	girlNames: Names.names.girlNames,
	likedNames: [],
	dislikedNames: [],
	lastIndex: { boy: 0, girl: 0 },
};

export default (state: NameState = initialState, action: any) => {
	switch (action.type) {
		case LIKE_NAME:
			return {
				...state,
				likedNames: state.likedNames.concat({...action.name, gender: action.gender}),
				lastIndex:
					action.gender === "girl"
						? { boy: state.lastIndex.boy, girl: action.name.id }
						: { boy: action.name.id, girl: state.lastIndex.girl },
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
