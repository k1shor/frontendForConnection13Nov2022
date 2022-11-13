import React, { useContext } from 'react'
import ComponentA from './ComponentA'
import { GlobalContext } from './GlobalContext'

const Display = () => {
    let msg = useContext(GlobalContext)

  return (
    <>
        <ComponentA name="Ram" address="kathmandu" phone="9874125632"/>
        <ComponentA name="Shyam" address="pokhara" phone="9874125632"/>
        <ComponentA name="Hari" address="lumbini" phone="9874125632"/>
    </>
  )
}

export default Display