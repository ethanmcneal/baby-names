import USNames from "../../assets/USNames.json";
import UKNames from "../../assets/UKNames.json"
import { Name, NameState } from "../../types";
import { CHANGE_COUNTRY, DISLIKE_NAME, LIKE_NAME } from "../actions/name";

const InternationalNames = {UnitedStates: USNames, EnglandAndWales: UKNames}
const initialState = {
	names: {boyNames: InternationalNames.UnitedStates.boyNames, girlNames: InternationalNames.UnitedStates.girlNames},
	country: 'UnitedStates',
	likedNames: [],
	dislikedNames: [],
	lastInteractedId: {boy: 0, girl: 100},
	previousIDState: {UnitedStates: {boy: 0, girl: 100}, EnglandAndWales: {boy: 200, girl: 300}}
};

export default (state: NameState = initialState, action: any) => {
	let nextId
	switch (action.type) {
		case LIKE_NAME:
			let likedName :any
			if(action.gender === 'girl'){
				likedName = state.names.girlNames.find((name :Name) => name.id === action.nameID)
				nextId = {boy: state.lastInteractedId.boy, girl: action.nameID}
			} else {
				likedName = state.names.boyNames.find((name :Name) => name.id === action.nameID)
				nextId = {boy: action.nameID, girl: state.lastInteractedId.girl}
			}
			return {
				...state,
				likedNames: state.likedNames.concat(likedName),
				lastInteractedId: nextId
			};
		case DISLIKE_NAME:
			let dislikedName :any
			if(action.gender === 'girl'){
				dislikedName = state.names.girlNames.find((name :Name) => name.id === action.nameID)
				nextId = {boy: state.lastInteractedId.boy, girl: action.nameID}
			} else {
				dislikedName = state.names.boyNames.find((name :Name) => name.id === action.nameID)
				nextId = {boy: action.nameID, girl: state.lastInteractedId.girl}
			}
			return {
				...state,
				dislikedNames: state.likedNames.concat(dislikedName),
				lastInteractedId: nextId
			};
		case CHANGE_COUNTRY: 

			let nextNames = InternationalNames.EnglandAndWales;
			let nextIDState
			let nextPreviousIdState = {...state.previousIDState, [state.country]: state.lastInteractedId} 
				switch (action.country) {
					case "UnitedStates":
						nextNames = InternationalNames.UnitedStates
						nextIDState = state.previousIDState.UnitedStates 
						break;
					case "EnglandAndWales":
						nextNames = InternationalNames.EnglandAndWales
						nextIDState = state.previousIDState.EnglandAndWales
						break;
					default:
						nextNames = InternationalNames.UnitedStates
						break;
				}
			return {
				...state,
				names: {boyNames: nextNames.boyNames, girlNames: nextNames.girlNames},
				country: action.country,
				lastInteractedId: nextIDState,
				previousIDState: nextPreviousIdState
			};
		default:
			return state;
	}
};
