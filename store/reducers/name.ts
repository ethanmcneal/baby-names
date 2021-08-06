import USNames from "../../assets/USNames.json";
import UKNames from "../../assets/UKNames.json"
import { NameState } from "../../types";
import { DISLIKE_NAME, LIKE_NAME } from "../actions/name";
const initialState = {
	names: {boyNames: USNames.boyNames, girlNames: USNames.girlNames},
	likedNames: [],
	dislikedNames: [],
	lastInteractedId: {boy: 0, girl: 100}
};

export default (state: NameState = initialState, action: any) => {
	let nextId
	switch (action.type) {
		case LIKE_NAME:
			if(action.name.gender === 'girl'){
				nextId = {boy: state.lastInteractedId.boy, girl: action.name.id}
			} else {
				nextId = {boy: action.name.id, girl: state.lastInteractedId.girl}
			}
			return {
				...state,
				likedNames: state.likedNames.concat(action.name),
				lastInteractedId: nextId
			};
		case DISLIKE_NAME:
			if(action.name.gender === 'girl'){
				nextId = {boy: state.lastInteractedId.boy, girl: action.name.id}
			} else {
				nextId = {boy: action.name.id, girl: state.lastInteractedId.girl}
			}
			return {
				...state,
				dislikedNames: state.likedNames.concat(action.name),
				lastInteractedId: nextId
			};
		default:
			return state;
	}
};
