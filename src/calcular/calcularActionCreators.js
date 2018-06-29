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


export function getAliquota(sum) {
    console.log(sum)
    return dispatch => {
        let alq = 0
       if(sum <= 180000){
           alq = 4
       }else if(sum <= 360000){
           alq = ((sum* 7.3/100)-5940)/sum
       }else if(sum <= 720000){
           alq = ((sum* 9.5/100)-13860)/sum
       }else if(sum <= 1800000){
           alq = ((sum* 10.7/100)-22500)/sum
       }else if(sum <= 3600000){
           alq = ((sum* 14.3/100)-87300)/sum
       }else if(sum <= 4800000){
           alq = ((sum* 19/100)-378000)/sum
       }else{
           alq = false
       }
       alq = alq *100
        dispatch({
            type: "ALQ_FETECHED",
            payload: alq
        })
    }
}