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
                <div className='Palette-colors'>Palette</div>
                {colorBoxes}
            </div>
        )
    }
}

export default Palette