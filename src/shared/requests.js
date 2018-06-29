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
    }
}






// export const autenticarFuncionario = (placeConta, login, senha) => {
//     return Axios.post(`/funcionarios/autenticar`, {
//         login,
//         senha,
//         placeConta
//     })
// }
// export const getPlaceInfoByFuncionarioId = (funcionarioId) => {
//     return Axios.get(`/funcionarios/${funcionarioId}/place/info`)
// }
// export const getPlaceInfoById = (placeId) => {
//     return Axios.get(`/places/${placeId}/info`)
// }
// export const getPlaceCategorias = (placeId) => {
//     return Axios.get(`/produtoCategorias/place/${placeId}`)
// }
// export const getPlaceProdutos = (placeId) => {
//     return Axios.get(`/produtos/place/${placeId}`)
// }
// export const getPlaceProdutosByCategoriaId = (placeId, categoriaId) => {
//     return Axios.get(`/produtos/place/${placeId}/produtoCategoria/${categoriaId}`)
// }
// export const getPlaceProdutosInPromocao = (placeId) => {
//     return Axios.get(`/produtos/place/${placeId}/promocao`)
// }
// export const validaToken = (token) => {
//     return Axios.get(`/funcionarios/token`, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
// }
// export const getPlaceByConta = (conta) => {
//     return Axios.get(`/places/conta/${conta}`)
// }
// export const getPlaceByContaLogin = (conta) => {
//     return Axios.get(`/places/conta-login/${conta}`)
// }
// export const alterPrecoProdutoLote = (placeId, ids, preco) => {
//     return Axios.put(`/produtos/preco-lote`, {
//         placeId,
//         produtoIds: ids,
//         preco
//     })
// }
// export const alterStatusProdutoLote = (placeId, ids, status) => {
//     return Axios.put(`/produtos/status-lote`, {
//         placeId,
//         produtoIds: ids,
//         status
//     })
// }

export default Requests