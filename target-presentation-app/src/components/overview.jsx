import React from 'react';

export const Overview = () => {
  return (
    <div className="container">
      <h2>You May Ask What is Big Data?</h2>
      <div className='row' style={{marginTop: '25px'}}>
        <img className='col' src='https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/694991_cDO5wuA0NdevLb45zHRvog.jpeg' style={{width: '-webkit-fill-available', maxWidth: '600px', marginRight: 'auto'}}/>
        <img className='col' src = "https://lh3.googleusercontent.com/proxy/O0Ft033sokF5ZadPtI7hhQQL4oBJ4YIBS8_AB1csS7YP6J3DKPw6iNa9Jx9Uqa5AWG-MYOpo6SxUl3BVK23ahJyeA6sdXgU-V12SdazgRRaf58WlpAXV6ht3K3eZNUg0HtVdlCM-xQUTg3_j2swnVz8" style={{width: '-webkit-fill-available', maxWidth: '600px'}}/>
      </div>
      <div style={{marginBottom: '50px'}}><a href='https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/694991_cDO5wuA0NdevLb45zHRvog.jpeg' target='_blank'>https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/694991_cDO5wuA0NdevLb45zHRvog.jpeg</a></div>
      <p>
        Big data refers to the vast collection of structured and unstructured information from various sources, enabling companies to analyze patterns and trends for informed decision-making and targeted marketing. <br />
        Target employs big data to analyze consumer behavior and preferences, creating detailed customer profiles that allow for personalized marketing strategies. <br />
        Precision marketing enables Target to tailor its products and services to individual customers, leading to improved satisfaction and loyalty. <br />
        Despite the benefits, the extensive data collection raises ethical questions about consumer privacy and the responsible use of personal information. <br />
        Target's use of predictive analytics, exemplified by its ability to predict customer behavior, raises concerns about the potential invasion of privacy and the need for ethical data practices.
        </p>
      
    </div>
  );
}