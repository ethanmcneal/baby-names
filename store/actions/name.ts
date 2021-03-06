import { Name, StoredNameState } from "../../types";

export const LIKE_NAME = "LIKE_NAME";
export const DISLIKE_NAME = "DISLIKE_NAME";
export const CHANGE_COUNTRY = "CHANGE_COUNTRY";
export const UNLIKE_NAME = "UNLIKE_NAME";
export const LOAD_PREVIOUS_NAME_STATE = "LOAD_PREVIOUS_NAME_STATE";

export const likeName = (nameID: number, gender: string) => {
	return { type: LIKE_NAME, nameID: nameID, gender: gender };
};

export const dislikeName = (nameID: number, gender: string) => {
	return { type: DISLIKE_NAME, nameID: nameID, gender: gender };
};

export const unlikeName = (nameID: number) => {
	return { type: UNLIKE_NAME, nameID };
};

export const changeCountry = (country: string) => {
	return { type: CHANGE_COUNTRY, country: country };
};

export const loadPreviousNameState = (previousNameState: StoredNameState) => {
	return {
		type: LOAD_PREVIOUS_NAME_STATE,
		likedNames: previousNameState.likedNames,
		dislikedNames: previousNameState.dislikedNames,
		lastInteractedId: previousNameState.lastInteractedId,
		previousIDState: previousNameState.previousIDState,
	};
};
