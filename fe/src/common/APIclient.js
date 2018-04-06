import axios from 'axios'

export const post = (url, payload) => {

  return getInstance().post(url, payload)
    .then(response => {
      // TODO : Additional Logging ?
      return response;
    })
    .catch(error => {
      // TODO : Global Error Handling
      console.log(`APIClient POST ${url} payload ${payload} - ${error}`)
    })
}

export const get = (url, queryPayload) => {

  const fullUrl = queryPayload !== undefined ? url + '?' + convertToURLParams(queryPayload) : url;
  return getInstance().get(fullUrl)
    .then(response => {
      // TODO : Additional Logging ?
      return response;
    })
    .catch(error => {
      // TODO : Global Error Handling
      console.log(`APIClient GET ${url} payload ${queryPayload} - ${error}`)
      return new Error('failed api call');
    })  
}

export const convertToURLParams = (payload) => {
  return Object.keys(payload).reduce( (uri, key) => {
    return `${uri}&${key}=${encodeURI(payload[key])}`; 
  }, "").slice(1) // remove initial '&'
}

export const getInstance = () => {
  // TODO : Set Headers, i.e. Auth Tokens (if necessary)
  return axios;
}
