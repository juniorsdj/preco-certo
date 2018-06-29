import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import labelAndInput from '../../common/form/labelAndInput'
import { init } from './despesasVariaveisActionCreators'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class despesaVariavelForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field type='Number' name='mes' min='1' max='12' label='Mês' readOnly={readOnly} cols='12 4' placeholder='entre 1 e 12' component={labelAndInput} />
                    <Field type='Number' name='ano' min='2010' label='Ano' readOnly={readOnly} cols='12 4' placeholder='acima de 2010' component={labelAndInput} />
                    <Field name='comissao' type='Number' min='0' percent='%' label='Comissão sobre as Vendas' readOnly={readOnly} cols='12 4' component={labelAndInput} />
                    <Field name='cartao' percent='%' min='0' label='Despesas com Cartão de Crédito' readOnly={readOnly} cols='12 4' type='Number' component={labelAndInput} />
                    <Field name='descConceder' min='0' percent='%' label='Descontos à Conceder' readOnly={readOnly} cols='12 4' type='Number' placeholder='mensal dos descontos' component={labelAndInput} />
                    <Field name='outrosCustos' min='0' percent='%' label='Outros Custos Variáveis' readOnly={readOnly} cols='12 4' type='Number' component={labelAndInput} />

                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar    </button>
                </div>
            </form>

        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
const DespesaVariavelForm = reduxForm({ form: 'despesaVariavelForm', destroyOnUnmount: false })(despesaVariavelForm)
const selector = formValueSelector('despesaVariavelForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})

export default connect(mapStateToProps, mapDispatchToProps)(DespesaVariavelForm)