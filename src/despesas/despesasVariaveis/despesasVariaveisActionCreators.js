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

const base_URL = 'http://localhost:3003/api/despesasVariaveis'

const INITIAL_VALUES = {}

export function getDespesas() {
    const request = requests.despesa.getDespesaVariavel()
    return {
        type: "DESPESAS_VARIAVEIS_FETECHED",
        payload: request
    }
}


export function create(values) {
    values.comissao = +values.comissao
    values.cartao = +values.cartao
    values.descConceder = +values.descConceder
    values.total = +values.total
    values.outrosCustos = +values.outrosCustos
    return dispatch => {
        requests.despesa.setDespesaVariavel(values).then(resp => {
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

export function getSum() {
    return (dispatch, state) => {
        const desp = [...state().despesas.despesasVariaveis]
        let sum = 0
        desp.map(d => {
            sum = sum + d.total
        })

        dispatch({
            type: "DESPESAS_VARIAVEIS_SUM_FETECHED",
            payload: sum
        })
    }
}
export function remove(values) {
    return dispatch => {
        requests.despesa.deleteDespesaVariavel(values._id).then(resp => {
            console.log('entrou')
            toastr.success('Sucesso! Operação realizada com sucesso.')
            dispatch(init())

        }).catch(e => {
            toastr.error('Erro, tente novamente')
        })
    }
}

export function showContent(idTab, billingCycle) {
    return [
        showTabs(idTab),
        selectTab(idTab),
        initialize('despesaVariavelForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getDespesas(),
        initialize('despesaVariavelForm', INITIAL_VALUES)
    ]
}