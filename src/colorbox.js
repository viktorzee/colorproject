import React, { Component } from 'react'

class ColorBox extends Component{
    render() {
        return (
            <div style={{background: this.props.background}} className='ColorBox'>
                <span>MORE</span>
            </div>
        )
    }
}
export default ColorBox