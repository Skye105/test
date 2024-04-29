import "./yippie2.css"

function Textar(prop){
	return(
		<div>
		<img src={prop.imgsrc}>
		<br>
		<p>{prop.imgdisc}</p>
		<br><br>
		<p>{prop.textlol}</p>
		</div>
	);
}

export default Textar;
