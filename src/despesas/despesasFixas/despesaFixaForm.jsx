import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import labelAndInput from '../../common/form/labelAndInput'
import { init } from './despesasFixasActionCreators'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class despesaFixaForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (

            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>

                    <Field type='Number' name='mes' min='1' max='12' label='Mês' readOnly={readOnly} cols='12 4' placeholder='entre 1 e 12' component={labelAndInput} />
                    <Field type='Number' name='ano' min='2010' label='Ano' readOnly={readOnly} cols='12 4' placeholder='acima de 2010' component={labelAndInput} />
                    <Field type='Number' name='salarios' min='0' span='R$' label='Salários' readOnly={readOnly} cols='12 4' placeholder='Desp com salários' component={labelAndInput} />
                    <Field name='multas' span='R$' min='0' label='Multas + Despesas recisórias' readOnly={readOnly} cols='12 4' type='Number' placeholder='valor de multas' component={labelAndInput} />
                    <Field min='0' name='aguaLuz' span='R$' label='Água/Luz e Telefone' readOnly={readOnly} cols='12 4' type='Number' placeholder='Valor total das desp' component={labelAndInput} />
                    <Field name='honorarios' min='0' label='Honorários' span='R$' readOnly={readOnly} cols='12 4' type='Number' component={labelAndInput} />
                    <Field name='manutVeicular' min='0' label='Custo de Manutenção de Veículos' span='R$' readOnly={readOnly} cols='12 4' type='Number' placeholder='valor do custo' component={labelAndInput} />
                    <Field name='matConsumo' min='0' label='Material de Consumo/Expediente' span='R$' readOnly={readOnly} cols='12 4' type='Number' component={labelAndInput} />
                    <Field name='seguros' label='Seguros' min='0' readOnly={readOnly} cols='12 4' span='R$' type='Number' placeholder='Valor mensal' component={labelAndInput} />
                    <Field name='marketing' span='R$' min='0' label='Marketing' readOnly={readOnly} cols='12 4' type='Number' placeholder='Despesas dos produtos' component={labelAndInput} />
                    <Field name='outros' span='R$' min='0' label='Outros custos' readOnly={readOnly} cols='12 4' type='Number' placeholder='não listados acima' component={labelAndInput} />

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
const DespesaFixaForm = reduxForm({ form: 'despesaFixaForm', destroyOnUnmount: false })(despesaFixaForm)
const selector = formValueSelector('despesaFixaForm')
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DespesaFixaForm)