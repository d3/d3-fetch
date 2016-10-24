export default function(url, anonymous) {
  return new Promise(function(resolve, reject) {
    var image = new Image;
    if (anonymous) image.crossOrigin = "anonymous";
    image.onerror = reject;
    image.onload = function() { resolve(image); };
    image.src = url;
  });
}
