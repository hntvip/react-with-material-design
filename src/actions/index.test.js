import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import * as Types from '../constants/ActionTypes';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
// jest.mock('../__mocks__/apiCaller');

// jest.mock('axios');

// Make sure to resolve with a promise
describe('Test actions creator', () => {
 
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
  it.skip('should be return type = ADD and a product as parameter', () => {
    // Mock Jest Fist
    

    let product = {
      title: 'Samsung A',
      price: 1000,
      id:1
    }
    const mockedResponse = Promise.resolve({
      data: {
        title: 'Iphone',
        price: 100
      }
   });

    const store = mockStore({ product });
      
    return store.dispatch(actions.actGetProductRequest(product.id)).then( data => {
      console.log(data)
      //expect(store.getActions()).toEqual(product)
    })
  });
});
