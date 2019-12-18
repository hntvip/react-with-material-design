import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import HomePage from '../../pages/HomePage/HomePage';
import ProductActionPage from '../../pages/ProductActionPage/ProductActionPage';
import { MemoryRouter } from "react-router";
import App from '../../App.js';
import { testStore } from './../Utils/testUtils';
describe('Test App', () => {
  
  describe('Show Menu does not show 2 <li>', () => {
    
    let wrapper, store;
    beforeEach(() => {
      
      store = testStore({});
    });
    // afterEach(() => {
    //   wrapper.unmount();
    // });

    wrapper = mount(
      <MemoryRouter initialEntries={[ '/product/add' ]}>
        <App store={store}/>
      </MemoryRouter> 
    );
    // it('should be return = 404 notfound page', () => {
    //   expect(wrapper.find(ProductActionPage)).toHaveLength(1);
    // });

    });

    
});