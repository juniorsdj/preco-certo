import React from 'react'
import {Router, Route, Redirect, hashHistory, IndexRoute} from 'react-router'

import App from './app'
import Faturamento from '../faturamento/faturamento'
import Calcular from '../calcular/calcular'
import NotasFiscais from '../notasFiscais/notasFiscais'
import DespesasFixas from '../despesas/despesasFixas/despesasFixas'
import DespesasVariaveis from '../despesas/despesasVariaveis/despesasVariaveis'



export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Faturamento}/>
            <Route path='/notasFiscais' component={NotasFiscais}/>
            <Route path='/despesasFixas' component={DespesasFixas}/>
            <Route path='/despesasVariaveis' component={DespesasVariaveis}/>
            <Route path='/calcular' component={Calcular}/>
           
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)