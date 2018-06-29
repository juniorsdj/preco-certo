import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Faturamento' icon='dashboard' />
        <MenuTree label='Cadastro de Despesas' icon='edit'>
            <MenuItem path='#despesasFixas' label='Despesas Fixas' icon='money' />
            <MenuItem path='#despesasVariaveis' label='Despesas Variáveis' icon='money' />
        </MenuTree>
        <MenuItem path='#notasFiscais' label='Notas Fiscais' icon='file' />
        <MenuItem path='#calcular' label='Calcular' icon='usd' />

    </ul>

)