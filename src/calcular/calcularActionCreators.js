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

export function setAlqMA(alq) {
    return dispatch => {
        dispatch({
            type: 'ALQMA_FETECHED',
            payload: alq
        })
    }
}
export function setDados(dados) {
    return dispatch => {
        dispatch({
            type: 'DADOS_FETECHED',
            payload: dados
        })
    }
}

export function calcularPosNota(){
    return (dispatch, state) => {
        const calc = {...state().calcular}
        const nf = { ...state().notaFiscal.nf
        }
        nf.baseST = nf.baseN *(1+(calc.alqMA/100))
        nf.icmsSN = nf.baseN *(nf.IcmsOrigem/100)
        nf.icmsST = nf.baseST *(nf.IcmsOrigem/100)
        nf.icmsAgreg = (nf.icmsST/100) - (nf.icmsSN/100)
        nf.taxaAM = (nf.icmsAgreg/100)/nf.totalNotaFiscal

        if(calc.tribut === 'ST'){
            calc.txICMS = nf.icmsAgreg
        }
        else{
           calc.txICMS = (nf.IcmsOrigem/100) - (nf.IcmsDestino/100)
        }
        calc.pa = calc.precoUn*(1+nf.taxaSeguro + nf.taxaFrete + (nf.Ipi/100)+ nf.taxaOutrasDespesas -nf.taxaDesconto + calc.txICMS)
        debugger
        calc.precoVenda = calc.pa/(1-((calc.alqSuperSimples+calc.lucroDesej)/100))

        dispatch({
            type: "CALCULAR_NOTA_FISCAL",
            payload: nf
        })
        dispatch({
            type: "CALCULAR_FETECHED",
            payload: calc
        })
    }
}
export function getAliquota(sum) {
    console.log(sum)
    return dispatch => {
        let alq = 0
        if (sum <= 180000) {
            alq = 4
        } else if (sum <= 360000) {
            alq = ((sum * 7.3 / 100) - 5940) / sum
        } else if (sum <= 720000) {
            alq = ((sum * 9.5 / 100) - 13860) / sum
        } else if (sum <= 1800000) {
            alq = ((sum * 10.7 / 100) - 22500) / sum
        } else if (sum <= 3600000) {
            alq = ((sum * 14.3 / 100) - 87300) / sum
        } else if (sum <= 4800000) {
            alq = ((sum * 19 / 100) - 378000) / sum
        } else {
            alq = false
        }
        if(alq < 1){
        alq = alq * 100
        }
        dispatch({
            type: "ALQ_FETECHED",
            payload: alq
        })
    }
}