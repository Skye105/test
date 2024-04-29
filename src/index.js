import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import titlea from './title.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	<titlea test="ciao" />
	</React.StrictMode>
);

reportWebVitals();
