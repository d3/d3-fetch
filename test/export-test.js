import assert from "assert";
import * as d3 from "../src/index.js";

it("fetch methods", () => {
  assert.deepStrictEqual(Object.keys(d3), [
    'blob', 'buffer',
    'csv',  'dsv',
    'html', 'image',
    'json', 'svg',
    'text', 'tsv',
    'xml'
  ]);
});	
