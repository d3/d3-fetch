function responseArrayBuffer(response) {
  return response.arrayBuffer();
}

export default function(url) {
  return fetch(url).then(responseArrayBuffer);
}
