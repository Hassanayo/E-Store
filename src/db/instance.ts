const axios = require('axios').default;

const instance = axios.create({
    baseURL: "https://storefront-844a2-default-rtdb.firebaseio.com/"
})

export default instance;