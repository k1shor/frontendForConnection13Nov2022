import React from 'react'

const ComponentA = ({name,address,phone}) => {
// const ComponentA = (info) => {
    // let name = info.name
    // let address = info.address
    // let phone = info.phone
    // {name:"kishor",address:"ktm",phone:"1111"}
    // {"name":"kishor","address":"ktm","phone":"1111"}
    // 

    return (
        <>
            <h1>Name: {name}</h1>
            <h2>Address: {address}</h2>
            <h3>Phone: {phone}</h3>

        </>
    )
}

export default ComponentA