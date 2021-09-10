async function request(url, options) {
  return fetch(url, options)
    .then((response) => response.json())
    .catch((error) => ({ error: true, message: error.message }));
}

function createRequest(method) {
  return (url, data) =>
    request(url, {
      method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
}

export const httpGet = request;
export const httpPost = createRequest('POST');
export const httpDelete = createRequest('DELETE');