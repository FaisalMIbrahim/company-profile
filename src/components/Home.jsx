import React from 'react'
import { Formulir } from './Formulir'
import { Layanan } from './Layanan'
import { Section } from './Section'
import { Section2 } from './Section2'

export const Home = () => {
  return (
    <div>
        <Section/>
        <Formulir/>
        <Section2/>
        <Layanan/>
    </div>
  )
}
