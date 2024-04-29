import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Titlea from './title.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	<Titlea test="ciao" />
	</React.StrictMode>
);

reportWebVitals();
