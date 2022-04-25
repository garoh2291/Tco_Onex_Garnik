import React from 'react'
import '../styles/smart_services_section.css'
import HeadStars from './head_stars'
import SmartServicesHead from './smart_services_head'

export default function SmartServicesSection() {
  return (
      <div className='smart_services'>
      <HeadStars type = 'small' />
      <SmartServicesHead />
      </div>
  )
}
