import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const fname  = 'Deepak';
const img1 = `https://picsum.photos/200/300`;
const img2 = `https://picsum.photos/250/300`;
const img3 = `https://picsum.photos/300/300`;
const img4 = `https://picsum.photos/400/300`;
ReactDOM.render(
  <>
  <h1 className="heading">{`${fname} Gallery`}</h1>
  <div className="gallery">
  <img src={img1} alt="firstImage"/>
  <img src={img2} alt="secoundImage"/>
  <img src={img3} alt="thirdImage"/>
  <img src={img4} alt="fourthImage"/>
  </div>
  <p className="footer"> created by :- 	&copy; <a href="https://deepak-jha.netlify.app/" target="_deepak">{fname
  }</a></p>
  </>
  ,
  document.getElementById('root')
);


reportWebVitals();
