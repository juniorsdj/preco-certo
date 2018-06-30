import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getDespesas, getSum, showContent, remove } from './despesasVariaveisActionCreators'
import {percentLabel} from './../../helpers/FnUtil'

class despesasVariaveisList extends Component {


    componentWillMount() {
        this.props.getDespesas()

    }

    


    calcular(list){
        return list.map(df =>{
            df.total = Object.keys(df).map((key) => {
                if(key === '_id' || key === 'mes' || key ==='ano') return 0
                return df[key];
              }).reduce((total, davez)=>{
                  return total+davez
              })
            return df
        })
    }
    renderRows() {
        const {list} = this.props
        return this.calcular(list).map((dv, index) => (
            <tr key={index}>
                <td>{dv.mes}</td>
                <td>{dv.ano}</td>
                <td>{(+dv.total)}%</td>
                <td> 
                    <button className='btn btn-danger' onClick={() => this.props.remove(dv)}> <i className='fa fa-trash'></i></button></td>

            </tr>
        ))
    }

    render() {
        const {list, getSum} = this.props
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>  
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Porcentagem</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                        {list ? getSum() : null}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = state => ({ 
    list: state.despesas.despesasVariaveis
})
const mapDispatchToProps = dispatch => bindActionCreators({ getDespesas, getSum, showContent, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(despesasVariaveisList)