import {UsersType, UserType} from "../HW8";

type ActionsType = {
    type:'sort' | 'filterAge'
    payload:'up' | 'down' | number
}


export const homeWorkReducer = (state: UsersType, action: ActionsType): UsersType => {
    switch (action.type) {
        case 'sort': {
            debugger
            let stateCopy = state.map((st: UserType) => ({...st}))
            if(action.payload==='up'){

                stateCopy.sort((a: UserType, b: UserType) => a.age < b.age ? 1 : -2)
            }else if(action.payload==='down'){

                stateCopy.sort((a: UserType, b: UserType) => a.age > b.age ? 1 : -2)
            }
            return stateCopy
        }
        case 'filterAge': {
            return state.filter((f: UserType) => f.age >= action.payload)
        }
        default:
            return state
    }
}