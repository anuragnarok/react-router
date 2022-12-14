import React from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h3>
        home
        </h3>
        <button onClick={()=> navigate('orderSummary', {replace: true})}>Confirm Order</button>
    </div>
  )
}

export default Home