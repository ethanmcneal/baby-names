import USNames from "../../assets/USNames.json";
import UKNames from "../../assets/UKNames.json"
import { NameState } from "../../types";
import { CHANGE_COUNTRY, DISLIKE_NAME, LIKE_NAME } from "../actions/name";

const InternationalNames = {"UnitedStates": USNames, "EnglandAndWales": UKNames}
const initialState = {
	names: {boyNames: InternationalNames.UnitedStates.boyNames, girlNames: InternationalNames.UnitedStates.girlNames},
	country: 'UnitedStates',
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
		case CHANGE_COUNTRY: 
		let nextCountry :any = InternationalNames[action.country]
			return {
				...state,
				names: {boyNames: nextCountry.boyNames, girlNames: nextCountry.UnitedStates.girlNames},
				country: action.country,
				lastInteractedId: {boy: nextCountry.boyNames[0].id - 1, girl: nextCountry.girlNames[0].id - 1}
			}
		default:
			return state;
	}
};
