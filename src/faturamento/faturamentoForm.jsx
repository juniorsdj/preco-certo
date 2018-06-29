import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import {init, create} from '../faturamento/faturamentoActionCreators'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'



class faturamentoForm extends Component {

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>                    
                    <Field name='mes' min='1' max='12' label='Mês' readOnly={readOnly} cols='12 4' type='Number' placeholder='Informe o mês( 1 a 12)' component={labelAndInput} />
                    <Field name='ano' min='2010' label='Ano' readOnly={readOnly} cols='12 4' type='Number' placeholder='Informe o ano' component={labelAndInput} />
                    <Field name='valor' label='Valor' min='0' span='R$' readOnly={readOnly} cols='12 4' placeholder='Faturamento mensal' component={labelAndInput} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-Primary`}>Incluir    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar    </button>
                </div>
            </form>

        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, create     }, dispatch)
const FaturamentoForm = reduxForm({ form: 'faturamentoForm', destroyOnUnmount: false })(faturamentoForm)
const selector = formValueSelector('faturamentoForm')
const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(FaturamentoForm)