import React from 'react';
import Box from './composition/Box';
import './App.css'
import picture from './goc.png'
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate'
import Counter from './state/Counter'


const reactTooltip = (
  <Tooltip message='I am finally starting to get it' color='#126BCC'>
   react
  </Tooltip>
)
const secondTooltip = (
  <Tooltip message='none of these buttons work yet'>
    App 4
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <Box className='left'>
        <h2> Menu </h2>
        <ul className='menu-list'>
          <li> App 1 </li>
          <li> App 2 </li>
          <li> App 3 </li>
          <li> {secondTooltip} </li>
          
        </ul>
      </Box>
      <section className='right' flexbasis={2}>
      
      <Box className='right' flexbasis={2}>
      <h1> <img src={picture} alt="matt dizzle react arcade" className='title-img' /> </h1>
      <hr/>
        This is going to be my {reactTooltip} playground where I create fun little apps
        to demonstrate various concepts of react. This my next step in becoming
        a full stack developer. Please browse around and see what I have built.
        
      </Box>
      <TheDate />
      <Counter />
     
    </section>
    </main>
  )
}


export default App;