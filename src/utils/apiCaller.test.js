import axios from 'axios';
import callApi from './apiCaller';

jest.mock('axios');
const mockValue = new Promise((resolve, reject) => {
  resolve({
    id: 1,
    title: 'alove'
  })
})

axios.mockResolvedValue(mockValue);
axios.mockRejectedValueOnce(new Error('Async error'));

describe('test Axios', () => {
  
  it('should call match parameter ', (done) => {
      let endpoint = 'product';
      let method = 'GET';
      let data = {
        id: 1,
        title: 'object'
      }

      callApi(endpoint,method,data);

      expect(axios).toBeCalledWith({
        url: 'http://localhost:3000/' + endpoint, 
        method,
        data
      });
      done()
  });
  it('should be show error if url is not foud', (done) => {
    let endpoint1 = 'somethingerr';
    let method = 'GET';
    let data = {
      id: 1,
      title: 'object'
    }
    callApi(endpoint1,method,data);
    expect(axios).rejects.toThrow(
      'Async error'
    );
    done()
  });
});