import React from 'react';
import './what.css'; 
  import { Feature } from '../../components';

const What = () => {
  return <div className='gpt3_what section_margin' id='what'>
     <div className="gpt3__whatgpt3-feature">
      <Feature/>
     </div>
     <div className='gpt3_what-heading'>
      <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
     </div>
     <div className='gpt3_what-container'>
      <Feature/>
      <Feature/>
      <Feature/>
     </div>
  </div>;
};

export default What;
