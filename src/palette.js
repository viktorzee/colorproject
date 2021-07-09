import React, { Component } from 'react'
import ColorBox from './colorbox'

class Palette extends Component{
    render() {
        const colorBoxes = this.props.colors.map(color = (
            <ColorBox background={color.color}/>
        ))
        return (
            <div className='Palette'>
                <div className='Color-Palette'>{colorBoxes}</div>
            </div>
        )
    }
}

export default Palette