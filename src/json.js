import text from "./text";

export default function(url) {
  return text(url).then(function(response) {
    return JSON.parse(response);
  });
}
