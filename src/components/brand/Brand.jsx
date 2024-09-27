import React from 'react';
import { google ,slack, dropbox, shopify,atlassian } from './import';
import './brand.css';

const Brand = () => {
  return (
    <div className="gpt3_brand section_padding">
      <div className="brand-logo">
        <img src={google} alt="Google Logo" />
      </div>
      <div className="brand-logo">
        <img src={slack} alt="Slack Logo" />
      </div>
      <div className="brand-logo">
        <img src={atlassian} alt="atlassian Logo" />
      </div>
      <div className="brand-logo">
        <img src={dropbox} alt="dropbox Logo" />
      </div>
      <div className="brand-logo">
        <img src={shopify} alt="shopify Logo" />
      </div>
    </div>
  );
};

export default Brand;