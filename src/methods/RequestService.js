import { checkCallError, apiConfig } from '../utilities';

class RequestService {
  constructor() {
    this.baseUrl = apiConfig;
    this.defaultOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  async get(path) {
    return this.makeRequest(path);
  }

  async makeRequest(path, options) {
    const requestParams = { ...this.defaultOptions, ...options };
    console.log(path, requestParams);
    const result = await fetch(`${this.baseUrl}${path}`, requestParams);
    checkCallError(result);
    return result.json();
  }
}

export default RequestService;

// const requestOptions = (method, contentType, auth = null) => (
//   {
//     method,
//     headers: {
//       'Content-Type': contentType,
//     },
//   }
// );

// const makeRequest = async (path, options) => {
//   const baseUrl = apiConfig;
//   const call = await fetch(`${baseUrl}${path}`, options);
//   checkCallError(call);
//   return call.json();
// };

// const RequestService = {
//   get: async (path, auth, contentType = 'application/json') => {
//     const options = requestOptions('GET', contentType);
//     return makeRequest(path, options);
//   },
// };

// export default RequestService;
