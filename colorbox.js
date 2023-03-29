import React, { Component } from 'react'
import './colorbox.css'

class ColorBox extends Component{
    handleCopyClick = (event) => {
        navigator.clipboard.writeText(this.props.background)
            .then(() => {
                console.log('Color copied to clipboard:', this.props.background)
            })
            .catch((error) => {
                console.error('Failed to copy color to clipboard:', error)
            })
    }

    render() {
        const {name,background} = this.props
        return (
            <div style={{background: background}} name={name} className='ColorBox'>
               <div className='copy-container' onClick={this.handleCopyClick}>
                <div className='box-content'>
                    <span>{name}</span>
                </div>
                <button className='copy-button' >Copy</button>
               </div>
               {/* <span className='see-more'>More</span> */}
            </div>
        )
    }
}

export default ColorBox