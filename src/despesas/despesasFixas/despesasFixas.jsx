import React, { Component } from 'react'
// import { reduxForm, Field, formValueSelector } from 'redux-form'
// import labelAndInput from '../common/form/labelAndInput'
import { init, create } from './despesasFixasActionCreators'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Form from './despesaFixaForm'
import { selectTab, showTabs } from './../../common/tab/tabActionsCreators'
import List from './despesasFixasList'
import Content from '../../common/template/content'
import ContentHeader from '../../common/template/contentHeader'
import Tabs from '../../common/tab/tabs'
import TabsContent from '../../common/tab/tabsContent'
import TabsHeader from '../../common/tab/tabsHeader'
import TabHeader from '../../common/tab/tabHeader'
import TabContent from '../../common/tab/tabContent'




class despesasFixas extends Component {
    componentWillMount() {
        const { init } = this.props
        init()
    }

    render() {
        const { create, init } = this.props
        return (
            <div>
                <ContentHeader title='Despesas Fixas' />
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
                            {/*<TabContent id='tabDelete'>
                                <Form readOnly={true} onSubmit={this.props.remove} submitLabel='Excluir'
                                    submitClass='danger' />
                            </TabContent> */}
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>)


    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ create, init, selectTab, showTabs }, dispatch)
// const despesasFixas = reduxForm({ form: 'despesasFixas', destroyOnUnmount: false })(despesasFixas)
// const selector = formValueSelector('despesasFixas')
const mapStateToProps = state => ({
    // list: state.despesasFixas.list 
})

export default connect(mapStateToProps, mapDispatchToProps)(despesasFixas)