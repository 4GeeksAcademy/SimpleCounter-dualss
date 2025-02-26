import React from "react";
import Contador from "./Contador"

//Contador basico sin mucha cosa pa quitarmelo de en medio, lo mejoraré


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