const users = [
  {
    id:1,
    title: 'product A',
    price: 100
  },
  {
    id:2,
    title: 'product B',
    price: 200
  }
]
export default  {
  apiCaller: jest.fn(() => Promise.resolve({ data: users}))
};
