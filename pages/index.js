import Pulse from 'pulse-framework/dist/pulse.min';
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import core from '../lib/core';

const IndexPage = Pulse.React(() => {
  useEffect(() => {
    core.posts.getPosts();
  }, [])
  if(!core.posts.homepage) return null;
  return (
    <>
      <Nav />
      <p>Hello, I'm the index page</p>
      {
        core.posts.homepage
        &&
        core.posts.homepage.map((post, i) => {
          return (
            <div key={i}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          )
        })
      }
    </>
  );
}, (core) => [core.posts.homepage]);

export default IndexPage
