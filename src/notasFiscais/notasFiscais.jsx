import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Axios from 'axios'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import Form from './notaFiscalForm'

import { create, remove, calcularNf, init, showContent, getNota } from './notasFiscaisActionCreators'


const baseURL = 'http://localhost:3003/api/'

class NotasFiscais extends Component {

    componentWillMount() {
        const { init, getNota } = this.props
        init()
    }

    render() {
        const { nf, showContent, calcularNf } = this.props
        console.log(nf)
        if (nf && nf.length === 1) {
            calcularNf()
            showContent('tabDelete', nf[0])
            
        }
        return (
            <div>
                <ContentHeader title='Notas Fiscais' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Exibir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} submitLabel='Incluir' submitLabel='Incluir' submitClass='primary' />
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
const mapStateToProps = state => ({
    nf: state.notaFiscal.nf
})
const mapDispatchToProps = dispatch => bindActionCreators({ create, calcularNf, remove, init, showContent, getNota }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NotasFiscais)


