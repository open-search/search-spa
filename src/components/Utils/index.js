import 'whatwg-fetch';

function get(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        throw data.error;
      }

      return data;
    });
};

export { get };
