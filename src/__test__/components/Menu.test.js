import React from 'react';
import Menu from '../../components/Menu/Menu';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
describe.skip('Test Menu', () => {
  let wrapper;
    describe('Show Menu does not show 2 <li>', () => {
      beforeEach(() => {
        wrapper = mount(
          <Router>
           <Menu menu={[
              {
                name: 'Trang Chủ',
                to: '/',
                exact: true
              },{
                name: 'Quản Lý Sản Phẩm',
                to: '/product-list',
                exact: false
              }
           ]}/>
          </Router>
        ); 
      });
      
      afterEach(() => {
        wrapper.unmount();
      });

      it('should be lengh = 1', () => {
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('li').length).toBe(2);
      });

    });

    describe('Should show only Menu without any child <li> when length = 0', () => {
      beforeEach(() => {
        wrapper = mount(
          <Router>
           <Menu menu={[]}/>
          </Router>
        ); 
      });
      
      afterEach(() => {
        wrapper.unmount();
      });
      
      it('should li does not render', () => {
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('li').length).toBe(0);
      });

    });
});