import {combineReducers} from 'redux'
import notaFiscalReducer from './../notasFiscais/notaFiscalReducer'
import faturamentoReducer from './../faturamento/faturamentoReducer'
import calcularReducer from './../calcular/calcularReducer'
import despesasReducer from './../despesas/despesasReducer'
import tabReducer from '../common/tab/tabReducer'
import {reducer as formReducer} from 'redux-form' 
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducers = combineReducers({
    tab: tabReducer,
    form: formReducer,
    toastr: toastrReducer,
    notaFiscal: notaFiscalReducer,
    faturamento: faturamentoReducer,
    despesas: despesasReducer,
    calcular: calcularReducer,
})

export default rootReducers  