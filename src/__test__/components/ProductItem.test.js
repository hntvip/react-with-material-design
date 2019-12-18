import React from 'react'
import { shallow } from 'enzyme'
import ProductItem from '../../components/ProductItem/ProductItem'
describe('should be existed', () => {
  let mockFunc = jest.fn();
  const props = {
    index: 1,
    product: {
      id:1,
      name: 'Iphone A',
      price: 1000,
      status: true
    },
    onDelete: mockFunc
  }
  let wrapper;
    wrapper = shallow(<ProductItem {...props} />);
  
  it('should be show full information of tr element', () => {
    expect(wrapper.find('td').length).toBe(6);
  });  

  it('should be return index = 2', () => {
    expect(wrapper.find('tr').childAt(0).text()).toBe("2");
  });
  it('should be have active class for status of product', () => {
    expect(wrapper.find('span').hasClass('label-warning')).toBeTruthy();
  }); 

  it('should be emit event click to parent when click on delete button on child ', () => {
    let buttonDelete = wrapper.find('button');
    
    expect(buttonDelete.length).toBe(1);
    //click
    
    buttonDelete.simulate('click');

    expect(mockFunc.mock.calls.length).toBe(1)
  }); 
})
