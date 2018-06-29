import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import { init } from './notasFiscaisActionCreators'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class notaFiscalForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='numeroNF' label='Numero da NF' readOnly={readOnly} cols='12 4'  placeholder='Somente Números' type='Number' min='0' component={labelAndInput} />
                    <Field name='totalNotaFiscal' min='0' label='Total da Nota Fiscal' readOnly={readOnly} cols='12 4' type='Number' span='R$' placeholder='Informe o valor da NF' component={labelAndInput} />
                    <Field name='seguroMercadoria' min='0' span='R$' label='Seguro da Mercadoria' readOnly={readOnly} cols='12 4' type='Number' placeholder='Valor total do seguro' component={labelAndInput} />
                    <Field name='frete' span='R$' label='Frete' min='0' readOnly={readOnly} cols='12 4' type='Number' placeholder='Valor total do frete' component={labelAndInput} />
                    <Field name='IcmsOrigem' min='0' label='Alíquota do ICMS de origem' percent='%' readOnly={readOnly} cols='12 4' type='Number' placeholder='porcentagem do ICMS de origem' component={labelAndInput} />
                    <Field name='IcmsDestino' min='0' label='Alíquota do ICMS de destino' percent='%' readOnly={readOnly} cols='12 4' type='Number' placeholder='porcentagem do ICMS de destino' component={labelAndInput} />
                    <Field name='Ipi' min='0' label='Alíquota do IPI' readOnly={readOnly} cols='12 4' percent='%' type='Number' placeholder='Valor da Alíquota do IPI' component={labelAndInput} />
                    <Field name='outrasDespesas' min='0'  span='R$' label='Outras despesas com a mercadoria' readOnly={readOnly} cols='12 4' type='Number'   placeholder='Despesas dos produtos' component={labelAndInput} />
                    <Field name='descRecebidos' span='R$' min='0' label='Descontos Recebidos' readOnly={readOnly} cols='12 4' type='Number' placeholder='Valor dos descontos' component={labelAndInput} />

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
const NotaFiscalForm = reduxForm({ form: 'notaFiscalForm', destroyOnUnmount: false })(notaFiscalForm)
const selector = formValueSelector('notaFiscalForm')
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(NotaFiscalForm)