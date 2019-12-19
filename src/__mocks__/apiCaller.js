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
export default function callApi(url, type, data) {
  return new Promise((resolve, reject) => {
    if (url == 'products' && type == 'POST'){
      if (data.id ==1){
        resolve({ data: users });
      } else {
        reject({ error: 'User not found.' });
      }
    }
  });
};