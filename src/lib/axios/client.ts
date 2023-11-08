import axios from 'axios';

const client = axios.create();

// client.interceptors.response.use((response) => {
//   if (response.data) {
//     response.data = camelcaseKeys(response.data, { deep: true });
//   }
//   return response;
// });

export default client;
