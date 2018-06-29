import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import { init, create } from './faturamentoActionCreators'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Form from './faturamentoForm'
import { selectTab, showTabs } from './../common/tab/tabActionsCreators'
import List from './FaturamentoList'
import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'




class faturamento extends Component {
    componentWillMount() {
        const { init } = this.props
        init()
    }

    render() {
        const { create, init } = this.props
        return (
            <div>
                <ContentHeader title='Faturamento' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Exibir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={create} submitLabel='Incluir' submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form readOnly={true} onSubmit={this.props.remove} submitLabel='Excluir'
                                    submitClass='danger' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>)


    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ create, init, selectTab, showTabs }, dispatch)
const Faturamento = reduxForm({ form: 'faturamento', destroyOnUnmount: false })(faturamento)
const selector = formValueSelector('faturamento')
const mapStateToProps = state => ({
    // list: state.faturamento.list 
})

export default connect(mapStateToProps, mapDispatchToProps)(Faturamento)