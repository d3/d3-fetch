async function DecompressBlobToBuffer(blob) {
  	const ds = new DecompressionStream("gzip");
  	const decompressedStream = blob.stream().pipeThrough(ds);
	const response = new Response(decompressedStream);
	const decompressedArrayBuffer = await response.arrayBuffer();
  	return decompressedArrayBuffer;
}
export function gzipbuffer(url, options) {
	return fetch(url, options)
		.then(async response => await response.blob())
		.then(DecompressBlobToBuffer)
}
