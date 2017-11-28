function responseJson(response) {
  return response.json();
}

export default function(url) {
  return fetch(url).then(responseJson);
}
