import { CHARACTERS } from "./action-types"

export const characters = (credentials: any) => {
    return {
        type: CHARACTERS,
        payload: credentials
    }
}
