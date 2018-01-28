function responseText(response) {
  return response.text();
}

export default function(input, init) {
  return fetch(input, init).then(responseText);
}
