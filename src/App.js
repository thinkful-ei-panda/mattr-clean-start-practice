import React from 'react';
import Box from './composition/Box';
import './App.css'
import picture from './goc.png'
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate'
import Counter from './state/Counter'
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import Roulette from './state-drills/Roulette';
import Tabs from './state-drills/Tabs';


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

const tabsProp = [
  { name: 'First tab',
    content: 'This is a sentence for Matt Dizzle' },
  { name: 'Second tab',
    content: 'This is a another for sentence for you.' },
  { name: 'Third tab',
    content: 'Because Lorem Ipsum is too much in this situation.lol' },
];

function App() {
  return (
    <main className='App'>
      <Box className='left'>
        <h2> Menu </h2>
        <ul className='menu-list'>
          <li onClick={function() { console.log('App 1 clicked!') }}> App 1 </li>
          <li onClick={function() { console.log('App 2 clicked!') }}> App 2 </li>
          <li onClick={function() { console.log('App 3 clicked!') }}> App 3 </li>
          <li onClick={function() { console.log('App 4 clicked!') }}> {secondTooltip} </li>
          
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
      <Box className="toy-box">
      <TheDate />
      <Counter />
      <Counter count={123} />
      <HelloWorld />
      <Bomb />
      <Roulette />
      <Tabs tabs={tabsProp} />
      </Box>
      
    </section>
    </main>
  )
}


export default App;