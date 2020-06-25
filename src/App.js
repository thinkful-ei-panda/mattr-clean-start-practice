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
        <h2> Menu </h2>
        <ul className='menu-list'>
          <li> App 1 </li>
          <li> App 2 </li>
          <li> App 3 </li>
          <li> App 4 </li>
        </ul>
      </Split>
      <section className='right' flexBasis={2}>
      <Split className='right' flexBasis={2}>
      <h1> <img src={picture} alt="matt dizzle react arcade" className='title-img' /> </h1>
      <hr/>
        This is going to be my react playground where I create fun little apps
        to demonstrate various concepts of react. This my next step in becoming
        a full stack developer. Please browse around and see what I have built.
      </Split>
      <Split className='counter-box' flexBasis={2}>
      <h3> Counter </h3>
      New Component goes here
      </Split>
    </section>
    </main>
  )
}

export default App;