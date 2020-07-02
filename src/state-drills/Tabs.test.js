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

// import React from 'react';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer'
// import Tabs from './Tabs';
// import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'

// describe(`Tabs Component`, () => {
//   // array of objects, each with a name and content
//   const tabsProp = [
//     { name: 'First tab',
//       content: 'This is a sentence for Matt Dizzle' },
//     { name: 'Second tab',
//       content: 'This is a another for sentence for you.' },
//     { name: 'Third tab',
//       content: 'Because Lorem Ipsum is too much in this situation.lol' },
//   ];

//   it('renders without errors', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<Tabs />, div);
//         ReactDOM.unmountComponentAtNode(div);
//     })

//   it('renders the first tab by default', () => {
//     const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON()
//     expect(tree).toMatchSnapshot()
//   })

//   it('renders empty given no tabs', () => {
//     const wrapper = shallow(<Tabs />)
//     expect(toJson(wrapper)).toMatchSnapshot()
//     })

// })

import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Tabs from './Tabs'

describe(`Tabs Component`, () => {
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

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Tabs />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the first tab by default', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

//   it('closes the first tab and opens any clicked tab', () => {
//     const wrapper = shallow(<Tabs tabs={tabsProp} />)
//     wrapper.find('button')
//     console.log('>>> WRAPPER <<<')
//     console.log(wrapper.debug())
//     console.log('>>> FIND(BUTTON) <<<')
//     console.log(wrapper.find('button').debug())
//     console.log(wrapper.find('button').at(1).debug())
//   })

  it('closes the first tab and opens any clicked tab', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})