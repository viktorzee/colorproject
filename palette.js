import React, { Component } from 'react'
import ColorBox from './colorbox'
import './palette.css'

class Palette extends Component {
    render() {
        console.log(this.props)
        const colorBoxes = this.props.palette.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ))
        return (
            <div className='Palette'>
                <h1 className='Palette-colors'>Color Palette</h1>
                {colorBoxes}
            </div>
        )
    }
}

export default Palette