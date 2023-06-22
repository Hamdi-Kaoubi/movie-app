import { ADD_MOVIE, DELETE_MOVIE } from "../ActionTypes/MovieTypes"

export const delete_movie = (name) => {
    return {type:DELETE_MOVIE, payload:name}
}
export const add_movie = (data) => {
    return {type:ADD_MOVIE, payload:data}
}