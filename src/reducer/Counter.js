import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

    let counterStore = useSelector(store => store.counter)
    let countValue = counterStore.count

    let dispatch = useDispatch()


    console.log(counterStore)


    return (
        <>
            <h1>
                Counter Value : {countValue}
                <br></br>
                <button className='btn btn-primary' 
                        onClick={()=>{return dispatch({type:"ADD_COUNT"})}}>
                    +
                </button>
                <button className='btn btn-danger' 
                        onClick={()=>{return dispatch({type:"REDUCE_COUNT"})}}>
                    -
                </button>
                <button className='btn btn-danger' 
                        onClick={()=>{return dispatch({type:"RESET_COUNT"})}}>
                    RESET
                </button>

            </h1>
        </>
    )
}

export default Counter