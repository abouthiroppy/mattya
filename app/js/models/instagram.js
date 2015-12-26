'use strict';

import Instafeed from 'instafeed.js';

export default function() {
  return new Promise((resolve, reject) => {
    const userFeed = new Instafeed({
      get  : 'user',
      error: (reject) => {
        reject(res);
      },
      sortBy : 'most-recent',
      userId : '2358551403',
      success: (res) => {
        resolve(res);
      },
      resolution : 'standard_resolution',
      accessToken: '2358551403.467ede5.04231c3ea20e4952a6e34b6974209fce'
    });

    userFeed.run();
  });
}
