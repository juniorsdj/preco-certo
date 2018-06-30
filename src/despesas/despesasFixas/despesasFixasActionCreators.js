import Axios from 'axios'
import {
    toastr
} from 'react-redux-toastr'
import {
    reset as resetForm,
    initialize
} from 'redux-form'
import {
    showTabs,
    selectTab
} from '../../common/tab/tabActionsCreators'
import requests from './../../shared/requests'

const INITIAL_VALUES = []

export function getDespesas() {
    const request = requests.despesa.getDespesaFixa()
    return [{
            type: "DESPESAS_FIXAS_FETECHED",
            payload: request
        },
    ]
}
export function getSum() {
    return (dispatch, state) => {
        const desp = [...state().despesas.despesasFixas]
        let sum = 0
        desp.map(d => {
            sum = sum + d.total
        })
        
        dispatch({
            type: "DESPESAS_FIXAS_SUM_FETECHED",
            payload: sum
        })
    }
}
export function create(values) {
    values.aguaLuz = +values.aguaLuz
    values.honorarios = +values.honorarios
    values.manutVeicular = +values.manutVeicular
    values.marketing = +values.marketing
    values.matConsumo = +values.matConsumo
    values.multas = +values.multas
    values.salarios = +values.salarios
    values.seguros = +values.seguros
    values.total = +values.total
    values.outros = +values.outros
    return dispatch => {
        requests.despesa.setDespesaFixa(values).then(resp => {
            toastr.success('Sucesso! Operação realizada com sucesso.')
            dispatch(init())

        }).catch(e => {
            toastr.error('Erro, tente novamente')
        })
    }
}


export function update(values) {
    return dispatch => {
        Axios['put'](`${base_URL}/${values._id}`, values).then(resp => {
            toastr.success('Sucesso! Operação realizada com sucesso.')
            dispatch(init())

        }).catch(e => {
            toastr.error('Erro, tente novamente')
        })
    }
}

export function remove(values) {
    return dispatch => {
        requests.despesa.deleteDespesaFixa(values).then(resp => {
            toastr.success('Sucesso! Operação realizada com sucesso.')
            dispatch(init())

        }).catch(e => {
            toastr.error('Erro, tente novamente')
        })
    }
}

export function showContent(idTab, despesasFixas) {
    return [
        showTabs(idTab),
        selectTab(idTab),
        initialize('despesasFixasForm', despesasFixas)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getDespesas(),
        initialize('despesasFixasForm', INITIAL_VALUES)
    ]
}