import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./borders.css"
import Titlea from './yippie.js';
import Textar from './yippie2.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	<Titlea test="Titolo" />
	<Textar imgsrc="./img.png" imgdisc="hi!" textlol="heyo! how's it going" />
	</React.StrictMode>
);

reportWebVitals();
