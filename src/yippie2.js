import "./yippie2.css"
import React from 'react';

function Textar(prop){
	return(
		<div>
		<img src={prop.imgsrc} />
		<br />
		<p>{prop.imgdisc}</p>
		<br /><br />
		<p>{prop.textlol}</p>
		</div>
	);
}

export default Textar;
