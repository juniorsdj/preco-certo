import Axios from 'axios'

const URL_API = "https://pas-ediberto.herokuapp.com"

const Requests = {
    faturamento: {
         getFaturamentos:() => {
            return  Axios.get(`${URL_API}/despesa/faturamento`)
        },
         setFaturamento: faturamento => {
            return  Axios.post(`${URL_API}/despesa/faturamento`, faturamento)
        },
        deleteFaturamento: _id =>{
            return Axios.delete(`${URL_API}/despesa/faturamento/${_id}`)
        },
    },
    despesa:{
        getDespesaFixa:() => {
            return  Axios.get(`${URL_API}/despesa/despesaFixa`)
        },
         setDespesaFixa: despesaFixa => {
            return  Axios.post(`${URL_API}/despesa/despesaFixa`, despesaFixa)
        },
        deleteDespesaFixa: _id =>{
            return Axios.delete(`${URL_API}/despesa/despesaFixa/${_id}`)
        },
        getDespesaVariavel:() => {
            return  Axios.get(`${URL_API}/despesa/despesaVariavel`)
        },
         setDespesaVariavel: despesaVariavel => {
            return  Axios.post(`${URL_API}/despesa/despesaVariavel`, despesaVariavel)
        },
        deleteDespesaVariavel: _id =>{
            return Axios.delete(`${URL_API}/despesa/despesaVariavel/${_id}`)
        },
    },
    notaFiscal:{
        getNotaFiscal:() => {
            return  Axios.get(`${URL_API}/despesa/novaNotaFiscal`)
        },
         setNotaFiscal: notaFiscal => {
            return  Axios.post(`${URL_API}/despesa/novaNotaFiscal`, notaFiscal)
        },
        deleteNotaFiscal: _id =>{
            return Axios.delete(`${URL_API}/despesa/deleteNotaFiscal/${_id}`)
        },  
    }
}

export default Requests