import {default as jsonFetch} from "./json";
import {default as textFetch} from "./text";
import {default as imageFetch} from "./image";
import {csv as csvFetch, tsv as tsvFetch} from "./dsv";

function getFileExtension(uri) {
  return uri.split(".").pop();
}

export default function(input, init, row) {
  let fileExtension = getFileExtension(input);

  let imageExtensions = ["jpg", "jepg", "png", "gif", "svg"];
  if (imageExtensions.includes(fileExtension)) {
    return imageFetch(input, init);
  }

  let fetchParsers = {
    "json": jsonFetch,
    "txt": textFetch,
    "csv": csvFetch,
    "tsv": tsvFetch,
  }

  let fetchParser = fetchParsers[fileExtension];
  if (!fetchParser) {
    throw new Error('d3.fetch requires one of the following file extensions to be used: ' +
      [ Object.keys(fetchParsers), ...imageExtensions ].join(', '));
  }

  return fetchParser(input, init, row);
}
