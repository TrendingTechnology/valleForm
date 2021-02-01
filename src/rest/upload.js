/**
 * TODO: Add JSDocs
 *
 */

const upload = (
  hash,
  files,
  api,
) => {

  /**
   * HTTP POST
   *
   */

  const method = 'POST';

  const headers = new Headers({
    'hash': hash
  });

  /**
   * Request data structure
   *
   */

  const formData = new FormData();

  Array.from(files).forEach(file => {
    formData.append(file.name, file);
  });

  /**
   * HTTP POST
   *
   */

  return fetch(api, { method, headers, body: formData })
    .then(res => res.json())

}

export default upload;
