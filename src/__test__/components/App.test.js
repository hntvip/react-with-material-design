import React from 'react';
import { mount} from 'enzyme';
import App from '../../App';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { MemoryRouter } from 'react-router';
describe('Test Menu', () => {
  // const wrapper = mount(
  //   <MemoryRouter initialEntries={[ '/random' ]}>
  //     <App/>
  //   </MemoryRouter>
  // );

  it.skip('Should be existed', ()=> {
    expect(wrapper.find(NotFoundPage)).toBe(1)
  })


});