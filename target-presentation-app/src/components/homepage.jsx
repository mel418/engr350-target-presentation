import React from 'react';

export const Homepage = () => {
  return (
    <div className="container">
      <h1 className="display-4">Balancing Personalization with Privacy at Target Corporation</h1>
      <p className="lead">Melody Gatan</p>
      <p>May 5, 2024</p>
      <img src='target-billboard-1200x900.png' style={{width: '-webkit-fill-available', maxWidth: '900px'}} />
    <div className='row' style={{ marginTop: '75px' }}>
      <div className='col' >
        <h2>The Privacy-Personalization Paradox</h2>
        <p>In today's digital age, companies like Target are leveraging big data to personalize marketing efforts, but this raises ethical questions about consumer privacy.<br /> 
          Target Corporation is a prime example of a company utilizing big data to create personalized marketing campaigns and improve customer experiences.<br />
          However, the abundance of data used by companies like Target raises concerns about the extent of data collection and the potential invasion of consumer privacy. <br />
          While personalization can enhance customer satisfaction and drive sales, it must not compromise consumer privacy, highlighting the need for a delicate balance. <br />
          This site will delve into Target's approach to data-driven marketing, the ethical considerations involved, Target's response to privacy concerns, and a conclusion highlighting the importance of prioritizing consumer privacy.</p>
      </div>
      <div className='col' style={{textAlign: 'center'}}>
        <img src='pr524-target-ig-2-790x1019.png' width={400} style={{textAlign:'center'}}/>
        <div><a href='https://dainius.online/target.html' target='_blank'>https://dainius.online/target.html</a></div>
      </div>
    </div>
    
  </div>
    
  );
};