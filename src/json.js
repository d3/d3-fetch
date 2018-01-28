function responseJson(response) {
  return response.json();
}

export default function(input, init) {
  return fetch(input, init).then(responseJson);
}
