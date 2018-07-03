const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "NOTA_FISCAL_FETECHED":
            return { ...state,
                nf: action.payload.data
            }
        case "CALCULAR_NOTA_FISCAL":
            return { ...state,
                nf: action.payload
            }
        default:
            return state
    }
}