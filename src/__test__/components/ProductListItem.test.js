import React from 'react'
import { shallow } from 'enzyme'
import ProductList from '../../components/ProductList/ProductList'
describe('should be existed', () => {
 

  let wrapper;
    wrapper = shallow(<ProductList/>);
  
  it('should be existed', () => {
    expect(wrapper.length).toBe(1)
  });  



})
