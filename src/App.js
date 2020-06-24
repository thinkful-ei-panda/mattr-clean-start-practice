import React from 'react';
import Split from './composition/Split';
import './App.css'
import picture from './goc.png'

// function App() {
//   return (
//     <main className='App'>
//       <Split />
//       <Split />
//       <Split />
//     </main>
//   );
// }

function App() {
  return (
    <main className='App'>
      <Split className='left'>
        <h1> Matt Dizzle</h1>
        This is going to be my new React Playground.
      </Split>
      <Split className='right' flexBasis={2}>
      <h1> <img src={picture} alt="matt dizzle react arcade" className='title-img' /> </h1>
      
        This is the content for the right `Split`. 
        Inventore aliquid cupiditate suscipit repellat. 
        Quaerat quis officiis quam fuga. 
        Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  )
}

export default App;