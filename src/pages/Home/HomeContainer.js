import React from 'react'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Blog } from './components/Blog'
import '../../assets/styles/Home.css'

export const HomeContainer = () => {
  return (
    <>
      <Hero />
       <Services />
      <div className='Blog'><Blog /></div>
    </>
  )
}
