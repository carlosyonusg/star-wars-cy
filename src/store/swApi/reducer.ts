import { CHARACTERS_ASYNC } from "./action-types";


const initialState = {
    characters: []
    }

export default (state = initialState, { type, payload }: any) => {
    switch(type) {
        case CHARACTERS_ASYNC:
        return { ...payload }

        default:
        return state;
    }
}
