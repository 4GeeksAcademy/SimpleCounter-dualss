import React from "react";
import Contador from "./Contador"

//include images into your bundle


//create your first component
let segundos = 456;
function updateCounter(){
	segundos++;
	document.getElementById("counter").innerText = `${segundos}`;
}
setInterval(updateCounter, 1000);
const Home = () => {
	
	return (
		<div className="text-center">
           <Contador time={segundos}></Contador> 
		</div>
	);
};

export default Home;