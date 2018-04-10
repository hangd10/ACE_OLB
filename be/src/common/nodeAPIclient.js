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

      if ("ECONNABORTED" === error.code) throw new Error("TIMEOUT");

      throw new Error('failed api call');
    })  
}

export const put = (url, payload) => {

  return getInstance().put(url, payload)
    .then(response => {
      // TODO : Additional Logging ?
      return response;
    })
    .catch(error => {
      // TODO : Global Error Handling
      console.log(`APIClient PUT ${url} payload ${payload} - ${error}`)
    })
}

export const remove = (url, payload) => {

  return getInstance().delete(url, payload)
    .then(response => {
      // TODO : Additional Logging ?
      return response;
    })
    .catch(error => {
      // TODO : Global Error Handling
      console.log(`APIClient DELETE ${url} payload ${payload} - ${error}`)
    })
}

export const convertToURLParams = (payload) => {
  return Object.keys(payload).reduce( (uri, key) => {
    return `${uri}&${key}=${encodeURI(payload[key])}`; 
  }, "").slice(1) // remove initial '&'
}

export const getInstance = () => {
  // TODO : Set Headers, i.e. Auth Tokens (if necessary)

  // error logs should display 'Error: timeout of 10000ms exceeded'
  axios.defaults.timeout = 10000;

  // log each request going to external api
  axios.interceptors.request.use(request => {
    // TODO : Hook into Centralized Logging Server
    //console.log('Starting Request', request)
    return request;
  })

  axios.interceptors.response.use(response => {
    // TODO : Hook into Centralized Logging Server
    //console.log('Response:', response)
    return response
  })

  return axios;
}
