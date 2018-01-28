function responseArrayBuffer(response) {
  return response.arrayBuffer();
}

export default function(input, init) {
  return fetch(input, init).then(responseArrayBuffer);
}
