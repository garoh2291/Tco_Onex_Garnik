import React, { Component } from 'react'
import { MirrorInput } from '../components/MirrorInput'
import { MirrorContent } from '../components/MirrorTextContent'
import './styles.css'

export class MirrorSection extends Component {
    state = {
        textField: "",
    }
    mirrorFunction = (e)=>{
        const {value} = e.target;
        this.setState({textField:value})
    }

  render() {
      const {textField} = this.state;
    return (
      <div className='mirror-section'>
          <MirrorInput onChange = {this.mirrorFunction} />
          <MirrorContent textContent = {textField} />
      </div>
    )
  }
}
