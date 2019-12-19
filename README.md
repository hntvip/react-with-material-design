### Somthing be can errors

TypeError: _axios.default.get.mockImplementation is not a function

**Resolve**
Just move your **mock aixos into top**
Because `jest.mock is hoisted to the top of its scope `
   
 ``` 
 +jest.mock('axios'); <--move to top
 
 describe('WithFetching', () => {
   const WithFetching = withFetching(URL_PATH_EDUCATIONS, Educations); // withFetching is HOC
 
-  jest.mock('axios');    <--this line
```