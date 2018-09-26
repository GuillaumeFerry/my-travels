// src/Travels.js
import React from "react";
import Travel from "./Travel";

const travels = [
	{
		id: "travel01",
		destination: "Rio de Janeiro",
		country: "Brazil",
		photo: "https://images.unsplash.com/photo-1531514910867-8d1ca7505f55?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=249682f7a6ec90cc6f7bb61ac8f30a0e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
		distance: "9000km"
	},
	{
		id: "travel02",
		destination: "Tokyo",
		country: "Japan",
		photo: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04cb1349ddef3da346cb4565d58c4d80&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
		distance: "9700km"
	},
	{
		id: "travel03",
		destination: "New-York",
		country: "USA",
		photo: "https://images.unsplash.com/photo-1531449862596-16e4c62e2b10?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7261ec0c2507c69c76ec73a01162637b&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
		distance: "5834km"
	},
	{
		id: "travel04",
		destination: "Reykjavik",
		country: "Iceland",
		photo: "https://images.unsplash.com/photo-1465353471565-b77e538f34c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ddeff9a5c311f714c19cd18a669ffef&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
		distance: "2231km"
	},
	{
		id: "travel05",
		destination: "Merlbourne",
		country: "Autralia",
		photo: "https://images.unsplash.com/photo-1531817489671-2d201de9ed27?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f0cabb5bac2fd500442b433b69b2098&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
		distance: "16781km"
	}
];



const Travels = () => (
	<div>
    	{travels.map(travel => (
    		<Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance} key={travel.id}/>
      		// <Quote {...travel} key={travel.id}/> ==> alternative avec le spread operator
    ))}
	</div>
);

export default Travels;