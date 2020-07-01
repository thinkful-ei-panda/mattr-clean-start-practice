import React from 'react';
import Split from './composition/Split';
import './App.css'
import picture from './goc.png'
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate'


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
      <Split className='left'>
        <h2> Menu </h2>
        <ul className='menu-list'>
          <li> App 1 </li>
          <li> App 2 </li>
          <li> App 3 </li>
          <li> {secondTooltip} </li>
          
        </ul>
      </Split>
      <section className='right' flexbasis={2}>
      
      <Split className='right' flexbasis={2}>
      <h1> <img src={picture} alt="matt dizzle react arcade" className='title-img' /> </h1>
      <hr/>
        This is going to be my {reactTooltip} playground where I create fun little apps
        to demonstrate various concepts of react. This my next step in becoming
        a full stack developer. Please browse around and see what I have built.
        <Tooltip message='one more tooltip message'>
          This tooltip is not stored in a variable but the others are, it still works.
        </Tooltip>
        <TheDate />
      </Split>

     
    </section>
    </main>
  )
}


export default App;