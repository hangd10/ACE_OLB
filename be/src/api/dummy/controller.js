import { success } from '../../services/response/'

export const stub = ({ bodymen: { body } }, res, next) => {
  console.log(`Stub it out ${ JSON.stringify(body) }`);

  return new Promise( (resolve, reject) => {
      resolve(body);
    })
    .then(success(res, 201))
    .catch(next)
  }


