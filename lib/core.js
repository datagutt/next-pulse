// in this example, we'll get posts from an API and save them in a group to be accessed by a component
import Pulse from 'pulse-framework/dist/pulse.min';
import React from 'react';

const pulseConfig = {
  request: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  },
  collections: {
    posts: {
      groups: ['homepage', 'group1', 'group2'],
      routes: {
        getPosts: request => request.get('posts'),
        getUser: (request, id) =>
          request.get(`users/${id}`)
      },
      actions: {
        getPosts({ routes, collect }) {
          routes.getUser(1).then(res => {
            res.dab = (new Date).getTime();
            // use the collect method to collect posts into a group called "homepage", defined above
            collect(res, ['homepage', 'group1', 'group2']);
          });
        }
      }
    }
  },
  config: {
  }
};
Pulse.use(React);
export default new Pulse(pulseConfig);