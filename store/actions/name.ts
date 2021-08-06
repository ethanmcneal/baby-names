import { Name } from "../../types";

export const LIKE_NAME = 'LIKE_NAME'
export const DISLIKE_NAME = 'DISLIKE_NAME'
export const CHANGE_COUNTRY = 'CHANGE_COUNTRY'


export const likeName = (name :Name) => {
    return {type: LIKE_NAME, name: name};
}

export const dislikeName = (name :Name) => {
    return {type: DISLIKE_NAME, name: name};
}

export const changeCountry = (country :string) => {
    return {type: CHANGE_COUNTRY, country: country}
}