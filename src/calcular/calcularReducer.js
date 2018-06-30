const INITIAL_STATE = {
    alqSuperSimples: 0,
    alqMA: 0


}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ALQ_FETECHED":
            return { ...state,
                alqSuperSimples: action.payload
            }
        // case "ALQMA_FETECHED":
        //     return { ...state,
        //         alqMA: action.payload
        //     }
        case "DADOS_FETECHED":
            return { ...state,
                alqMA: +action.payload.alqMA,
                precoUn: +action.payload.precoUn,
                tribut: action.payload.tribut,
                lucroDesej: +action.payload.lucroDesej
            }
        
        case "CALCULAR_FETECHED":
            return { ...state,
                txICMS: +action.payload.txICMS,
                pa: + action.payload.pa,
                precoVenda: + action.payload.precoVenda,
            }
        
       
        default:
            return state
    }
}