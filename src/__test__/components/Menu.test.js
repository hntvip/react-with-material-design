import React from 'react';
import Menu from '../../components/Menu/Menu';
import { shallow } from 'enzyme';

describe('Test Menu', () => {
  let wrapper;
    it('should be lengh = 1', () => {
      wrapper = shallow(<Menu/>);
      expect(wrapper.length).toBe(1);
    });

    describe('Show Menu with 2 elements', () => {
      const menus = [
        {
            name: 'Trang Chủ',
            to: '/',
            exact: true
        },
        {
            name: 'Quản Lý Sản Phẩm',
            to: '/product-list',
            exact: false
        }
    ];
    });

});