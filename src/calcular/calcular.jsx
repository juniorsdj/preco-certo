import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import Label from './../common/form/labelAndInput'
import Input from './../common/form/input'

import { getMedia, getList } from './../faturamento/faturamentoActionCreators'
import { setAlqMA, setDados,calcularPosNota } from './calcularActionCreators'

import Axios from 'axios'

class Calcular extends Component {
    constructor() {
        super();
        this.state = {
            precoUn: 0,
            tribut: '',
            lucroDesej: 0,
            precoVendaNormal: 0,
            precoVendaSugerido: 0,
            precoVendaConcorrente: 0,
            exibirResult: false,
            precoConcorrente: 0,
            precoSugerido: 0,
            alqMA: 0,
        }
    }


    componentWillMount() {
        const { getList, getMedia, list } = this.props
        getMedia(list)
        getList()
        
    }
    calcular() {
        const { precoUn, tribut, lucroDesej, alqMA } = this.state
        const {setDados} = this.props
        if (!precoUn || !tribut || !lucroDesej || !alqMA) {
            alert('Preencher todos os Campos')
        } else {
            setDados({precoUn, tribut, lucroDesej, alqMA})
            this.setState({ ...this.state, exibirResult: true })
        }
    }
    render() {
        const { exibirResult, precoConcorrente, precoSugerido, alqMA } = this.state
        const { list, setAlqMA, calcularPosNota, calcular } = this.props
        if (list.length < 12) {
            return (
                <div>
                    <ContentHeader title='Calcular' />
                    <Content>
                        {alert("insira no mínimo de 12 meses de faturamento")}
                    </Content>
                </div>
            )
        }
        return (
            <div>
                <ContentHeader title='Calcular' />
                <Content>
                    <Row>
                        <Grid cols='5'>
                            <label style={{ paddingLeft: '15px', fontWeight: 'bold', textAlign: 'center' }}>
                                Preço UN</label>
                                <br/>
                            <label style={{ paddingLeft: '15px', fontWeight: 'bold', textAlign: 'center' }}>
                                Alíquota da margem agregada:</label>
                        </Grid>
                        <Grid cols='4'>
                            <span>R$</span><input min='0' name='precoUn' onChange={(event) => this.setState({ ...this.state, precoUn: event.target.value })} label='Preço UN:' type='Number' span='R$' />
                            <input min='0' name='alqMA' onChange={(event) => this.setState({ ...this.state, alqMA: event.target.value })} label=':' type='Number' /><span>%</span>
                        </Grid>
                    </Row>
                    <br />
                    <Row>
                        <Grid cols='4'>
                            <h4 style={{ paddingLeft: '15px', fontWeight: 'bold', textAlign: 'center' }}>
                                Tributação</h4>
                        </Grid>
                        <Grid cols='8'>
                            <form>
                                <input type="radio" name="TB" value="ST" onChange={(event) => this.setState({ ...this.state, tribut: event.target.value })} />
                                <span> Substituição Tributária - ST</span><br />
                                <input type="radio" name="TB" value="DA" onChange={(event) => this.setState({ ...this.state, tribut: event.target.value })} />
                                <span> Diferencial de Alíquota - DA</span><br />
                            </form>
                        </Grid>
                    </Row>
                    <br />
                    <Row>
                        <Grid cols='5'>
                            <label style={{ paddingLeft: '15px', fontWeight: 'bold', textAlign: 'center' }} >Lucro desejado</label>
                        </Grid>
                        <Grid cols='7'>
                            <input id='lucroDesejado' onChange={(event) => this.setState({ ...this.state, lucroDesej: event.target.value })} type='Number' min='0' /><span>%</span>
                        </Grid>
                    </Row>
                    <Row>
                        <Grid cols='8'></Grid>
                        <Grid cols='4'>
                            <button style={{ marginTop: 2 + 'em' }} type='button' onClick={() => ( this.calcular(),this.props.calcularPosNota())} className='primary'> Calcular</button>
                        </Grid>
                    </Row>
                    {(exibirResult) && (
                        <div>
                            <br />
                            <br />
                            <Row>
                                <Grid cols='6'>
                                    <label>Preço de venda normal:</label>
                                </Grid>
                                <Grid cols='4'>
                                    <span>R$</span><input readOnly='true' value={calcular.precoVenda} />
                                </Grid>

                            </Row>
                        </div>)}

                    {/* {(exibirResult) && (
                        <div>
                            <br />
                            <br />
                            <Row>
                                <Grid cols='6'>
                                    <label>Preço de venda normal:</label>
                                </Grid>
                                <Grid cols='4'>
                                    <span>R$</span><input readOnly='true' value={`Calculado`} />
                                </Grid>
                            </Row>
                            <br />
                            <Row>
                                <Grid cols='6'>
                                    <label>Preço de venda do concorrente:</label>
                                </Grid>
                                <Grid cols='4'>
                                    <span>R$</span>
                                    <input id='precoConcorrente' placeholder='Informe o preço do concorrente' onChange={(event) => this.setState({ ...this.state, precoConcorrente: event.target.value })} type='Number' min='0' />
                                </Grid>
                            </Row>
                            <br />
                            {(precoConcorrente) && (
                                <div>
                                    <Row>
                                        <Grid cols='6'>
                                            <label>Margem de lucro do concorrente:</label>
                                        </Grid>
                                        <Grid cols='4'>
                                            <input readOnly='true' value={`Calculado`} /><span>%</span>
                                        </Grid>
                                    </Row>

                                    <br />
                                    <Row>
                                        <Grid cols='6'>
                                            <label>Sugerir Preço de venda:</label>
                                        </Grid>
                                        <Grid cols='4'>
                                            <span>R$</span><input id='precoSugerido' placeholder='Sugira o preço' onChange={(event) => this.setState({ ...this.state, precoSugerido: event.target.value })} type='Number' min='0' />
                                        </Grid>
                                    </Row>
                                    <br />
                                    {(precoSugerido) && (
                                        <Row>
                                            <Grid cols='6'>
                                                <label>Margem de lucro com o preço sugerido:</label>
                                            </Grid>
                                            <Grid cols='4'>
                                                <input readOnly='true' value={`Calculado`} /><span>%</span>
                                            </Grid>
                                        </Row>)}
                                </div>
                            )}
                        </div>
                    )
                    } */}
                </Content>
            </div>)
    }
}


const mapStateToProps = state => ({
    list: state.faturamento.list,
    calcular: state.calcular
})
const mapDispatchToProps = dispatch => bindActionCreators({ getMedia, getList, setAlqMA, setDados, calcularPosNota }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Calcular)

