import axios from 'axios';
import callApi from './apiCaller';
import * as Config from './../constants/Config';
import apiCallerMock from './../constants/Config';




describe('test Axios', () => {
    
  it('should call match parameter ', () => {

    const mockValue = new Promise((resolve, reject) => {
      resolve({
        id: 1,
        title: 'alove'
      })
    })
    axios.mockResolvedValue(mockValue);
    
    let endpoint = 'product';
    let method = 'GET';
    let data = {
      id: 1,
      title: 'object'
    }

    callApi(endpoint,method,data);

    expect(axios).toBeCalledWith({
      url: `${Config.API_URL}/${endpoint}`, 
      method,
      data
    });
      
  });

  it('should be show error if url is not foud', () => {
    let endpoint1 = 'somethingerr1';
    let method = 'GET';
    let data = {
      id: 1,
      title: 'object'
    }

    axios.mockImplementation(() => Promise.reject("error Result"));
    
    callApi(endpoint1,method,data).catch((e) =>{
      expect(e).toBe('error Result')
    })

    expect(axios).toHaveBeenCalled();
  });
});