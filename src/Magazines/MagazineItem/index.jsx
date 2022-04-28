import React from 'react'
import './index.css'

export default function MagazineItem(props) {
  return (
    <div className={props.border + ' ' + 'magazine-item'}>
      <img src={props.link} alt="magazine-item" />
    </div>
  )
}
