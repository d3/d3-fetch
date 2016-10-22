function responseText(response) {
  return response.text();
}

export default function(url) {
  return fetch(url).then(responseText);
}
