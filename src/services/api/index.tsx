const options = {
  baseUrl: 'https://rickandmortyapi.com',
  rootPath: '/api',
};

const POST = 'POST';
const PUT = 'PUT';
const GET = 'GET';
const DELETE = 'DELETE';

const send = async (
  endpoint: string,
  params: string,
  method: string,
  data?: any,
) => {
  let uri = options.baseUrl + options.rootPath + endpoint + params;
  var formBody: Array<any> | string = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  console.log(uri);
  const response = await fetch(uri, {
    method: method,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
    },
    body: data && JSON.stringify(data),
  });

  const result = await response.json();
  return result;
};

const methods = {
  post: (endpoint: string, params: string, data: any) => {
    return send(endpoint, params, POST, data);
  },
  get: (endpoint: string, params: string) => {
    return send(endpoint, params, GET);
  },
  put: (endpoint: string, params: string, data: any) => {
    return send(endpoint, params, PUT, data);
  },
  del: (endpoint: string, params: string, data: any) => {
    return send(endpoint, params, DELETE, data);
  },
};

export const {post, get, put, del} = methods;
