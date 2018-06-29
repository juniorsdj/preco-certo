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
import {getAliquota} from './../calcular/calcularActionCreators'

const INITIAL_VALUES = {}


export function getList() {
    const request = requests.faturamento.getFaturamentos()
    return {
        type: "LIST_FATURAMENTO_FETECHED",
        payload: request
    }
}
export function getMedia(values) {
    return dispatch => {
        let sum = 0
        if (values.length > 11) {
            for (let i = 0; i < 12; i++) {
                sum = sum + (+values[i].valor)
            }
            dispatch(getAliquota(sum))
            const media = sum / 12
            dispatch({
                type: "MEDIA_FATURAMENTO_FETECHED",
                payload: media
            })
        }
    }
}
export function create(values) {
    return dispatch => {
        dispatch(getList())
        requests.faturamento.setFaturamento(values).then(resp => {
            console.log(typeof(resp.data))
            if (typeof(resp.data) === 'string') {
                toastr.error('Erro, já existe esse mês cadastrado')
                dispatch(init())
            }
            toastr.success('Sucesso! Operação realizada com sucesso.')
            dispatch(init())

        }).catch(e => {
            console.log(e)
            toastr.error('Erro, tente novamente')
        })
    }
}


// export function update(values){
//     return dispatch => {
//         Axios['put'](`${base_URL}/${values._id}`, values).then(resp => {
//             toastr.success('Sucesso! Operação realizada com sucesso.')
//             dispatch(init())

//         }).catch(e => {
//             toastr.error('Erro, tente novamente')
//         })
//     }
// }

export function remove(values) {
    return dispatch => {
        requests.faturamento.deleteFaturamento(values._id).then(resp => {
            toastr.success('Sucesso! Operação realizada com sucesso.')
            dispatch(init())

        }).catch(e => {
            toastr.error('Erro, tente novamente')
        })
    }
}

export function init() {
    return [
        getList(),
        showTabs('tabCreate', 'tabList'),
        selectTab('tabList'),
        initialize('faturamentoForm', INITIAL_VALUES)
    ]
}