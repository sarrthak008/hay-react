import React from 'react'

import './app.css'

let Style ={
    color:'red',
    backgroundColor:'blue'
}


const App = () => {
  return (
    <div>
         <h1 style={{
             color:'green',
             backgroundColor:'yellow'
         }}>hello i m inline css</h1> 

         <br></br>

        <h1 style={Style}>hii i m internal css</h1>

        <br></br>
          
         <h1 className='heading-text'>i m external css</h1>
        

    </div>
  )
}

export default App
