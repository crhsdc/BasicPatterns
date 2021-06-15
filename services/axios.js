const axios = require('axios');

const instance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com' 
});

const adapter = {
   get: url => instance.get(url),
   post: (url, body) => instance.post(url,body),
   put: (url,body) => instance.get(url,body),
   delete: url => instance.delete(url)
}

module.exports = adapter;