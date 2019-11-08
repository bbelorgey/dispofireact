import React, { Component } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';

const SmoothScroll = () => (
  <div>
    <AnchorLink href='#things'>Things</AnchorLink>
    <AnchorLink href='#stuff'>Stuff</AnchorLink>
    <AnchorLink href='#suite'>suite</AnchorLink>
 
    <section id='things'>
    <h2>Things</h2>

    </section>
   <section id='stuff'>
    <h2>Stuff</h2>

    </section>
    <section id='suite'>
    <h2>suite</h2>

    </section>
    <section id='suite'>
    <h2>Things</h2>

    </section>
  </div>
)

export default SmoothScroll;