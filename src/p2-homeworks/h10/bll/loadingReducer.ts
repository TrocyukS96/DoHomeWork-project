const loadingOn = 'LOADING-ON'
const loadingOff = 'LOADING-OFF'

const initialState = {
    isLoading:false
}
type stateType = typeof initialState

type ActionsType = loadingOnAT | loadingOffAT

export const loadingReducer = (state:stateType = initialState, action: ActionsType): stateType => { // fix any
    switch (action.type) {
        case loadingOn:
            return {
                ...state,
                isLoading: true
            }
        case loadingOff:
            return {
                ...state,
                isLoading: false
            }
        default: return state
    }
}

export const loadingOnAC = () => {
    return { type:loadingOn}
}
export const loadingOffAC = () => {
    return { type:loadingOff}
}

type loadingOnAT = ReturnType<typeof loadingOnAC>
type loadingOffAT = ReturnType<typeof loadingOffAC>