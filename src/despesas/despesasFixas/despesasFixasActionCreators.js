import Axios from 'axios'
import {  toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import { showTabs, selectTab} from '../../common/tab/tabActionsCreators'
import requests from './../../shared/requests'

const INITIAL_VALUES =[]

export function getDespesas() {
    const request = requests.despesa.getDespesaFixa()
    return {
        type: "DESPESAS_FIXAS_FETECHED",
        payload: request
    }
}
export function getSum() {
    return {
        type: "DESPESAS_FIXAS_SUM_FETECHED",
        payload: 2
    }
}

export function create(values) {
    return dispatch => {
        requests.despesa.setDespesaFixa(values).then(resp => {
            toastr.success('Sucesso! Operação realizada com sucesso.')
            dispatch(init())

        }).catch(e => {
            toastr.error('Erro, tente novamente')
        })
    }
}


export function update(values){
    return dispatch => {
        Axios['put'](`${base_URL}/${values._id}`, values).then(resp => {
            toastr.success('Sucesso! Operação realizada com sucesso.')
            dispatch(init())

        }).catch(e => {
            toastr.error('Erro, tente novamente')
        })
    }
}

export function remove (values){
    return dispatch => {
        requests.despesa.deleteDespesaFixa(values).then(resp => {
            toastr.success('Sucesso! Operação realizada com sucesso.')
            dispatch(init())

        }).catch(e => {
            toastr.error('Erro, tente novamente')
        })
    }
}

export function showContent(idTab, despesasFixas){
    return [
        showTabs(idTab),
        selectTab(idTab),
        initialize('despesasFixasForm', despesasFixas)
    ]
}

export function init(){
    return [
        showTabs('tabList','tabCreate'),
        selectTab('tabList'),
        getDespesas(),
        initialize('despesasFixasForm', INITIAL_VALUES)
    ]
}