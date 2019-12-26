import Pulse from 'pulse-framework/dist/pulse.min';
import React, { useState } from 'react';
import Nav from '../components/Nav'
import core from '../lib/core';

const IndexPage = Pulse.React(() => {
  return (
    <>
      <Nav />
      <p>Hello, I'm the index page</p>
    </>
  );
});

export default IndexPage
