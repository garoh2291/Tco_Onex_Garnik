import React from 'react'
import '../styles/use_helper.css'
import HeadStars from './head_stars'
import ImageHelper from './image_helper'
import { TextHelper } from './text_helper'


export function UseHelper() {
  return (
    <div className='how-to-use'>
      <HeadStars type = 'small' />
      <TextHelper />
      <ImageHelper />
    </div>
  )
}

