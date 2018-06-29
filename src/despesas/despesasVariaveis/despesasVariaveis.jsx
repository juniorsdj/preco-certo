import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Axios from 'axios'

import Content from '../../common/template/content'
import ContentHeader from '../../common/template/contentHeader'
import Tabs from '../../common/tab/tabs'
import TabsContent from '../../common/tab/tabsContent'
import TabsHeader from '../../common/tab/tabsHeader'
import TabHeader from '../../common/tab/tabHeader'
import TabContent from '../../common/tab/tabContent'
import List from './despesasVariaveisList'
import Form from './despesaVariavelForm'

import { create, update, remove, init } from './despesasVariaveisActionCreators'


const baseURL = 'http://localhost:3003/api/'

class despesasVariaveis extends Component {

    componentWillMount() {
        this.props.init()
    }
    render() {

        return (
            <div>
                <ContentHeader title='Despesas Variáveis' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} submitLabel='Incluir' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <h1>update</h1>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <h1>delete</h1>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>)
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ create, update, remove, init }, dispatch)
export default connect(null, mapDispatchToProps)(despesasVariaveis)


