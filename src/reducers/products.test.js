import * as Types from './../constants/ActionTypes';
import products from './products';

describe('Test products reducers', () => {
  it('should return the initialState', () => {
    //Ex: products (oldState,actionObject);
    /*
    Case 1 : oldState length = undefined,
            actionType = FETCH_PRODUCTS
     */
    expect(products(undefined, {})).toEqual([])
  })
  
  it('Should Case 2', () => {
    /*
   Case 2 : oldState length = [],
           actionType = FETCH_PRODUCTS
    */
   
   var action = {
     id: 2,
     type: Types.FETCH_PRODUCTS,
     products: [
       {
         id:2,
         'title':'2',
         price:200
       }
     ]
   }

   expect(products([], action)).toEqual([
     {
       id:2,
       title:'2',
       price:200
     }
   ])
 });
  it('should Case 3 ', () => {
    /*
    Case 3 : oldState length = [2],
            actionType = DELETE_PRODUCT
     */
    var oldState3 = [
      {
        id: 1,
        title:'1',
        price:100
      },
      {
        id: 2,
        title:'2',
        price:200
      }
    ]
    var action3 = {
        type: Types.DELETE_PRODUCT,
        product: {
          title:'2',
          price:200
        },
        id:2
      }

    expect(products(oldState3, action3)).toEqual([
      {
        id:1,
        title:'1',
        price:100
      }
    ])
  })

  it('should Case 4 ', () => {
    /*
    Case 3 : oldState length = [2],
          actionType = ADD_PRODUCT
          expect oldState length = [3]
    */
    var oldState4 = [
      {
        id: 1,
        title:'1',
        price:100
      },{
        id: 2,
        title:'2',
        price:200
      }
    ]
    var action4 = {
        type: Types.ADD_PRODUCT,
        product: {
          title:'3',
          price:300
        },
        id:3
      }

    expect(products(oldState4, action4)).toEqual([
      {
        id: 1,
        title:'1',
        price:100
      },{
        id: 2,
        title:'2',
        price:200
      },{
        title:'3',
        price:300
      }
    ])
  })

  it('Should Case 5 ', () => {
    /*
    Case 3 : oldState length = [2],
          actionType = ADD_PRODUCT
          expect changing oldState[2] = {
                    id:2,
                    title:'3',
                    price:300
                  }
    */
    var oldState5 = [
      {
        id: 1,
        title:'1',
        price:100
      },{
        id: 2,
        title:'2',
        price:200
      }
    ]
    var action5 = {
        type: Types.UPDATE_PRODUCT,
        product: {
          id:2,
          title:'3',
          price:300
        }
      }

    expect(products(oldState5, action5)).toEqual([
      {
        id: 1,
        title:'1',
        price:100
      },{
        id: 2,
        title:'3',
        price:300
      }
    ])
  })
})