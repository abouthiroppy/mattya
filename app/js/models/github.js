'use strict';

export default function() {
  return new Promise((resolve) => {

    // const uri = 'https://api.github.com/users/abouthiroppy/events/public';
    const uri = 'http://github.about-hiroppy.org';

    $.get(uri, (res) => {
      resolve(res);
    });
  });
}
