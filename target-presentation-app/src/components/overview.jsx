import React from 'react';

export const Overview = () => {
  return (
    <div className="container">
      <h2>You May Ask What is Big Data?</h2>
      <div className='row' style={{marginTop: '25px'}}>
        <img className='col' src='https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/694991_cDO5wuA0NdevLb45zHRvog.jpeg' style={{width: '-webkit-fill-available', maxWidth: '600px', marginRight: 'auto'}}/>
        <img className='col' src = "unnamed.png" style={{width: '-webkit-fill-available', maxWidth: '600px'}}/>
      </div>
      <div style={{marginBottom: '50px'}}><a href='https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/694991_cDO5wuA0NdevLb45zHRvog.jpeg' target='_blank'>https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/694991_cDO5wuA0NdevLb45zHRvog.jpeg</a></div>
      <ul>
        <li>Big data refers to the vast collection of structured and unstructured information from various sources, enabling companies to analyze patterns and trends for informed decision-making and targeted marketing.</li>
        <li>Target employs big data to analyze consumer behavior and preferences, creating detailed customer profiles that allow for personalized marketing strategies.</li>
        <li>Precision marketing enables Target to tailor its products and services to individual customers, leading to improved satisfaction and loyalty.</li>
        <li>Despite the benefits, the extensive data collection raises ethical questions about consumer privacy and the responsible use of personal information.</li>
        <li>Target's use of predictive analytics, exemplified by its ability to predict customer behavior, raises concerns about the potential invasion of privacy and the need for ethical data practices.</li>
      </ul>
      
    </div>
  );
}