import USNames from "../../assets/USNames.json";
import UKNames from "../../assets/UKNames.json"
import { NameState } from "../../types";
import { CHANGE_COUNTRY, DISLIKE_NAME, LIKE_NAME } from "../actions/name";

const InternationalNames = {UnitedStates: USNames, EnglandAndWales: UKNames}
const initialState = {
	names: {boyNames: InternationalNames.UnitedStates.boyNames, girlNames: InternationalNames.UnitedStates.girlNames},
	country: 'UnitedStates',
	likedNames: [],
	dislikedNames: [],
	lastInteractedId: {boy: 1, girl: 101}
};

export default (state: NameState = initialState, action: any) => {
	let nextId
	switch (action.type) {
		case LIKE_NAME:
			console.log(action.name)
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
	console.log(action.country)

			let nextNames = InternationalNames.EnglandAndWales;
				// switch (action.country) {
				// 	case "UnitedStates":
				// 		nextNames = InternationalNames.UnitedStates
				// 		break;
				// 	case "EnglandAndWhales":
				// 		nextNames = InternationalNames.EnglandAndWales
				// 	default:
				// 		nextNames = InternationalNames.UnitedStates
				// 		break;
				// }
			return {
				...state,
				names: {boyNames: nextNames.boyNames, girlNames: nextNames.girlNames},
				country: action.country,
				lastInteractedId: {boy: nextNames.boyNames[0].id, girl: nextNames.girlNames[0].id}
			};
		default:
			return state;
	}
};
