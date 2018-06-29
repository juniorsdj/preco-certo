const INITIAL_STATE = {
    list : [],
    media: 0    
}

export default (state = INITIAL_STATE, action )=>{
    switch(action.type){
        case "LIST_FATURAMENTO_FETECHED":
            return {...state, list: action.payload.data }
        case "MEDIA_FATURAMENTO_FETECHED":
            return {...state, media: action.payload }
        default :
            return state
    }
}