import React, { useEffect, useState } from 'react'

const Count = () => {
    // let counter = 0

    
    // let/const [variablename, functionname] = useState(initial value)
    // functioname - setVariablename
    // initial value - 0, 1, .... - number
    //                  - '' or ""  -string
    //                  - [ ]       - array
    //                  - { }       - object
    // functioname(updated value)

    // useEffect -> shows side effects when any state variable changes state/value
    // useEffect(function, [statevariables])
    // function -> effects to be seen
    // statevariables -> variables that will trigger the function
    // [] -> effect is seen only while loading
    // [state1, state2] -> effect is seen when load and state1 or state2 changes
    // empty -> effect is seen everytime any state variable changes state

    let [counter, setCounter] = useState(0)

    let [data, setData] = useState(100)

    useEffect(()=>{
        window.alert("value updated")
    },[])

    return (
        <>
            <h1 className='text-center'>
                Count: {counter}
            </h1>
            <button onClick={() => {
                setCounter(++counter)
                console.log(counter)
            }}>Increase count</button>

            <button onClick={
                ()=>{
                    setCounter(--counter)
                }
            }>Decrease</button>

            <button onClick={
                ()=>{
                    setCounter(0)
                }
            }>RESET</button>


            <h1>Data: {data}</h1>
            {
                data<200 && 
                <button onClick={()=>{setData(data+10)}}>Increase data</button>
            }
            
            <button onClick={()=>{setData(data-10)}}>Decrease data</button>

            
            <button onClick={()=>{setData(100)}}>Reset data</button>
        </>
    )
}

export default Count