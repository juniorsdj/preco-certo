const INITIAL_STATE = {
    alqSuperSimples : 0,
    
}

export default (state = INITIAL_STATE, action )=>{
    switch(action.type){
        case "ALQ_FETECHED":
            return {...state, alqSuperSimples: action.payload}
        default :
            return state
    }
}