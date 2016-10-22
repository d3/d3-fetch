import {tsvParse} from "d3-dsv";
import text from "./text";

export default function(url, row) {
  return text(url).then(function(response) {
    return tsvParse(response, row);
  });
}
