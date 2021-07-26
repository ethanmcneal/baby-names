import Names from "../../assets/data.json";
import { NameState } from "../../types";
import { DISLIKE_NAME, LIKE_NAME } from "../actions/name";
const initialState = {
	names: Names.names,
	likedNames: [],
	dislikedNames: [],
};

export default (state: NameState = initialState, action: any) => {
	switch (action.type) {
		case LIKE_NAME:
			return {
				...state,
				names: state.names.filter(name => name.id != action.name.id),
				likedNames: state.likedNames.concat(action.name),
			};
		case DISLIKE_NAME:
			return {
				...state,
				names: state.names.filter(name => name.id != action.name.id),
				dislikedNames: state.likedNames.concat(action.name),
			};
		default:
			return state;
	}
};
