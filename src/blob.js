function responseBlob(response) {
  return response.blob();
}

export default function(input, init) {
  return fetch(input, init).then(responseBlob);
}
