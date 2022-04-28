import React from 'react'
import { magazineSources } from '../data/data'
import './index.css'
import MagazineItem from './MagazineItem'

export default function MagazineWrapper() {
  return (
    <div className='main'>
      {magazineSources.map((item)=>(
        <MagazineItem link = {item.link} border = {item.style} />
      ))}
      
    </div>
  )
}
