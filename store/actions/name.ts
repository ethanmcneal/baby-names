import { Name } from "../../types";

export const LIKE_NAME = 'LIKE_NAME'
export const DISLIKE_NAME = 'DISLIKE_NAME'


export const likeName = (name :Name, gender :string) => {
    return {type: LIKE_NAME, name: name, gender: gender};
}

export const dislikeName = (name :Name, gender :string) => {
    return {type: DISLIKE_NAME, name: name, gender: gender};
}