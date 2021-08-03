import Names from "../../assets/data.json";
import { NameState } from "../../types";
import { DISLIKE_NAME, LIKE_NAME } from "../actions/name";
const initialState = {
	names: {boyNames: Names.boyNames, girlNames: Names.girlNames},
	likedNames: [],
	dislikedNames: [],
	lastInteractedId: {boy: 0, girl: 0}
};

export default (state: NameState = initialState, action: any) => {
	let nextId
	if(action.name.gender === 'girl'){
		nextId = {boy: state.lastInteractedId, girl: action.name.id}
	} else {
		nextId = {boy: action.name.id, girl: state.lastInteractedId}
	}
	switch (action.type) {
		case LIKE_NAME:
			
			return {
				...state,
				likedNames: state.likedNames.concat(action.name),
				lastInteractedId: nextId
			};
		case DISLIKE_NAME:
			return {
				...state,
				dislikedNames: state.likedNames.concat(action.name),
				lastInteractedId: nextId
			};
		default:
			return state;
	}
};
