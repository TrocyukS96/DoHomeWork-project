const initState = {
phoneColor:'gray',
    textColor:'darkgoldenrod'
};

export const themeReducer = (state:InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-PHONE-COLOR": {
            return {...state, phoneColor: action.phoneColor};
        }
        case "CHANGE-TEXT-COLOR": {
            return {...state, textColor: action.textColor};
        }
        default: return state;
    }
};

//action Creators
export const changePhoneColorAC = (phoneColor:string)=> {
    return {type:"CHANGE-PHONE-COLOR", phoneColor} as const
};
export const changeTextColorAC = (textColor:string)=> {
    return {type:"CHANGE-TEXT-COLOR", textColor} as const
};



//types
type InitStateType = typeof initState
type ChangePhoneColorActionType = ReturnType<typeof changePhoneColorAC>
type ChangeTextColorActionType = ReturnType<typeof changeTextColorAC>
type ActionsType = ChangePhoneColorActionType | ChangeTextColorActionType
