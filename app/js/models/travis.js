'use strict';

export default function() {
  return new Promise((resolve) => {
    const uri = 'https://api.travis-ci.org/repos/abouthiroppy/mattya/builds';

    $.get(uri, (res) => {
      resolve(res);
    });
  });
}
