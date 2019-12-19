import axios from 'axios';
import * as actions from './index';
import * as Types from '../constants/ActionTypes';

describe('Test actions creator', () => {
  jest.mock("axios");
  it('should be feach all Products', () => {
    var products = [
      {
        title: 'iphone A',
        price: 1000
      },
      {
        title: 'iphone B',
        price: 2000
      }
    ]
    expect(actions.actFetchProducts(products)).toEqual({
      type: Types.FETCH_PRODUCTS,
      products 
    })
    
  });
  it('should be return object is containing type DELETE and id', () => {
      let id = 1;

    expect(actions.actDeleteProduct(id)).toEqual({
      type: Types.DELETE_PRODUCT,
      id 
    })
  });
  it('should be return type = ADD and a product as parameter', () => {
    // Mock Jest Fist
    

    let product = {
      title: 'Samsung A',
      price: 1000,
      id:1
    }

    // Using Mock Axios module and call resolve a data 
    axios.get.mockImplementation(() => 
      Promise.resolve(resp)
    )
    // 

      
      
  });
});
