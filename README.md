# d3-fetch

This module provides convenient parsing on top of [Fetch](https://fetch.spec.whatwg.org/). For example, to load a text file:

```js
d3.text("/path/to/file.txt").then(function(text) {
  console.log(text); // Hello, world!
});
```

To load and parse a CSV file:

```js
d3.csv("/path/to/file.csv").then(function(data) {
  console.log(data); // [{"Hello": "world"}, …]
});
```

This module has built-in support for parsing [JSON](#json), [CSV](#csv), and [TSV](#tsv). You can parse additional formats by using [text](#text) directly. This module is intended to replace [d3-request](https://github.com/d3/d3-request).

## Installing

If you use NPM, `npm install d3-fetch`. Otherwise, download the [latest release](https://github.com/d3/d3-fetch/releases/latest). You can also load directly from [d3js.org](https://d3js.org) as a [standalone library](https://d3js.org/d3-fetch.v0.min.js). AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3` global is exported:

```html
<script src="https://d3js.org/d3-dsv.v1.min.js"></script>
<script src="https://d3js.org/d3-fetch.v0.min.js"></script>
<script>

d3.csv("/path/to/file.csv").then(function(data) {
  console.log(data); // [{"Hello": "world"}, …]
});

</script>
```

[Try d3-fetch in your browser.](https://runkit.com/npm/d3-fetch)

## API Reference

<a name="csv" href="#csv">#</a> d3.<b>csv</b>(<i>url</i>[, <i>row</i>]) [<>](https://github.com/d3/d3-fetch/blob/master/src/csv.js "Source")

Fetches the [CSV](https://github.com/d3/d3-dsv#csvParse) file at the specified *url*. An optional *row* conversion function may be specified to map and filter row objects to a more-specific representation; see [*dsv*.parse](https://github.com/d3/d3-dsv#dsv_parse) for details. For example:

```js
function row(d) {
  return {
    year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
    make: d.Make,
    model: d.Model,
    length: +d.Length // convert "Length" column to number
  };
}
```

<a name="image" href="#image">#</a> d3.<b>image</b>(<i>url</i>[, <i>anonymous</i>]) [<>](https://github.com/d3/d3-fetch/blob/master/src/image.js "Source")

Fetches the image at the specified *url*. If *anonymous* is true, the [cross-origin request](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image) is anonymous.

<a name="json" href="#json">#</a> d3.<b>json</b>(<i>url</i>) [<>](https://github.com/d3/d3-fetch/blob/master/src/json.js "Source")

Fetches the [JSON](http://json.org) file at the specified *url*.

<a name="text" href="#text">#</a> d3.<b>text</b>(<i>url</i>) [<>](https://github.com/d3/d3-fetch/blob/master/src/text.js "Source")

Fetches the text file at the specified *url*.

<a name="tsv" href="#tsv">#</a> d3.<b>tsv</b>(<i>url</i>[, <i>row</i>]) [<>](https://github.com/d3/d3-fetch/blob/master/src/tsv.js "Source")

Fetches the [TSV](https://github.com/d3/d3-dsv#tsvParse) file at the specified *url*. An optional *row* conversion function may be specified to map and filter row objects to a more-specific representation; see [*dsv*.parse](https://github.com/d3/d3-dsv#dsv_parse) for details. For example:

```js
function row(d) {
  return {
    year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
    make: d.Make,
    model: d.Model,
    length: +d.Length // convert "Length" column to number
  };
}
```
