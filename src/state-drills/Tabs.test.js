// import React from 'react';
// import ReactDOM from 'react-dom';
// import Tabs from './Tabs';

// describe(`Tabs Component`, () => {
//   it('renders without errors', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Tabs />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   })
// })

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Tabs from './Tabs';

describe(`Tabs Component`, () => {
  // array of objects, each with a name and content
  const tabsProp = [
    { name: 'First tab',
      content: 'This is a sentence for Matt Dizzle' },
    { name: 'Second tab',
      content: 'This is a another for sentence for you.' },
    { name: 'Third tab',
      content: 'Because Lorem Ipsum is too much in this situation.lol' },
  ];

  it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

  it('renders the first tab by default', () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})