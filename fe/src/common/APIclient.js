import axios from 'axios'



var API = {

  POST: (url, data, callback) => {

    axios.post( url, data )
      .then(resp => {
        // console.log(resp)
        callback(resp)

        return resp

      })
      .catch(err => {
        console.log(err)
      })

  },

  GET: (url, data, callback) => {

    axios.get(url, data)
      .then(resp => {
        // console.log(resp)
        callback(resp)
        return resp

      })
      .catch(err => {
        console.log(err)
      })

  }


}


export default API;

// class POST {
//     getPosts() {
//         return new Promise((resolve, reject) => {
//             const xhr = new XMLHttpRequest();
//             xhr.open('GET', `${API_ROOT}/posts`);
//             xhr.onreadystatechange = function() {
//                 if (xhr.readyState === 4) {
//                     const resp = JSON.parse(xhr.responseText);
//                     if (resp.error) {
//                         reject(resp.error);
//                     } else {
//                         resolve(resp);
//                     }
//                 }
//             }
//             xhr.send();
//         })
//     }
// }
