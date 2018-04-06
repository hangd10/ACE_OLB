import axios from 'axios';
import { success } from '../../services/response/'

export const stub = ({ bodymen: { body } }, res, next) => {
  console.log(`Stub it out ${ JSON.stringify(body) }`);

  return new Promise( (resolve, reject) => {
      resolve(body);
    })
    .then(success(res, 201))
    .catch(next)
}

export const stub2 = ({ }, res, next) => {
    console.log(`Stub2 calling jsonplaceholder GET ....`);
  
    let url = 'https://jsonplaceholder.typicode.com/posts/1';
    return axios.get(url)
      .then(function (response) {
        return response.data;
      })
      .then(success(res, 200))
      .catch(function (error) {
        console.log(error);
    });
}
  
export const stub3 = ({ bodymen: { body } }, res, next) => {
  console.log(`Stub3 calling IIB endpoint .... ${ JSON.stringify(body) }`);

  let url = 'http://10.85.3.153:7800/ClubLabTest';
  // let payload = { "inAndOut": {
  //   "emailAddress": "test@test.com",
  //   "zipCode": "90210"
  // }};

  return axios.post(url, body)
    .then(function (response) {
      return response.data;
    })
    .then(success(res, 200))
    .catch(function (error) {
      console.log(error);
  });
}


