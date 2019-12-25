import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionsProduct from './index';
import * as Types from '../constants/ActionTypes';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import apiCaller from './../utils/__mocks__/apiCaller';
describe('Test actions creator', () => {
 
  it.skip('should be feach all Products', (done) => {
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
  it.skip('should be return object is containing type DELETE and id', () => {
      let id = 1;

    expect(actions.actDeleteProduct(id)).toEqual({
      type: Types.DELETE_PRODUCT,
      id 
    })
  });
  it('should be return type = ADD and a product as parameter', async () => {

    const dispatch = jest.fn();
    const getState = jest.fn();
    const store = mockStore();
    await store.dispatch(actionsProduct.actFetchProductsRequest());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:Types.FETCH_PRODUCTS
    });
  });
});
