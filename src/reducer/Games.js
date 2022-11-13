import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Games = () => {
    let gameStore = useSelector(store=>store.game)
    let gameName = gameStore.game

    let [game, setGame] = useState('')
    let [player, setPlayer] = useState('')

    let dispatch = useDispatch()

  return (
    <>
    <h1>Game Name : {gameName}</h1>
    <input type={'text'} className='form-control w-50 mx-5' onChange={(e)=>setGame(e.target.value)}/>
    <button className='btn btn-success mx-5' onClick={()=>
        dispatch({type:"UPDATE_GAME", payload:game})
        }>UPDATE GAME</button>

    <h1>
        Player Name: {gameStore.player}
    </h1>
    <input type={'text'} className='form-control w-50 mx-5' onChange={(e)=>
        setPlayer(e.target.value)
    }/>
    <button className='btn btn-success mx-5' onClick={()=>
        dispatch({type:"UPDATE_PLAYER", payload: player})    
}>UPDATE PLAYER</button>



    </>
  )
}

export default Games