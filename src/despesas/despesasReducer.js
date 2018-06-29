const INITIAL_STATE = {
    despesasVariaveis:[],
    despesasFixas:[],
    despesasFixasMedia: 0,
    despesasVariaveisMedia: 0,
    despesasFixasSum: [],
    despesasVariaveisSum: [],
}

export default (state = INITIAL_STATE, action )=>{
    switch(action.type){
        case "DESPESAS_FIXAS_FETECHED":
            return {...state, despesasFixas: action.payload.data }
        case "DESPESAS_FIXAS_MEDIA_FETECHED":
            return {...state, despesasFixasMedia: action.payload }
        case "DESPESAS_VARIAVEIS_MEDIA_FETECHED":
            return {...state, despesasVariaveisMedia: action.payload }
        case "DESPESAS_FIXAS_SUM_FETECHED":
            return {...state, despesasFixasSum: action.payload.data }
        case "DESPESAS_VARIAVEIS_FETECHED":
            return {...state, despesasVariaveis: action.payload.data }
        case "DESPESAS_VARIAVEIS_SUM_FETECHED":
            return {...state, despesasVariaveisSum: action.payload.data }
        default :
            return state
    }
}