import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label} </label>
            <div style={{ display:'-webkit-box' }}><span>{props.span}</span><input {...props.input} className='form-control'
                min={props.min}
                max={props.max}
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type} /><span>{props.percent}</span>
            </div>
        </div>
    </Grid>
)