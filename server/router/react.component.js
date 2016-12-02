import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import createLocation from 'history/lib/createLocation';

module.exports = function(app) {

  const routes = {
    path: '/',
    component: require('./../../client/Apps').default,
    
    childRoutes: [
      {
        path: '/updemo',
        component: require('./../../client/components/demo/UploadDemo')
      }
      ,{
        path: '/admins',
        component: require('./../../client/components/demo/UploadDemo')
      },{
        path: '/admin-upload',
        component: require('./../../client/components/demo/UploadDemo')
      },{
        path: '/admin-view-pattern',
        component: require('./../../client/components/demo/UploadDemo')
      },{
        path: '/admin-view-sell-program',
        component: require('./../../client/components/demo/UploadDemo')
      },{
        path: '/admin-create-sell-program',
        component: require('./../../client/components/demo/UploadDemo')
      }
    ]
  };

  app.use((req, res, next) => {
    const location = createLocation(req.path);

    // Note that req.url here should be the full URL path from
    // the original request, including the query string.
    match({
      routes,
      location
    }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        res.render('./../client/index.ejs');

      } else {
        next();
      }
    })
  })
}

function renderIsoOutput(data, renderProps, res) {}
