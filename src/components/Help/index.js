import React from 'react';
import { help } from '../../../constants';

const Help = () => (
  <section>
    { help.map((item, index) => (
      <article key={index} dangerouslySetInnerHTML={{ __html: item.copy }}></article>
    )) }
  </section>
);

export default Help;
