const INITIAL_STATE = {nf: [{
    IcmsDestino: 1,
    IcmsOrigem: 2,
    Ipi: 1,
    descRecebidos: 0,
    frete: 20,
    numeroNF: 123421,
    outrasDespesas: 0,
    seguroMercadoria: 41,
    totalNotaFiscal: 120}
]}

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