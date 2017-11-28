function responseBlob(response) {
  return response.blob();
}

export default function(url) {
  return fetch(url).then(responseBlob);
}
