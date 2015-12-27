'use strict';

export default function() {
  return new Promise((resolve) => {
    const uri = 'http://tweet.about-hiroppy.org';

    $.getJSON(uri, (res) => {
      resolve(res);
    });
  });
}
