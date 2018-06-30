import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {moneyLabel} from './../../helpers/FnUtil'

import { getDespesas, showContent, remove, getSum } from './despesasFixasActionCreators'

class despesasFixasList extends Component {


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
        const {list, getSum} = this.props
       
        return this.calcular(list).map((despFixa, index) => (
            <tr key={index}>
                <td>{despFixa.mes}</td>
                <td>{despFixa.ano}</td>
                <td>R$ {moneyLabel(despFixa.total)}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => this.props.remove(despFixa._id)}> <i className='fa fa-trash'></i></button></td>

            </tr>
        )
    )

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
                            <th>Despesas Totais</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                        { list ? getSum() : null}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    list: state.despesas.despesasFixas
})
const mapDispatchToProps = dispatch => bindActionCreators({ getDespesas, getSum, showContent, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(despesasFixasList)