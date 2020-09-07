import request from 'superagent';

const serverURL = '/api/v1/analyse'


export function newText(text) {
  console.log(text);
  return request.post(serverURL).send(text)
  .then((response) => {
    return response.body
  })
}