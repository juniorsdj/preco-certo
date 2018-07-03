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
} from '../common/tab/tabActionsCreators'
import requests from './../shared/requests'


const INITIAL_VALUES = {}


export function getNota() {
    const request = requests.notaFiscal.getNotaFiscal()
    return {
        type: "NOTA_FISCAL_FETECHED",
        payload: request
    }
}

export function create(values) {
    console.log(values)
    return dispatch => {
        requests.notaFiscal.setNotaFiscal(values).then(resp => {
            toastr.success('Sucesso! Operação realizada com sucesso.')
            dispatch(init())

        }).catch(e => {
            toastr.error('Erro, tente novamente')
        })
    }
}


export function calcularNf() {
    return (dispatch, state) => {
        const nf = { ...state().notaFiscal.nf[0]
        }
        nf.taxaSeguro = nf.seguroMercadoria/nf.totalNotaFiscal
        nf.taxaFrete = nf.frete/nf.totalNotaFiscal
        nf.difAliquota = (nf.IcmsDestino/100) - (nf.IcmsOrigem/100)
        nf.taxaOutrasDespesas = nf.outrasDespesas/nf.totalNotaFiscal
        nf.taxaDesconto = nf.descRecebidos/nf.totalNotaFiscal
        nf.baseN = +nf.totalNotaFiscal + +nf.seguroMercadoria + +nf.frete + +nf.outrasDespesas - +nf.descRecebidos
        console.log(nf)
        dispatch({
            type: "CALCULAR_NOTA_FISCAL",
            payload: nf
        })
    }
}

export function remove(values) {
    return dispatch => {
        requests.notaFiscal.deleteNotaFiscal(values._id).then(resp => {
            toastr.success('Sucesso! Operação realizada com sucesso.')
            dispatch(init())

        }).catch(e => {
            toastr.error('Erro, tente novamente')
        })
    }
}

export function showContent(idTab, notaFiscal) {
    return [
        showTabs(idTab),
        selectTab(idTab),
        initialize('notaFiscalForm', notaFiscal)
    ]
}

export function init() {
    return [
        getNota(),
        showTabs('tabCreate'),
        selectTab('tabCreate'),
        initialize('notaFiscalForm', INITIAL_VALUES)
    ]
}