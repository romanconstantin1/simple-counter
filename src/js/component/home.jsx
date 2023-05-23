import React from "react";
import { Counter } from "./counter.jsx";

//create your first component
const Home = (props) => {
	
	return (
		<div>
			<h1 className="text-center">this page loaded</h1>
			<Counter timer={props.timer} />
			<h1 className="text-center">seconds ago</h1>
		</div>
	);
};

export default Home;
