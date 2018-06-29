import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {moneyLabel} from './../helpers/FnUtil'

import { getList, init, remove } from './faturamentoActionCreators'

class faturamentoList extends Component {


    componentWillMount() {
        this.props.getList()

    }

    renderRows() {
        const list = this.props.list
        return list.map(fat => (
            <tr key={fat._id}>

                <td>{fat.mes}</td>
                <td>{fat.ano}</td>
                <td>{moneyLabel(fat.valor)}</td>
                <td><button className='btn btn-danger' onClick={() => this.props.remove(fat)}> <i className='fa fa-trash'></i></button></td>

            </tr>
        ))
    }

    render() {
        const {list} = this.props
      
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Valor</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    list: state.faturamento.list
})
const mapDispatchToProps = dispatch => bindActionCreators({ getList, init, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(faturamentoList)
